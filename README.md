# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## How to deploy to cf
1. edit app.t.ts 
``` typescript
interface Platform {
    env: {
    // COUNTER: DurableObjectNamespace;
    YOUR_KV_NAME: KVNamespace
    };
    context: {
    waitUntil(promise: Promise<any>): void;
    };
    caches: CacheStorage & { default: Cache }
}
```

2. xxx/+server.ts
``` ts
export const POST: RequestHandler = async ({ request , platform }) => {

    const obj = await request.json()
    const keyName = obj.keyName;
    const res = await platform?.env.YOUR_KV_NAME.delete(keyName) 
    
    return json({ success: true })

}

```
3. binding
> upload your project and delpoy it (you may need to edit env var)
> go to "workers-and-pages" => view details => function => binding 
> choose a kv (the customize name should be same with YOUR_KV_NAME)
> see note, reploy!