import { increaseVote } from "../increaseVote";

test('Increase the `voteCount` by 1 if the the chosen `vote` is matching the corresponding `pollChoicesArr.name` field.', () => {
    let pollChoicesArr = [
        { 
            name: "Foo", 
            voteCount: 0,
        },
        { 
            name: "Bar", 
            voteCount: 0,
        }
    ];

    increaseVote("Foo", pollChoicesArr);
    
    expect(pollChoicesArr).toEqual(
        [
            { 
                name: "Foo", 
                voteCount: 1, 
            },
            { 
                name: "Bar", 
                voteCount: 0,
            }
        ]
    );

    increaseVote("Foo", pollChoicesArr);

    expect(pollChoicesArr).toEqual(
        [
            { 
                name: "Foo", 
                voteCount: 2, 
            },
            { 
                name: "Bar", 
                voteCount: 0,
            }
        ]
    );
});

test('Given unknown label do not change the `voteCount` of `pollChoicesArr`', () => {
    let pollChoicesArr = [
        { 
            name: "Foo", 
            voteCount: 1,
        },
        { 
            name: "Bar", 
            voteCount: 0,
        }
    ];
    
    increaseVote("Baz", pollChoicesArr);

    expect(pollChoicesArr).toEqual(
        [
            { 
                name: "Foo", 
                voteCount: 1,
            },
            { 
                name: "Bar", 
                voteCount: 0,
            }
        ]
    );
});