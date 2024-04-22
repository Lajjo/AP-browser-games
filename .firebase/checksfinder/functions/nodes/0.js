

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Ci6ikvGc.js","_app/immutable/chunks/disclose-version.CEiuLSgg.js","_app/immutable/chunks/runtime.CMUGUTkq.js","_app/immutable/chunks/render.BwFwgu8x.js","_app/immutable/chunks/lifecycle.O0X4Msqs.js"];
export const stylesheets = [];
export const fonts = [];
