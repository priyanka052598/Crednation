/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
  theme: {
    extend: {
      colors: {
        "bunker-50": "#f7f7f8",
        "bunker-300": "#b8b9c1",
        "bunker-600": "#5d5e6c",
        "bunker-900": "#393941",
        "bunker-950": "#18181b",
        "components-button-component-primarycolor": "#fff",
        "ripe-plum-50": "#fbf5ff",
        "ripe-plum-100": "#f5e8ff",
        "ripe-plum-300": "#ddb3ff",
        "ripe-plum-400": "#c983fd",
        "ripe-plum-500": "#b354f8",
        "ripe-plum-950": "#3e065f",
        gray: {
          "100": "#252538",
          "150": "#898c8c",
          "200": "#0e0e10",
          "250": "#252538",
          "300": "#0e0e10",

        },
        "components-button-component-primarycolor": "#fff",
        darkslategray: "#3a3a4c",
        "components-input-global-colortext": "rgba(0, 0, 0, 0.88)",
        darkgray: "#9ca3af",
        "bunker-100": "#eeeef0",
        "ripe-plum-100": "#f5e8ff",
        "secondary-grey": "#a3a3a3",
        "components-button-global-colorborder": "#d9d9d9",
      },
      spacing: {
        "components-button-global-controlheightlg": "40px",
        "components-button-global-marginxs": "8px",
        "size-base-size": "16px",
        "components-button-component-paddinginlinelg": "15px",
        "components-input-global-controlheight": "32px",
        "components-input-component-paddingblock": "4px",
        "size-base-sizems": "16px",
        "components-input-component-paddinginline": "11px",

      },
      fontFamily: {
        "lg-normal": "'SF Pro Display'",
        "base-base-normal": "'SF Pro Text'",
        urbanist: "Urbanist",
      },
      borderRadius: {
        "21xl": "40px",
        "45xl": "64px",
        "81xl": "100px",
        "components-button-global-borderradiuslg": "8px",
        "border-radius-borderradiuslg": "8px",
        "border-radius-borderradiussm": "4px",
        "components-input-global-borderradiussm": "4px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "19xl": "38px",
      xl: "20px",
      sm: "14px",
      "13xl": "32px",
      "11xl": "30px",
      "5xl": "24px",
      inherit: "inherit",
    },
    utilities: {
      '.no-spinner::-webkit-inner-spin-button, .no-spinner::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: '0',
      },
      '.no-spinner': {
        '-moz-appearance': 'textfield',
      },
    }
  },
  corePlugins: {
    preflight: false,
  },
};
