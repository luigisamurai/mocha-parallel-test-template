"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe('Given a list of numbers', () => {
    let suma;
    before(() => {
        suma = 1 + 2;
    });
    it('then 1 + 2 should 3', () => {
        chai_1.expect(suma).to.equal(3);
    });
});
//# sourceMappingURL=exampleTest.js.map