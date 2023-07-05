
tailwind.config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-main': "#ededed",
        'primary-mid': "#fafafa",
        'primary-light': "#ffffff",
        'secondary-main': "#74c042",
        'secondary-light': "#73cb43",
        'secondary-dark': "#8a8a8a",
        'text-main': "#3a3a3c",
        'text-mid': "#585858",
        'text-light': '#6b7070'
      },
      fontSize: {
        xxxxl:"60px",
        xxxl:"50px",
        xxl:'40px',
        xl: '35px',
        lg: "30px",
        md: "22px",
        rg:"20px",
        sm: "18px",
        xs: "16px",
        xxs: "14px"
      },
      fontWeight:{
        b:'800',
        sb:'700',
        md:'600',
        r:'500',
        l:'400'
      }

    },
  },
  plugins: [],
}
