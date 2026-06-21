<div align="center">

# 📚 API de Reserva de Dispositivos Escolares

### Sistema de gerenciamento de empréstimo de dispositivos (tablets, notebooks, etc.) para escolas de ensino médio

<br>

![Escola de Ensino Médio](https://lh3.googleusercontent.com/gps-cs-s/APNQkAEcyBnO023a5la2Vi-ES511Iv9-q2klRoY9EKqjlNaJDgCQ9i7K6k_OcWP9JzEnvbpibdyndA0k2QSKKowsioc7NN2IjbRtUgPzY-8wTvyd5n6qGjyAKwavdptLrTlOaRVXVnE=s1360-w1360-h1020)

> 🏫 **Escola Nossa Senhora de Lourdes**, onde este projeto foi pensado e desenvolvido.

<br>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![JavaScript](https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## 📖 Sobre o Projeto

Esta é uma **API REST** criada para ajudar escolas de ensino médio a controlar o **empréstimo e a reserva de dispositivos** (como tablets e notebooks) entre os professores.

Com ela é possível:

- 🖥️ Cadastrar e listar **dispositivos** disponíveis na escola.
- 👨‍🏫 Cadastrar e listar **professores**.
- 📝 Criar **reservas** de dispositivos feitas pelos professores.
- ↩️ **Devolver** (refund) uma reserva quando o dispositivo é entregue de volta.
- 🗑️ **Excluir** reservas, dispositivos ou professores.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Para que serve |
|------------|----------------|
| **Node.js** | Ambiente que executa o JavaScript no servidor |
| **Express** | Framework que cria o servidor e organiza as rotas |
| **Prisma** | ORM que conversa com o banco de dados de forma simples |
| **Zod** | Biblioteca que valida os dados que chegam na API |

---

## 📂 Estrutura do Projeto

Uma organização comum para projetos com Express + Prisma:

```
.
├── prisma/
│   └── schema.prisma      # Definição das tabelas do banco
├── src/
│   ├── controllers/       # Lógica de cada rota
│   ├── routes/            # Definição das rotas
│   ├── schemas/           # Validações com Zod
│   └── server.js          # Inicialização do servidor
├── .env                   # Variáveis de ambiente (URL do banco)
├── package.json
└── README.md
```

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo na ordem.

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

**2. Instale as dependências**

```bash
npm install
```

**3. Configure o arquivo `.env`**

Crie um arquivo chamado `.env` na raiz com a conexão do banco de dados:

```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

**4. Rode as migrations do Prisma** (cria as tabelas no banco)

```bash
npx prisma migrate dev
```

**5. Inicie o servidor**

```bash
npm run dev
```

O servidor ficará disponível em:

```
http://localhost:3000
```

---

> ℹ️ Todas as rotas abaixo começam com `/api`.

---

## 📡 Documentação das Rotas

A seguir estão **todas as rotas** da API, com exemplos de requisição e resposta.

### 🖥️ Dispositivos (`/api/devices`)

<details open>
<summary><b>➕ Criar um dispositivo</b></summary>

**`POST /api/devices`**

Corpo da requisição:

```json
{
  "name": "Tablet"
}
```

Resposta `201 Created`:

```json
{
  "message": "Dispositivo criado com sucesso",
  "data": {
    "id": 1,
    "name": "Tablet",
    "available_quantity": 20,
    "max_quantity": 20,
    "createdAt": "2026-06-10T19:40:17.971Z",
    "updatedAt": "2026-06-10T19:40:17.971Z"
  }
}
```

</details>

<details>
<summary><b>📋 Listar todos os dispositivos</b></summary>

**`GET /api/devices`**

Resposta `200 OK`:

```json
{
  "message": "Dispositivos encontrados com sucesso",
  "data": [
    {
      "id": 1,
      "name": "Tablet",
      "available_quantity": 20,
      "max_quantity": 20,
      "createdAt": "2026-06-10T19:40:17.971Z",
      "updatedAt": "2026-06-10T19:40:17.971Z"
    }
  ]
}
```

</details>

<details>
<summary><b>🗑️ Excluir um dispositivo</b></summary>

**`DELETE /api/devices/:id`**

Exemplo: `DELETE /api/devices/2`

Se o dispositivo não existir, retorna `404 Not Found`:

```json
{
  "error": "Dispositivo não encontrado"
}
```

</details>

---

### 👨‍🏫 Professores (`/api/teachers`)

<details open>
<summary><b>➕ Criar um professor</b></summary>

**`POST /api/teachers`**

Corpo da requisição:

```json
{
  "name": "Vania"
}
```

Resposta `201 Created`:

```json
{
  "message": "Professor criado com sucesso",
  "data": {
    "id": 4,
    "name": "Vania",
    "createdAt": "2026-06-15T17:38:28.282Z",
    "updatedAt": "2026-06-15T17:38:28.282Z"
  }
}
```

</details>

<details>
<summary><b>📋 Listar todos os professores</b></summary>

**`GET /api/teachers`**

Resposta `200 OK`:

```json
{
  "message": "Professores encontrados com sucesso",
  "data": []
}
```

</details>

<details>
<summary><b>🔍 Buscar um professor pelo ID</b></summary>

**`GET /api/teachers/:id`**

Exemplo: `GET /api/teachers/1`

Resposta `200 OK`:

```json
{
  "id": 1,
  "name": "Igor",
  "createdAt": "2026-06-10T18:22:04.267Z",
  "updatedAt": "2026-06-10T18:22:04.267Z"
}
```

</details>

<details>
<summary><b>🗑️ Excluir um professor</b></summary>

**`DELETE /api/teachers/:id`**

Exemplo: `DELETE /api/teachers/2`

Se o professor não existir, retorna `400 Bad Request`:

```json
{
  "error": "Professor não encontrado"
}
```

</details>

---

### 📝 Reservas (`/api/reservations`)

<details open>
<summary><b>➕ Criar uma reserva</b></summary>

**`POST /api/reservations`**

Um professor reserva uma certa quantidade de um dispositivo.

Corpo da requisição:

```json
{
  "device_id": 1,
  "teacher_id": 3,
  "reservation_quantity": 15
}
```

Resposta `201 Created`:

```json
{
  "message": "Reserva criada com sucesso",
  "data": {
    "id": 2,
    "device_id": 1,
    "reservation_quantity": 15,
    "refunded": false,
    "refundedAt": null,
    "createdAt": "2026-06-15T10:20:45.994Z",
    "updatedAt": "2026-06-15T10:20:45.994Z",
    "teacher_id": 3
  }
}
```

</details>

<details>
<summary><b>📋 Listar todas as reservas</b></summary>

**`GET /api/reservations`**

Traz cada reserva junto com os dados do **dispositivo** e do **professor** relacionados.

Resposta `200 OK`:

```json
{
  "message": "Reservas encontradas com sucesso",
  "data": [
    {
      "id": 2,
      "device_id": 1,
      "reservation_quantity": 15,
      "refunded": true,
      "refundedAt": "2026-06-15T10:34:13.454Z",
      "createdAt": "2026-06-15T10:20:45.994Z",
      "updatedAt": "2026-06-15T10:20:45.994Z",
      "teacher_id": 3,
      "device": {
        "id": 1,
        "name": "Tablet",
        "available_quantity": 20,
        "max_quantity": 20
      },
      "teacher": {
        "id": 3,
        "name": "Igor"
      }
    }
  ]
}
```

</details>

<details>
<summary><b>↩️ Devolver uma reserva (refund)</b></summary>

**`POST /api/reservations/:id/refund`**

Marca a reserva como devolvida e registra a data da devolução.

Exemplo: `POST /api/reservations/2/refund`

Resposta `200 OK`:

```json
{
  "message": "Reserva devolvida com sucesso",
  "data": {
    "id": 2,
    "device_id": 1,
    "reservation_quantity": 15,
    "refunded": true,
    "refundedAt": "2026-06-15T10:34:13.454Z",
    "createdAt": "2026-06-15T10:20:45.994Z",
    "updatedAt": "2026-06-15T10:20:45.994Z",
    "teacher_id": 3
  }
}
```

</details>

<details>
<summary><b>🗑️ Excluir uma reserva</b></summary>

**`DELETE /api/reservations/:id`**

Exemplo: `DELETE /api/reservations/1`

Resposta `200 OK`:

```json
{
  "message": "Reserva excluída com sucesso",
  "data": {
    "id": 1,
    "device_id": 1,
    "reservation_quantity": 10,
    "refunded": false,
    "refundedAt": null,
    "createdAt": "2026-06-15T10:07:44.024Z",
    "updatedAt": "2026-06-15T10:07:44.024Z",
    "teacher_id": 3
  }
}
```

</details>

---

## 📋 Resumo de Todas as Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/devices` | Criar dispositivo |
| `GET` | `/api/devices` | Listar dispositivos |
| `DELETE` | `/api/devices/:id` | Excluir dispositivo |
| `POST` | `/api/teachers` | Criar professor |
| `GET` | `/api/teachers` | Listar professores |
| `GET` | `/api/teachers/:id` | Buscar professor por ID |
| `DELETE` | `/api/teachers/:id` | Excluir professor |
| `POST` | `/api/reservations` | Criar reserva |
| `GET` | `/api/reservations` | Listar reservas |
| `POST` | `/api/reservations/:id/refund` | Devolver reserva |
| `DELETE` | `/api/reservations/:id` | Excluir reserva |

---

## 🧪 Como Testar a API

Você pode testar as rotas usando ferramentas como **Insomnia** ou **Postman**.

Exemplo de teste com `curl` (criar um dispositivo):

```bash
curl -X POST http://localhost:3000/api/devices \
  -H "Content-Type: application/json" \
  -d '{"name": "Tablet"}'
```

Exemplo de teste com `curl` (criar uma reserva):

```bash
curl -X POST http://localhost:3000/api/reservations \
  -H "Content-Type: application/json" \
  -d '{"device_id": 1, "teacher_id": 3, "reservation_quantity": 15}'
```

---

## ⚠️ Códigos de Resposta Mais Comuns

| Código | Significado |
|--------|-------------|
| `200 OK` | Tudo certo, a requisição funcionou |
| `201 Created` | Algo novo foi criado com sucesso |
| `400 Bad Request` | Dados inválidos ou faltando |
| `404 Not Found` | O recurso não foi encontrado |

---

## 🤝 Contribuindo

Quer ajudar a melhorar o projeto? Siga os passos:

1. Faça um **fork** do repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e o commit: `git commit -m "Minha nova feature"`
4. Envie para o seu fork: `git push origin minha-feature`
5. Abra um **Pull Request** 🎉

---

<div align="center">

Feito com 💙 para escolas de ensino médio

</div>