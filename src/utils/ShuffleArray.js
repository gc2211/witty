// Receive an array as argument and return it shuffled
function ShuffleArray(array) {
    const shuffledArray = array.slice()
    shuffledArray.sort(() => Math.random() - 0.5)
    return shuffledArray
}

export default ShuffleArray