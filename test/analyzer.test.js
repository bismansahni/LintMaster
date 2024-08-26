import { expect } from 'chai';
import LintMaster from '../index.js';

describe('LintMaster Analysis', () => {
    it('should detect unnecessary .bind()', async () => {
        const code = 'const func = function() {}.bind(this);';
        const result = await LintMaster(code);
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    it('should detect usage of eval()', async () => {
        const code = 'eval("console.log(\'Hello World\')");';
        const result = await LintMaster(code);
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    it('should detect usage of var instead of let/const', async () => {
        const code = 'var x = 10;';
        const result = await LintMaster(code);
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });

    it('should detect unused variables', async () => {
        const code = 'let unused = 42;';
        const result = await LintMaster(code);
        console.log(result);
        expect(result).to.be.an('array').that.is.not.empty;
    });
});
