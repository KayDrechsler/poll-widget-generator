/*
 * # Calc vote percentile
 * - Calculate the vote percentile and round at two decimal places
 *   Todo: check if `Number.EPSILON` is required here to get an even
 *   more precise rounding. 
 */
const calcVotePercentile = (pollChoicesArr) => {
    let totalVoteCount = 0;
    for (let obj of pollChoicesArr) {
        totalVoteCount += obj.voteCount;
    }
    
    pollChoicesArr.map((result, index) => {
        pollChoicesArr[index].percentile = Math.round((result.voteCount / totalVoteCount * 100) * 100) / 100
    });
    
    return totalVoteCount;
}

export { calcVotePercentile };