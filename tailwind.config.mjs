// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         blue: {
//           50: "#000000",
//           100: "#e0effe",
//           200: "#bae0fd",
//           300: "#7cc6fb",
//           400: "#36a9f7",
//           500: "#0c8ee7",
//           600: "#0072c4",
//           700: "#0059a0",
//           800: "#064b84",
//           900: "#0a406e",
//         },
//         yellow: {
//           50: "#fffbeb",
//           100: "#fef3c7",
//           200: "#fde68a",
//           300: "#fcd34d",
//           400: "#fbbf24",
//           500: "#f59e0b",
//           600: "#d97706",
//           700: "#b45309",
//           800: "#92400e",
//           900: "#78350f",
//         },
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./app/22**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "custom-gray": "#e5e7eb", // Matches the light gray background
//         "custom-dark-gray": "#374151", // Matches the text color
//         "custom-light-gray": "#6b7280", // Matches the copyright text
//       },
//     },
//   },
//   plugins: [],
// };

// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "var(--primary)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans, "Geist Sans", Arial, sans-serif)'],
        mono: ['var(--font-geist-mono, "Geist Mono", monospace)'],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
