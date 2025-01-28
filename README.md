
# Frontend - React + Vite + TypeScript + Docker

Este é o projeto frontend, desenvolvido com **React**, **Vite** e **TypeScript**, e empacotado com **Docker** para garantir um ambiente consistente. O backend utiliza **json-server** para simular uma API RESTful.

## Tecnologias Utilizadas

- **React** (com **TypeScript**)
- **Vite** (bundler de frontend rápido)
- **Docker** (para criar containers isolados)
- **json-server** (para criar uma API RESTful simulada)
- **Docker Compose** (para orquestrar os containers)

## Funcionalidades

- Formulário para busca de endereços por **CEP** utilizando a API do [ViaCEP](https://viacep.com.br/ws/01001000/json/).
- CRUD (Create, Read, Update, Delete) para a entidade **Notícia** utilizando **json-server**.
- Uso de **Docker** para facilitar a configuração do ambiente e o deploy.

---

## Pré-requisitos

- **Docker**: Certifique-se de que o Docker está instalado e funcionando corretamente. Você pode baixar o Docker Desktop para Windows [aqui](https://www.docker.com/products/docker-desktop).

- **Docker Compose**: Necessário para orquestrar múltiplos containers. Caso não tenha o Docker Compose instalado, ele geralmente vem com o Docker Desktop. Caso contrário, siga [essas instruções](https://docs.docker.com/compose/install/) para instalação.

---

## Rodando o Projeto Localmente

### Passo 1: Clonar o repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/Marki1ins/g4f-mre-front-end-test.git
cd g4f-mre-front-end-test
```

### Passo 2: Configuração de variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias. Um exemplo do conteúdo do arquivo:

```env
VITE_API_URL=http://localhost:5000
```

A variável `VITE_API_URL` será usada para configurar a URL da API do backend no frontend.

### Passo 3: Subir os containers Docker

Execute o comando abaixo para construir e rodar os containers Docker:

```bash
docker-compose up --build
```

Isso vai iniciar dois containers:
- Um para o frontend (React + Vite) rodando na porta `4173`.
- Outro para o backend (json-server) rodando na porta `5000`.

Acesse o frontend no navegador em `http://localhost:4173` e a API do backend estará disponível em `http://localhost:5000`.

---

## Scripts de Desenvolvimento

Se você preferir rodar o projeto localmente sem Docker, pode usar os seguintes scripts:

### Rodando o frontend localmente

Para rodar o frontend localmente usando Vite, execute:

```bash
npm install
npm run dev:frontend
```

O Vite será iniciado na porta `4173` (padrão), e você poderá acessar o frontend via `http://localhost:4173`.

### Rodando o backend (json-server) localmente

Para rodar o backend localmente com json-server, execute:

```bash
npm install
npm run dev:backend
```

A API estará disponível em `http://localhost:5000`.

---

## Estrutura de Pastas

```plaintextd q q
├── docker/
│   ├── frontend/         # Dockerfile do frontend
│   │   └── Dockerfile
│   ├── backend/          # Dockerfile do backend
│   │   └── Dockerfile
├── public/               # Arquivos públicos do React
├── server/
│   └── db.json           # Banco de dados do json-server
├── src/                  # Código-fonte do frontend
├── .dockerignore         # Ignorar arquivos/pastas no contexto do Docker
├── docker-compose.yml    # Configuração de serviços Docker
├── .env                  # Variáveis de ambiente
└── package.json          # Dependências e scripts
```

---

## Como Funciona

### Docker Compose

Usamos o `docker-compose.yml` para orquestrar dois containers:
- O **frontend** (React com Vite).
- O **backend** (json-server simulando uma API RESTful).

### Backend (json-server)

O **json-server** é uma ferramenta que cria uma API RESTful simples a partir de um arquivo JSON (`db.json`). Ele é configurado para rodar na porta `5000`.

### Frontend (React + Vite)

O **Vite** é usado para desenvolver e servir o frontend de maneira rápida e eficiente. As requisições do frontend são feitas para o backend através da URL configurada na variável de ambiente `VITE_API_URL`.

---

## Testes

Testes automatizados podem ser executados no frontend e no backend. Caso queira adicionar testes, siga os exemplos de frameworks como Jest ou Testing Library no frontend e Mocha ou Chai no backend.

---

## Dockerfile

O **Dockerfile** do frontend está localizado na raíz do projeto. Ele define como construir a imagem do frontend usando a base do Node.js e o Vite.

---

## Considerações Finais

Este projeto utiliza **Docker** para garantir um ambiente de desenvolvimento consistente e facilitar a orquestração dos containers de frontend e backend. A utilização de **json-server** permite simular uma API RESTful simples e rápida, ideal para o desenvolvimento e testes do frontend.
