export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "no-extra-bind": "warn",
        "no-eval": "warn",
        "no-var": "warn",
        "no-unused-vars": "warn",
      },
    },
  ];
  