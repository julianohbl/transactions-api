# 💰 API de Transações Financeiras

Projeto desenvolvido durante o curso da [Rocketseat](https://rocketseat.com.br/), com o objetivo de praticar e consolidar conhecimentos em **Node.js** no desenvolvimento de APIs REST.  
A aplicação permite o gerenciamento de transações financeiras (créditos e débitos), com autenticação baseada em identificação do usuário entre requisições.

---

## 🚀 Funcionalidades

- ✅ Criar uma nova transação.
- ✅ Listar todas as transações de um usuário.
- ✅ Visualizar detalhes de uma transação específica.
- ✅ Obter um resumo com o saldo total da conta.
- ✅ Diferenciar transações de **crédito** e **débito**.
- ✅ Garantir que o usuário só visualize transações que ele criou.

---

## 📌 Regras de Negócio (RN)

1. Uma transação pode ser:
   - **Crédito:** soma ao saldo total.
   - **Débito:** subtrai do saldo total.
2. O usuário é identificado de forma única entre as requisições.
3. O usuário só pode acessar transações de sua própria conta.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript.
- **Fastify** — Framework web rápido e eficiente.
- **TypeScript** — Tipagem estática para maior segurança no desenvolvimento.
- **Knex.js** — Query builder para integração com banco de dados.
- **SQLite** — Banco de dados leve e simples para desenvolvimento.
- **Vitest** — Framework de testes.
- **Zod** — Validação de dados.

---

## 📂 Estrutura do Projeto

```
📦 transactions-api
 ┣ 📂 src
 ┃ ┣ 📂 @types        # Definições de tipos TypeScript para o projeto
 ┃ ┣ 📂 env           # Configuração e gerenciamento de variáveis de ambiente
 ┃ ┣ 📂 middlewares   # Middlewares para tratamento de requisições e respostas
 ┃ ┣ 📂 routes        # Rotas da aplicação
 ┃ ┣ app.ts           # Configuração principal da aplicação
 ┃ ┣ database.ts      # Configuração e conexão com o banco de dados
 ┃ ┗ server.ts        # Inicialização do servidor
 ┣ 📂 test
 ┃ ┗ 📜 transactions.spec.ts  # Testes automatizados relacionados às transações
 ┣ 📜 package.json
 ┣ 📜 .env.example
 ┣ 📜 .env.test.example
 ┣ 📜 README.md
 ┗ 📜 tsconfig.json
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/julianohbl/transactions-api.git
cd transactions-api
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
NODE_ENV=development
DATABASE_URL="./db/app.db"
```

### 4️⃣ Executar as migrações

```bash
npm run knex:migrate
```

### 5️⃣ Iniciar o servidor

```bash
npm run dev
```

---

## 📬 Endpoints Principais

| Método | Endpoint             | Descrição                             |
|--------|----------------------|---------------------------------------|
| POST   | `/transactions`      | Criar nova transação                  |
| GET    | `/transactions`      | Listar todas as transações do usuário |
| GET    | `/transactions/:id`  | Detalhes de uma transação específica  |
| GET    | `/transactions/summary` | Obter resumo da conta             |

---

## 🔒 Segurança

- Identificação de usuário via cookies.
- Restrições para acesso apenas às transações próprias.
- Validação de dados de entrada com **Zod**.

---

## 📈 Aprendizados

Durante o desenvolvimento, aprofundei conhecimentos em:

- Criação de APIs RESTful com **Fastify**.
- Uso de **Knex.js** e migrações de banco de dados.
- Boas práticas de organização de código no backend.
- Implementação de regras de negócio.
- Criação de testes.
- Manipulação e filtragem de dados por usuário.

---

💡 **Dica:** Caso queira ver mais projetos como este, acesse meu [LinkedIn](https://www.linkedin.com/in/julianohblima) ou [GitHub](https://github.com/julianohbl).
