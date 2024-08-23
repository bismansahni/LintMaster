import { ESLint } from "eslint";

const analyzeCode = async (code) => {
  const eslint = new ESLint();
  const results = await eslint.lintText(code);

  const issues = [];
  results[0].messages.forEach((result) => {
    console.log(`${result.message}:`, result);
    issues.push(result);
  });
  return issues;
};

export default analyzeCode;
