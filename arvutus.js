function matemaatilisedArvutused(a, b) {
    let summa = a + b;
    let vahe = a - b;
    let jagatis = Math.floor(a / b);
    let korrutis = a * a;

    return { summa, vahe, jagatis, korrutis };
}

module.exports = matemaatilisedArvutused;
