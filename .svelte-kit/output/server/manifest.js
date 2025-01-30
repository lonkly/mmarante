export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about.png","favicon.png","images/diplomas/1.jpg","images/diplomas/10.jpg","images/diplomas/11.jpg","images/diplomas/12.jpeg","images/diplomas/13.jpg","images/diplomas/14.jpg","images/diplomas/15.jpg","images/diplomas/2.jpg","images/diplomas/3.jpg","images/diplomas/4.jpg","images/diplomas/5.jpg","images/diplomas/6.jpg","images/diplomas/7.jpeg","images/diplomas/8.jpeg","images/diplomas/9.jpeg","images/diplomas/diploma.jpeg","images/diplomas/diploma1.jpeg","images/diplomas/diploma2.jpeg","images/diplomas/diploma3.jpeg","images/other/photo.jpg","images/other/skype.svg","images/other/telegram.svg","images/other/whatsapp.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.JTDucSTT.js","app":"_app/immutable/entry/app.Ck26L-Xt.js","imports":["_app/immutable/entry/start.JTDucSTT.js","_app/immutable/chunks/BqEjW-Hm.js","_app/immutable/chunks/BqbYSrUx.js","_app/immutable/chunks/DyJl9PGw.js","_app/immutable/chunks/DV-k85jG.js","_app/immutable/entry/app.Ck26L-Xt.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/x6IbAxHt.js","_app/immutable/chunks/DkR66JHa.js","_app/immutable/chunks/BqbYSrUx.js","_app/immutable/chunks/BqEjW-Hm.js","_app/immutable/chunks/DyJl9PGw.js","_app/immutable/chunks/DV-k85jG.js","_app/immutable/chunks/NWIR7S4s.js","_app/immutable/chunks/EURyEsC8.js","_app/immutable/chunks/hna_qA4E.js","_app/immutable/chunks/B-yi3Uh3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/certificates",
				pattern: /^\/certificates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/client",
				pattern: /^\/client\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/education",
				pattern: /^\/education\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/methods",
				pattern: /^\/methods\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/questionarie",
				pattern: /^\/questionarie\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/requests",
				pattern: /^\/requests\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
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
