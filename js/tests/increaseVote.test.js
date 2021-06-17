import { increaseVote } from "../increaseVote";

test('Increase the `voteCount` by 1 if the the chosen `vote` is matching the corresponding `resultArr.name` field.', () => {
    let resultArr = [
        { 
            name: "Foo", 
            voteCount: 0,
        },
        { 
            name: "Bar", 
            voteCount: 0,
        }
    ];

    increaseVote("Foo", resultArr);
    
    expect(resultArr).toEqual(
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

    increaseVote("Foo", resultArr);

    expect(resultArr).toEqual(
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

test('Given unknown label do not change the `voteCount` of `resultArr`', () => {
    let resultArr = [
        { 
            name: "Foo", 
            voteCount: 1,
        },
        { 
            name: "Bar", 
            voteCount: 0,
        }
    ];
    
    increaseVote("Baz", resultArr);

    expect(resultArr).toEqual(
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