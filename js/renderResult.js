const renderResult = (
    targetElement, 
    pollQuestion, 
    resultArr,
    totalVoteCount,
    ) => {

    const resultContainer = `<section class="opinary-result">
            <div class="opinary-result__body">
                <header>
                    <h2 class="opinary-visuallyhidden">Results</h2>
                    <h3 class="opinary-p opinary-text-center">We asked ${totalVoteCount} ${totalVoteCount < 2 ? `participant` : `participants`}:</h3>
                </header>
                <figure class="opinary-graph">
                    <figcaption class="opinary-figcaption">${pollQuestion}</figcaption>
                    <ul class="opinary-ul opinary-graph__list">
                        ${resultArr.map(({name, voteCount, percentile}, index) => {

                            return `<li class="opinary-graph__item">
                                <em class="opinary-graph__label">${name}</em>
                                <div class="opinary-graph__meter-wrapper">
                                    <meter min="0" max="100" value="0" class="opinary-graph__meter">
                                        ${percentile}% (${voteCount} votes)
                                    </meter>
                                    <span 
                                        class="opinary-graph__percentile"
                                        style="left: 0;">
                                        ${percentile}%
                                    </span>
                                </div>
                                <span class="opinary-graph__vote-count">(${voteCount} votes)</span>
                            </li>`;
                        }).join("")}
                    </ul>
                </figure>
                <small class="opinary-small opinary-small--headline">
                    A poll powered by <a href="https://opinary.com/">Opinary</a>
                </small>
            </div>
        </section>`;
    
    /*
     * # This function takes care of animating the result's percentile bars and labels.
     */
    const animateMeter = function() {
        const meterCollection = document.querySelectorAll(".opinary-graph__meter");
        const meterLabelCollection = document.querySelectorAll(".opinary-graph__percentile");
        
        /* - Meter bar */
        meterCollection.forEach((meter, index) => { 
            meter.value = resultArr[index].percentile;
        });
        
        /* - Percentile text label */
        let displayPercentile = "";
        
        meterLabelCollection.forEach((label, index) => {
            if(resultArr[index].percentile >= 80) {
                /* - Avoid misplaced labels on higher percentages on mobile viewports. */
                displayPercentile = `left: calc(${resultArr[index].percentile}% - 62px); text-align: right;`;
            } else {
                displayPercentile = `left: calc(${resultArr[index].percentile}% + 4px);`
            }
            
            label.style = displayPercentile;
            label.classList.add('opinary-graph__percentile--visible');
        });
    };

    /* - This setTimeout is necessary to animate the meter's pseudo elements. */
    setTimeout(() => {animateMeter()}, 400);

    targetElement.innerHTML = resultContainer;
}

export { renderResult };