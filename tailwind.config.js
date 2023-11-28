/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       animation: {
//         border: 'border 4s ease infinite',
//       },
//       keyframes: {
//         border: {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '10%, 500%, 1000%': {
            transform: 'rotate(10deg)',
          },
          '30%': {
            transform: 'rotate(5deg)',
          },
          '30%': {
            transform: 'rotate(-5deg)',
          },
        },
      },
    },
  },
  plugins: [],
}


