const calcVotePercentile = (resultArr) => {
    let totalVoteCount = 0;
    /* - Calculate the vote percentile and round at two decimal places
     *   Todo: check if `Number.EPSILON` is required here to get an even
     *   more precise rounding. 
     */
    for (let obj of resultArr) {
        totalVoteCount += obj.voteCount;
    }
    
    resultArr.map((result, index) => {
        resultArr[index].percentile = Math.round((result.voteCount / totalVoteCount * 100) * 100) / 100
    });
    
    return totalVoteCount;
}

export { calcVotePercentile };