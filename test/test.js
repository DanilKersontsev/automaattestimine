const { expect } = require('chai');
const matemaatilisedArvutused = require('../kood');

describe('matemaatilisedArvutused', () => {
    it('arvutab summa õigesti', () => {
        const summa = matemaatilisedArvutused(10, 5).summa;
        expect(summa).to.equal(15);
    });

    it('arvutab vahe õigesti', () => {
        const vahe = matemaatilisedArvutused(10, 5).vahe;
        expect(vahe).to.equal(5);
    });

    it('arvutab jagatis õigesti', () => {
        const jagatis = matemaatilisedArvutused(10, 5).jagatis;
        expect(jagatis).to.equal(2);
    });

    it('arvutab korrutis õigesti', () => {
        const korrutis = matemaatilisedArvutused(10, 5).korrutis;
        expect(korrutis).to.equal(100);
    });
});
