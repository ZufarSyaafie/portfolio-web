/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: {
		relative: true,
		transform: (content) => content.replace(/taos:/g, ""),
		files: ["./*.{html,js}", "./public/**/*.js"],
	},
	theme: {
		extend: {
			colors: {
				background: "#F2F8FC",
				dark: "#1e293b",
			},
		},
	},
	plugins: [require("taos/plugin")],
	safelist: [
		"!duration-[0ms]",
		"!delay-[0ms]",
		'html.js :where([class*="taos:"]:not(.taos-init))',
	],
};
