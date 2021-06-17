import { calcVotePercentile } from '../calcVotePercentile';

test('Given pollChoicesArr return a number of total votes', () => {
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

test('Given pollChoicesArr with changed voteCounts recalculate the percentiles', () => {
    let pollChoicesArr = [
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

    calcVotePercentile(pollChoicesArr)

    expect(pollChoicesArr).toEqual([
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