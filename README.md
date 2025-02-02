<img alt="" src="https://res.cloudinary.com/muhrusdi/image/upload/v1665482878/new-senjs-cover.jpg">

## Features

- ✅ Next.js v15
- ✅ React Query
- ✅ React Hook Form
- ✅ Tailwindcss
- ✅ Typescript
- ✅ Framer Motion
- ✅ React Testing Library

## Installation

Install sen.js with yarn or npm

```bash
  git clone https://github.com/muhrusdi/sen.git my-app
  cd my-app
  yarn install
```

Run the development server:

```bash
  yarn dev
  # or
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Structures

```text
senjs-boilerplate
├── components
│   ├── button
│       ├── button.tsx
│   │   └── index.ts
├── app
│   ├── api
│   │   └── ping
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── providers.tsx
│   ├── page.tsx
├── public
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── postcss.config.js
├── env.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── LICENSE
└── package.json
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=mysql://example:example@localhost:3306/db_name`

`API_URL=/api/graphql`

`NEXT_PUBLIC_API_URL="/api/graphql"`

`JWT_SECRET=example_jwt`

`APOLLO_KEY=service:example123`

`APOLLO_GRAPH_VARIANT=current`

`APOLLO_SCHEMA_REPORTING=true`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Typescript](https://www.typescriptlang.org/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
