/*
 * # Find the corresponding object inside the `pollChoicesArr` which shares its `name` value
 *   with `labelTextNode` and increase its `voteCount` value by 1.
 */
const increaseVote = (vote, pollChoicesArr) => {
    for (let obj of pollChoicesArr) {
        if (obj.name === vote) {
            obj.voteCount++;
        }
    }
}

export { increaseVote };