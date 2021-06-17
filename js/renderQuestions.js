const renderQuestions = (questionArr, renderInTargetContainer) => {
    
    /*
     * # Create markup for each question that was created for the questionnaire.
     */
    
    questionArr.forEach((question, i) => {
        const singleQuestion = `<li class="opinary-questionnaire__item">
            <div class="opinary-questionnaire__item-body">
                <input 
                    type="radio" 
                    name="opinary-input-radio-answer" 
                    id="opinary-input-radio-answer-${i}"
                    class="opinary-questionnaire__input-radio">
                <label 
                    for="opinary-input-radio-answer-${i}"
                    class="opinary-questionnaire__label">${question}</label>
            </div>`;

        renderInTargetContainer.insertAdjacentHTML("beforeend", singleQuestion);
    });
}

export { renderQuestions };