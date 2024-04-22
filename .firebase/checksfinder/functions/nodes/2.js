

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BAIMCIhD.js","_app/immutable/chunks/disclose-version.CEiuLSgg.js","_app/immutable/chunks/runtime.CMUGUTkq.js","_app/immutable/chunks/lifecycle.O0X4Msqs.js"];
export const stylesheets = [];
export const fonts = [];
