export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DbeypQxd.js","app":"_app/immutable/entry/app.BJMZNtSh.js","imports":["_app/immutable/entry/start.DbeypQxd.js","_app/immutable/chunks/entry.CDoJiz6-.js","_app/immutable/chunks/runtime.CMUGUTkq.js","_app/immutable/entry/app.BJMZNtSh.js","_app/immutable/chunks/runtime.CMUGUTkq.js","_app/immutable/chunks/render.BwFwgu8x.js","_app/immutable/chunks/disclose-version.CEiuLSgg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
