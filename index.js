#!/usr/bin/env node

import fs from 'fs/promises';
import analyzeCode from "./lib/analyzer.js";

const LintMaster = async (input) => {
  let code;

  try {
    // Check if input is a file path or code string
    if (input.endsWith('.js') || input.includes('/')) {
      code = await fs.readFile(input, 'utf8');
    } else {
      code = input; // Treat input as a code string
    }

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

// Exporting LintMaster as the default export
export { LintMaster as default };

// Process command-line arguments
const args = process.argv.slice(2);

if (args.length > 0) {
  LintMaster(args[0]); // Assume the first argument is a file path or code string
} else {
  console.error("Please provide a directory path to analyze.");
}
