## 🗂 Estrutura do projeto

client: Interface do usuário
server: API, autenticação, conexão com banco de dados

---

##  Como executar

### Pré-requisitos
- Node.js instalado (
- Git instalado


### Passo a passo:

```bash
git clone https://github.com/Crowley1007/realfitness.git
cd realfitness

Rodando o backend:

cd server
npm install
npx prisma generate
node server.js 

Rodando o frontend:

cd realfitness
cd client

npm install
npm run dev
