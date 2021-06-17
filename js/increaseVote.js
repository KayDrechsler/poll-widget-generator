/*
 * ### Find the corresponding object inside the `resultArr` which shares its `name` value
 *     with `labelTextNode` and increase its `voteCount` value by 1.
 *     Then calculate its percentile.
 */
const increaseVote = (vote, resultArr) => {
    for (let obj of resultArr) {
        if (obj.name === vote) {
            obj.voteCount++;
        }
    }
}

export { increaseVote };