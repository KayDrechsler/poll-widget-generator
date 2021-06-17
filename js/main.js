import { renderQuestions } from './renderQuestions.js';
import { handleVote } from './handleVote.js';

/*
 * # Create Widget - a function allowing users to output a vote 
 */
const createOpinaryWidget = (uniqueName, targetElement, pollQuestion, questionArr) => {
    const pollContainer = `<div class="opinary-body">
        <section class="opinary-poll">
            <div class="opinary-poll__body">
                <form action="#">
                    <h2 class="opinary-h2">${pollQuestion}</h2>

                    <fieldset class="opinary-fieldset">
                        <ul class="opinary-questionnaire">
                            <!-- Each single question will be appended in here. -->
                        </ul>
                    </fieldset>
                    <div class="opinary-center-child">
                        <button type="button" class="opinary-button opinary-button--vote">Vote</button>
                    </div>
                </form>
                <small class="opinary-small opinary-small--headline">
                    A poll powered by <a href="https://opinary.com/">Opinary</a>
                </small>
            </div>
        </section>
        <div class="opinary-result-wrapper">
            <!-- The result container will be appended in here. -->
        </div>
    </div>`;

    /*
     * ## Render the widget.
     */
    document.querySelector('.' + targetElement).innerHTML = pollContainer;

    const questionList = document.querySelector(".opinary-questionnaire");
    const buttonVote = document.querySelector('.opinary-button--vote');
    const resultWrapper = document.querySelector('.opinary-result-wrapper');

    renderQuestions(questionArr, questionList);
    handleVote(uniqueName, questionArr, questionList, pollQuestion, buttonVote, resultWrapper);
}

window.createOpinaryWidget = createOpinaryWidget;

/* - Todo: how to declare this only once and reuse it instead of parsing it down? */
/*
const targetElement01 = document.querySelector('.opinary-target-container-01');

createOpinaryWidget(
    "opinaryWidget0",
    targetElement01, 
    "Which vaccine would you prefer?",
    [
        "AstraZeneca",
        "Biontech/Pfizer",
        "Sputnik V",
        "Johnson&Johnson",
        "Sinofarm",
        "Another vaccine",
    ]
);*/