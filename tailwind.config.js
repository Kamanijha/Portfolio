/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 10s linear infinite',
//         'color-border': 'borderPulse 3s infinite',
//       },
//       keyframes: {
//         borderPulse: {
//           '0%': { boxShadow: '0 0 0 10px #ff0000' },
//           '25%': { boxShadow: '0 0 0 10px #00ff00' },
//           '50%': { boxShadow: '0 0 0 10px #0000ff' },
//           '75%': { boxShadow: '0 0 0 10px #ff00ff' },
//           '100%': { boxShadow: '0 0 0 10px #ff0000' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
