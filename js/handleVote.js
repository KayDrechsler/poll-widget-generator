import { renderResult } from './renderResult.js';
import { calcVotePercentile } from './calcVotePercentile.js';
import { increaseVote } from './increaseVote.js';

const handleVote = (
    uniqueName,
    questionArr,
    questionList, 
    pollQuestion,
    buttonVote,
    resultWrapper) => {
    
    /*
     * ## Create an array with vote results
     */
    const loadedResult = localStorage.getItem(uniqueName);
    
    let pollChoicesArr = loadedResult ? JSON.parse(loadedResult) : questionArr.map((el) => {
       let returnObj = {};
       returnObj["name"] = el;
       returnObj["voteCount"] = 0;
       returnObj["percentile"] = 0;
       return returnObj;
    });

    /*
     * ## Read out the user's vote
     */
    
    /*
     * ### Iterate over each `li` inside `questionArr` and find the `input[type=radio]` that
           is `checked`.
     */
    const questionListRadioButtons = questionList.querySelectorAll('.opinary-questionnaire__input-radio');
    
    const findRadioChecked = (radioButtonCollection) => {
        for (const radioButton of radioButtonCollection) {
            if (radioButton.checked) {
                return radioButton;
            }
        }
    };

    /*
     * ### Inside this `input[type=radio]` `li` find the sibling `label`'s text 
     *     node (`labelTextNode`).
     */
    const readLabelOfRadioChecked = (radioChecked, selector) => {
        /*
         * - Get the next sibling element with the corresponding selector name.
         */
        let sibling = radioChecked.nextElementSibling;
        
        while (sibling) {
            if (sibling.matches(selector)) return sibling.textContent;
            sibling = sibling.nextElementSibling;
        }
    }

    /*
     * ## Handle form button's click 
     */
    buttonVote.addEventListener('click', () => {
        document.querySelector(".opinary-poll").remove();

        increaseVote(
            readLabelOfRadioChecked(
                findRadioChecked(questionListRadioButtons), 
                '.opinary-questionnaire__label'
            ),
            pollChoicesArr
        );
        
        const voteStats = calcVotePercentile(pollChoicesArr);

        localStorage.setItem(uniqueName, JSON.stringify(pollChoicesArr));
        renderResult(
            resultWrapper, 
            pollQuestion, 
            pollChoicesArr,
            voteStats,
        );
    });
}

export { handleVote };