This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



## Technology is used : 
UI component library  : Shadcnui 
icon: React Icon [https://react-icons.github.io/react-icons/]

Email Sending Tool: 
Resend [https://resend.com/overview]

DataBase ORM : Prisma <a ref="https://www.prisma.io/docs/getting-started/quickstart" > Link </a>

DataBase : MySQL



## Prisma Instruction:
1. install the Prisma CLI as a development dependency in the project:
```bash 
npm install prisma --save-dev 

```
2. set up Prisma ORM with the init command of the Prisma CLI: 
```bash
npx prisma init --datasource-provider mysql
```
3. Run a migration to create your database tables with Prisma Migrate 
```bash 
npx prisma migrate dev 

--name init
``` 

