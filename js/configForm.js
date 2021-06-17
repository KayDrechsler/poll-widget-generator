/*
 * # Config Form - a form that lets users create their own poll.
 */

import { createAnswer } from './createAnswer.js';

window.addEventListener('load', function() {
    /*
     * ## Create/Remove additional answers.
     */
    let additionalAnswerCount = 2;
    
    document.getElementById('opinary-create-answer').addEventListener('click', () => {
        additionalAnswerCount++;
        createAnswer(additionalAnswerCount);
    });
   
    /*
     * ## "Create Poll" Button events.
     */
    document.querySelector(".opinary-button-js").addEventListener('click', () => {
        const question = document.getElementById('opinary-input-text-question').value;
        const buttonWrapper = document.getElementById('opinary-create-form-button');
        const answersInputs = document.getElementsByName('opinary-input-type-answer[]');
        const codeHeadline = '<h2 class="opinary-h3 opinary-code-headline">Copy this code snippet into the source code of your website:</h2>';
        const codeHeadlineInvalid = '<em class="opinary-code-hint" id="opinary-warning-invalid-setup">Please enter at least <strong>one valid poll question</strong> and <strong>two valid poll answers</strong>!</em>';
        const warning = document.getElementById('opinary-warning-invalid-setup');
        const codeBlock = document.getElementById('opinary-code-wrapper');

        let answers = [];
        for (var i = 0; i < answersInputs.length; i++) {
            var a = answersInputs[i];
            answers.push(a.value);
        }
        
        /*
         * ## Remove all special characters that could cause invalid HTML attributes.
         *    Create the widgets target container class and a widget ID.
         */
        const cleanedQuestion = question.toLowerCase().replace(/[^\w]/gi, '-');
        const containerId = 'opinary-' + cleanedQuestion + '-container';
        const widgetId = 'opinary-' + cleanedQuestion + '-widget';
        
        /*
         * ## Attach the code container only if we have 2 or more poll answers created and
         *    if we have a valid poll question.
         */
        const validateAnswers = (arr) => {
            let validQuestions = 0;
            
            for (const [key, value] of Object.entries(arr)) {
                if (value != "") { validQuestions++ };
            }

            if (question.length != 0 && validQuestions >= 2) {
                return true;
            }
        }

        if(validateAnswers(answers) === true) {

            warning && warning.remove();

            /* - Filter empty entries of the array */
            const answersFiltered = answers.filter((el) => el != '');

            document.getElementById('opinary-code-to-copy').innerHTML = `<div id="opinary-code-wrapper">
            ${codeHeadline}
<code class="opinary-code">
    <pre>
    ${escapeHtml(`<link rel="stylesheet" href="http://localhost:8000/css/index.css" />
    <div class="${containerId}"></div>
    <script src="http://localhost:8000/js/main.js" type="module"></script>
    <script>
        window.addEventListener('load', function() {
            createOpinaryWidget(
                "${widgetId}",
                "${containerId}", 
                "${question}",
                ["${answersFiltered.join('","')}"]
            );
        });
    </script>`)}
    </pre> 
</code>
            </div>`;
        } else if (warning < 1) {
            /* - Remove outdated code container if existing */
            codeBlock && codeBlock.remove();

            buttonWrapper.insertAdjacentHTML(
                'afterend', 
                codeHeadlineInvalid
            );
        };
    });

    /*
     * ## Escape all characters that could interfere with rendering the HTML as 
     *    plain text.
     */
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});