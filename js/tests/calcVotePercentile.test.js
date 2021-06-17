import { calcVotePercentile } from '../calcVotePercentile';

test('Given resultArr return a number of total votes', () => {
    expect(calcVotePercentile([
        {
            percentile: 0,
            voteCount: 0,
        },
        {
            percentile: 100,
            voteCount: 2,
        },
        {
            percentile: 100,
            voteCount: 5,
        },
    ])).toBe(7);
});

test('Given resultArr with changed voteCounts recalculate the percentiles', () => {
    let resultArr = [
        {
            percentile: 33.33,
            voteCount: 1,
        },
        {
            percentile: 66.67,
            voteCount: 3,
        },
        {
            percentile: 0,
            voteCount: 0,
        },
    ]

    calcVotePercentile(resultArr)

    expect(resultArr).toEqual([
        {
            percentile: 25,
            voteCount: 1,
        },
        {
            percentile: 75,
            voteCount: 3,
        },
        {
            percentile: 0,
            voteCount: 0,
        },
    ]);
});