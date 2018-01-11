let universe
let generationNumber

const countLiveNeighbours = (x, y, universe) => {
    let liveNeighbours = 0
    
    const offsets = [
        {x: -1, y: 1},
        {x: 0, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 0},
        {x: 1, y: -1},
        {x: 0, y: -1},
        {x: -1, y: -1},
        {x: -1, y: 0},
    ].forEach((offset) => {
        if ((x + offset.x >= 0 && x + offset.x < universe.length)
            && (y + offset.y >= 0 && y + offset.y < universe[x].length)
            && (universe[x + offset.x][y + offset.y] === '*')
        ) {
            liveNeighbours += 1
        }
    })

    return liveNeighbours
}

const liveOrDie = (cell, liveNeighbours) => {
    if (cell === '-' && liveNeighbours === 3) {
        return '*'
    }
    if (cell === '*' && liveNeighbours < 2) {
        return '-'
    }
    if (cell === '*' && liveNeighbours > 3) {
        return '-'
    }
    else {
        return cell
    }
}

module.exports = {
    generate: () => {
        ++this.generationNumber
        let newUniverse = this.universe

        if (this.universe && this.universe[0] && typeof this.universe[0][0] !== 'undefined') {
            newUniverse = this.universe.map(
                (row, x) => {
                    return row.map(
                        (cell, y) => {
                            const liveNeighbours = countLiveNeighbours(x, y, this.universe)
                            return liveOrDie(cell, liveNeighbours)
                        }
                    )
                }
            )
        }
        this.universe = newUniverse
    },
    initialiseUniverseWithSeedUniverse: (universe) => {
        this.generationNumber = 0
        this.universe = universe
    },
    getCurrentUniverse: () => {
        return this.universe
    },
    getGenerationNumber: () => {
        return this.generationNumber
    },
}
