import 'dotenv/config'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from './generated/prisma/client.js';
import authenticateToken from './auth.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
const port = 3001;

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


app.post('/usuarios', async (req, res) => {
    let { email, name, age, password, role } = req.body;

    role = role.toUpperCase();

    if (!['ALUNO', 'INSTRUTOR'].includes(role)) {
        return res.status(400).json({ message: 'Role inválido. Use ALUNO ou INSTRUTOR.' });
    }

    try {
        await prisma.user.create({
            data: {
                email,
                name,
                age,
                password: bcrypt.hashSync(password, 10),
                role
            }
        });

        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro ao criar usuário.' });
    }
});


app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                age: user.age,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro ao fazer login.' });
    }
});



app.get('/usuarios/profile', authenticateToken, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.userId },
            select: {
                id: true,
                email: true,
                name: true,
                age: true,
                role: true,
                createdAt: true
            }
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        res.status(500).json({ message: 'Erro ao buscar perfil do usuário.' });
    }
});


app.put('/usuarios/profile', authenticateToken, async (req, res) => {
    const { name, email, age, currentPassword, newPassword } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { id: req.userId }
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }


        if (newPassword) {
            if (!currentPassword) {
                return res.status(400).json({ message: 'Senha atual é obrigatória para alterar a senha.' });
            }

            const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
            if (!isCurrentPasswordValid) {
                return res.status(400).json({ message: 'Senha atual incorreta.' });
            }
        }


        const updateData = {
            name,
            email,
            age: (age !== undefined && age !== null && age !== '') ? parseInt(age) : user.age // Correção: Garante que age é um número ou mantém o antigo
        };


        if (newPassword) {
            updateData.password = await bcrypt.hash(newPassword, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id: req.userId },
            data: updateData,
            select: {
                id: true,
                email: true,
                name: true,
                age: true,
                role: true,
                createdAt: true
            }
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Erro ao atualizar perfil:', error);

        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            return res.status(400).json({ message: 'Este email já está em uso.' });
        }

        res.status(500).json({ message: 'Erro ao atualizar perfil.' });
    }
});


app.put('/usuarios/:id', async (req, res) => {
    const id = req.params.id

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            password: req.body.password
        }
    })

    res.status(200).json({
        message: 'Usuário atualizado com sucesso!'
    })
})

app.delete('/usuarios/:id', async (req, res) => {
    const id = req.params.id

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({
        message: 'Usuário deletado com sucesso!'
    })
})



app.post('/treinos', authenticateToken, async (req, res) => {
    const { nome, descricao, exercicios, visibilidade, tipoCriador } = req.body;

    try {
        const usuario = await prisma.user.findUnique({ where: { id: req.userId } });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        const novoTreino = await prisma.treino.create({
            data: {
                nome,
                descricao,
                exercicios,
                criadorId: usuario.id,
                tipoCriador: tipoCriador || (usuario.role === 'INSTRUTOR' ? 'INSTRUTOR' : 'ALUNO'),
                visibilidade: visibilidade?.toUpperCase() || 'PRIVADO',
                instrutorId: usuario.role === 'INSTRUTOR' ? usuario.id : null,
            },
        });
        res.status(201).json(novoTreino);
    } catch (error) {
        console.error('Erro ao criar treino:', error);
        res.status(500).json({ message: 'Erro ao criar treino.' });
    }
});


app.get('/usuarios/treinos', authenticateToken, async (req, res) => {
    try {
        const usuario = await prisma.user.findUnique({ where: { id: req.userId } });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        let treinos;

        if (usuario.role === 'INSTRUTOR') {

            treinos = await prisma.treino.findMany({
                where: {
                    OR: [
                        { criadorId: usuario.id },
                        { instrutorId: usuario.id },
                    ],
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
        } else {

            treinos = await prisma.treino.findMany({
                where: { criadorId: usuario.id },
                orderBy: {
                    createdAt: 'desc'
                }
            });
        }

        res.status(200).json(treinos);
    } catch (error) {
        console.error('Erro ao listar treinos:', error);
        res.status(500).json({ message: 'Erro ao listar treinos.' });
    }
});


app.put('/treinos/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, exercicios, visibilidade } = req.body;

    try {
        const treino = await prisma.treino.findUnique({
            where: { id }
        });

        if (!treino) {
            return res.status(404).json({ message: 'Treino não encontrado.' });
        }

        if (treino.criadorId !== req.userId) {
            return res.status(403).json({ message: 'Você não tem permissão para editar este treino.' });
        }

        const treinoAtualizado = await prisma.treino.update({
            where: { id },
            data: {
                nome,
                descricao,
                exercicios,
                visibilidade: visibilidade?.toUpperCase() || 'PRIVADO'
            }
        });

        res.status(200).json(treinoAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar treino:', error);
        res.status(500).json({ message: 'Erro ao atualizar treino.' });
    }
});


app.delete('/treinos/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        const treino = await prisma.treino.findUnique({
            where: { id }
        });

        if (!treino) {
            return res.status(404).json({ message: 'Treino não encontrado.' });
        }

        if (treino.criadorId !== req.userId) {
            return res.status(403).json({ message: 'Você não tem permissão para excluir este treino.' });
        }

        await prisma.treino.delete({
            where: { id }
        });

        res.status(200).json({ message: 'Treino excluído com sucesso!' });
    } catch (error) {
        console.error('Erro ao excluir treino:', error);
        res.status(500).json({ message: 'Erro ao excluir treino.' });
    }
});

// --- ROTAS DE RECUPERAÇÃO DE SENHA ---
const resetTokens = new Map(); // Garanta que este Map esteja no escopo global

app.post('/recuperar-senha', async (req, res) => {
    const { email } = req.body;
    console.log(`Recuperação de senha solicitada para o email: ${email}`);

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            console.log(`Email '${email}' não encontrado.`);
            return res.status(200).json({ message: 'Se um email correspondente for encontrado, um link de recuperação foi enviado.' });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutos de expiração

        resetTokens.set(token, { userid: user.id, expires: expiresAt.getTime() });
        console.log(`Token de recuperação de senha gerado para o usuário ${user.id}: ${token}`);

        const frontendUrl = 'http://localhost:5173';
        const resetLink = `${frontendUrl}/reset-password/${token}`;

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: 'Recuperação de Senha - REAL FITNESS',
                html: `
                    <p>Olá ${user.name},</p>
                    <p>Você solicitou uma redefinição de senha para sua conta no HeartCore Fitness.</p>
                    <p>Por favor, clique no link a seguir para redefinir sua senha:</p>
                    <p><a href="${resetLink}">${resetLink}</a></p>
                    <p>Este link é válido por 15 minutos.</p>
                    <p>Se você não solicitou uma redefinição de senha, ignore este e-mail.</p>
                    <p>Atenciosamente,</p>
                    <p>Equipe REAL Fitness</p>
                `,
            });

            console.log(`Email de recuperação enviado para ${user.email}`);
            res.status(200).json({ message: 'Se um email correspondente for encontrado, um link de recuperação foi enviado.' });

        } catch (emailError) {
            console.error('Erro ao enviar e-mail de recuperação:', emailError);
            res.status(200).json({ message: 'Se um email de cadastro foi encontrado, um link de redefinição de senha foi enviado para ele.' });
        }

    } catch (error) {
        console.error('Erro interno do servidor no processo de recuperação de senha:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao solicitar redefinição de senha.' });
    }
});

app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { novaSenha } = req.body;

    const data = resetTokens.get(token);

    if (!data || data.expires < Date.now()) {
        return res.status(400).json({ message: 'Token inválido ou expirado.' });
    }

    await prisma.user.update({
        where: { id: data.userid },
        data: { password: await bcrypt.hash(novaSenha, 10) }
    });

    resetTokens.delete(token);

    res.json({ message: 'Senha redefinida com sucesso.' });
});


app.get('/', (req, res) => {
    res.send('Servidor Backend Rodando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});