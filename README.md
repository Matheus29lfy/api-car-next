# Sobre os pacotes de instalação
npm, pnpm e  yarn são pacotes de instalação para libs que serão usadas no projeto bem como para ser "startado" depois que instalar, use o pacote de usa preferência

# Para Rodar o projeto
npm install 
yarn add
pnpm install

para rodar projeto depois de instalado vai estar no package.json scripts
npm run dev
pnpm run dev
yarn run dev


# DOCKER
docker-compose up
Já tem um arquivo docker com as config é só fazer o start do docker

Só ajustar .env.example para .env e alterar para o db que está rodando


# Prisma
Vai instalar as principais dependências e uma delas é o prisma que é um ORM para fazer interações com o banco de dados

Dentro da pasta prisma vai ter um chamado schema.prisma que são as classes
para fazer o schema do banco

No final tem um método chamado @@map("table_name") que é um alias para a tabela
Para cada migração deve-se rodar o comando

# Comando para migration 
npx prisma migrate dev [Nome da migation]

# Sobre o projeto

É uma api simples só para ter uma noção, está baseado em classe achei mais fácil de leitura, nessa meu irmão me ajudou, pelo que entendi tudo o que estiver dentro da pasta "/page" é caminho para api

então no meu exemplo é 
GET
/api/cars- Traz todos os carros

POST
/api/cars- Cria um carro novo

PUT
/api/cars?[id]- Atualiza um carro existente

DELETE
/api/cars?[id]- Delete um carro existente


a index.ts  /api/car onde tem a função handler é como se fosse a route 
Essa api é bem simples, só para ter uma base mesmo


A rota user é o padrão do projeto quando inicializa do zero, e todos os arquivos relacionados a user, arquivos .tsx são frontend

# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
```

```bash
yarn create next-app --example with-typescript with-typescript-app
```

```bash
pnpm create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
