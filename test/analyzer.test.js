// import { expect } from 'chai';
// import analyzeCode from '../lib/analyzer.js';

// describe('LintMaster Analysis', () => {
//     it('should detect unnecessary .bind()', async () => {
//         const code = 'const func = function() {}.bind(this);';
//         const result = await analyzeCode(code);
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });

//     it('should detect usage of eval()', async () => {
//         const code = 'eval("console.log(\'Hello World\')");';
//         const result = await analyzeCode(code);
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });

//     it('should detect usage of var instead of let/const', async () => {
//         const code = 'var x = 10;';
//         const result = await analyzeCode(code);
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });

//     it('should detect unused variables', async () => {
//         const code = 'let unused = 42;';
//         const result = await analyzeCode(code);
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });
// });




// import { expect } from 'chai';
// import LintMaster from '../index.js'; // Importing LintMaster instead of analyzeCode

// describe('LintMaster Analysis', () => {
//     it('should detect unnecessary .bind()', async () => {
//         const code = 'const func = function() {}.bind(this);';
//         const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });

//     it('should detect usage of eval()', async () => {
//         const code = 'eval("console.log(\'Hello World\')");';
//         const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });

//     it('should detect usage of var instead of let/const', async () => {
//         const code = 'var x = 10;';
//         const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });

//     it('should detect unused variables', async () => {
//         const code = 'let unused = 42;';
//         const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
//         console.log(result);
//         expect(result).to.be.an('array').that.is.not.empty;
//     });
// });





import { expect } from 'chai';
import LintMaster from '../index.js'; // Assuming index.js is in the root directory

describe('LintMaster Analysis', () => {
    it('should detect unnecessary .bind()', async () => {
        const code = 'const func = function() {}.bind(this);';
        const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    it('should detect usage of eval()', async () => {
        const code = 'eval("console.log(\'Hello World\')");';
        const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    it('should detect usage of var instead of let/const', async () => {
        const code = 'var x = 10;';
        const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    it('should detect unused variables', async () => {
        const code = 'let unused = 42;';
        const result = await LintMaster(code); // Calling LintMaster instead of analyzeCode
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });
});
