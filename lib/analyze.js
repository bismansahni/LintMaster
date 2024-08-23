import analyzeCode from "./analyzer.js";

const LintMaster = async (code) => {
  const issues = await analyzeCode(code);
  if (Array.isArray(issues)) {
    estimateSavings(issues);
  } else {
    console.error("Expected an array of issues, but got:", typeof issues);
  }
  return issues;
};

const estimateSavings = (issues) => {
  let savings = 0;
  issues.forEach((issue) => {
    if (issue.ruleId === "no-loop-func") {
      savings += 5;
    }
  });
  console.log(`Estimated energy savings: ${savings} units`);
};

export default LintMaster;
