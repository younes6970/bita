/** @type {import('@sveltejs/kit').Config} */
// import adapterStatic from "@sveltejs/adapter-static";
const config = {
    // kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: "@sveltejs/adapter-static",
    // }
};

export default config;
// https://www.youtube.com/watch?v=qSfdtmcZ4d0