# climate-api

### Back-end da plataforma Climate, construído em NodeJS, TypeScript, PostgreSQL.

### Plataforma responsável por sugerir ao usuário atividades a serem realizadas, de acordo com o clima da região que o mesmo cadastrou.

### Instruções de execução:

-   Após baixar o projeto, criar um arquivo .env na raíz e preencher conforme o .env.example;

-   Preencher o .env com as credenciais de base de dados seguindo o padrão do ORM utilizado no projeto: https://typeorm.io/#/ ;

-   Instalar os pacotes com `yarn`;

-   Executar as migrations, se necessário, com `yarn typeorm migration:run`;

-   Executar o projeto com `yarn dev`;
