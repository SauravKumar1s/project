/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        "regal-blue": "#DDE8FE",
        tahiti: "#243c5a",
        // blue: "#20416E",
        
      },
      width: {
        "900px": "900px",
        "320px": "320px",
      },
      height: {
        "400px": "400px",
      },



    },
  },
  
  plugins: [],
};
