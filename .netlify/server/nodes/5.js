

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CR4jOdzg.js","_app/immutable/chunks/DkR66JHa.js","_app/immutable/chunks/BqbYSrUx.js","_app/immutable/chunks/C5ex5sIj.js"];
export const stylesheets = ["_app/immutable/assets/5.OU6bvK7H.css"];
export const fonts = [];
