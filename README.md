This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Objects: 
```ts
    interface IProduct{
        id: number;
	    title: string;
	    value: number;
	    description: string;
	    image: string; //Caminho ?'../../...'
	    emphasis: boolean;
	    adde_to: date;
	    update_to: date;
	    category: string; // options Relacionamento   1:N, sendo N a tabela de categorias
    }

```

Options category exemple: 
```
criança | Amigo | Amiga | Aniversário | Aniversário 15 anos | Avó | Bebe | Casa Nova | Cestas de café | Cestas de Chás | Cestas Veganas | Dia dos Pais | Dia das mães | Espumante | Formatura | 
```

```ts
    interface ICategory{
        id: num;
	    name: str
	    image: string; //Caminho ?'../../...'
	    emphasis: boolean
	    adde_to: date;
	    update_to: date;
    }

```

 
```ts
interface IPost{
	id: num;
	title: str;
	description: str;
    content: string[]; // paragraph
	image: string; //Caminho ?'../../...'
	emphasis: boolean
	adde_to: date;
	update_to: date;
}

```

preciso de um usuario?
```ts
interface IUser{
	id: num;
	name: str;
    ...
	adde_to: date;
	update_to: date;
}

```
