/*
 * # Create Answer: a function that allows users to create/remove poll answers if needed.
 */

const createAnswer = () => {
    const totalAnswerCount = document.querySelectorAll('.opinary-poll__answer-row').length;
    const inputId = 'opinary-input-type-answer-' + totalAnswerCount;
    const removeButton = document.getElementsByClassName('opinary-poll__remove-answer');

    const additionalAnswerRow = `<div class="opinary-poll__answer-row">
        <label for="${inputId}" class="opinary-label">Enter a poll answer</label>
        
        <div class="opinary-poll__additional-answer">
            <input type="text" name="opinary-input-type-answer[]" id="${inputId}" class="opinary-input-text">
            <button type="button" class="opinary-poll__remove-answer" title="Remove this answer">
                <span class="opinary-poll__remove-answer-body">Remove this answer</span>
            </button>
        </div>
    </div>`;

    /*
     * ## Append answer
     */
    document.querySelector('.opinary-poll__answer-row:last-of-type')
        .insertAdjacentHTML('afterend', additionalAnswerRow);

    /*
     * ## Remove answer
     */
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', (e) => {
            e.currentTarget.parentNode.parentNode.remove();  
        }, false);
    }
}

export { createAnswer };