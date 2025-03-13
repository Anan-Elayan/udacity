import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginCypress from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: "readonly", 
        it: "readonly",       
        cy: "readonly",       
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      cypress: pluginCypress,
    },
    extends: ["plugin:cypress/recommended"], 
    rules: {
      "no-undef": "off", 
    },
  },
];
