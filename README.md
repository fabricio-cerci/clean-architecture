# Estudo de Clean Architecture com Node.js

Este projeto é uma implementação de exemplo dos princípios da Clean Architecture utilizando Node.js, TypeScript, Express, Sequelize e outras tecnologias modernas do ecossistema JavaScript.

## Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior é recomendada)
- [NPM](https://www.npmjs.com/) (geralmente vem instalado com o Node.js) ou [Yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd clean-arch
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

## Rodando a Aplicação

Para iniciar o servidor em modo de desenvolvimento, utilize o script `dev`. Ele usa o `nodemon` para monitorar alterações nos arquivos e reiniciar o servidor automaticamente.

```bash
npm run dev
```

## Rodando os Testes

Para executar a suíte de testes automatizados, utilize o comando `test`. Este script primeiro valida os tipos do TypeScript e, em seguida, executa os testes definidos com o Jest.

```bash
npm test
```