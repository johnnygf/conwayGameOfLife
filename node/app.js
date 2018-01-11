const gol = require('./gol.js')

gol.initialiseUniverseWithSeedUniverse([
    ['*', '*', '-', '-', '-', '-', '-', '-',],
    ['*', '*', '*', '-', '*', '-', '-', '-',],
    ['-', '-', '-', '-', '*', '-', '-', '-',],
    ['-', '-', '-', '-', '-', '-', '-', '-',],
    ['-', '-', '*', '-', '-', '-', '-', '-',],
    ['-', '-', '-', '*', '-', '-', '-', '-',],
    ['-', '-', '-', '-', '-', '-', '-', '-',],
    ['-', '-', '-', '-', '-', '-', '-', '-',],
]);

while (gol.getGenerationNumber() < 5) {
    gol.generate();
    console.log(gol.getCurrentUniverse());
}
