import { expect } from 'chai';

describe('Given a list of numbers', () => {
  let suma: number;

  before(() => {
    suma = 1 + 2;
  });

  it('then 1 + 2 should 3', () => {
    expect(suma).to.equal(3);
  });
});
