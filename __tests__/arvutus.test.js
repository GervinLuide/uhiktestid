const matemaatilisedArvutused = require('../arvutus');

test('testida summat', () => {
    expect(matemaatilisedArvutused(10, 5).summa).toBe(15);
});

test('testida vahet', () => {
    expect(matemaatilisedArvutused(10, 5).vahe).toBe(5);
});

test('testida jagatist', () => {
    expect(matemaatilisedArvutused(10, 5).jagatis).toBe(2);
});

test('testida korrutist', () => {
    expect(matemaatilisedArvutused(10, 5).korrutis).toBe(100);
});
