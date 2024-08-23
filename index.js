import analyzeCode from "./lib/analyzer.js";

const LintMaster = async (code) => {
  try {
    const issues = await analyzeCode(code);
    estimateSavings(issues);
    return issues;
  } catch (error) {
    console.error("Error analyzing code:", error);
    return [];
  }
};

const estimateSavings = (issues) => {
  let savings = 0;

  issues.forEach((issue) => {
    switch (issue.ruleId) {
      case "no-loop-func":
        savings += 5;
        break;
      case "no-unused-vars":
        savings += 2;
        break;
      case "no-extra-bind":
        savings += 3;
        break;
      case "no-eval":
        savings += 4;
        break;
      case "no-var":
        savings += 1;
        break;

      default:
        break;
    }
  });

  console.log(`Estimated energy savings: ${savings} units`);
};

export default LintMaster;
