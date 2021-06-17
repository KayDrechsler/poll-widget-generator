# Poll widget generator - Kay Drechsler (kay.drechsler@gmail.com)

## Setup
To see the project in your browser or to contribute to its development please navigate to the root folder. In here type `yarn install` to install all the necessary dependencies.

You need to start a local server with `yarn ws` on port 8000 to be able to use the widget generator.

When the server is running you can navigate your browser to http://localhost:8000/.

## Modifying styles
To modify the given stylesheet you need to navigate to the file `/scss/index.scss`. In here you can find and adjust SCSS. 

To compile the given SCSS file to regular CSS which is then consumed by `index.html` you need to have node sass installed. The command line `npm i node-sass` will take care of this. To watch the scss file and automatically compile it on change run `npm run scss`. 
*Important:* in order to trigger the compilation from `.scss` to `.css` change the stylesheet and save. 

## Configurating a poll widget
To set up a poll widget simply navigate to the `index.html` of this project by opening `localhost:8000` in your browser. In here you'll find a simple tool which will allow you to enter poll specific data and generate a code snippet for you that you can copy/paste into your own website to display the poll. 

## Voting on the poll
Once you have your poll widget on your page and a vote has been submitted you can vote again by simply refreshing your browser. 

The vote results are stored in localStorage. To clear it navigate inside your browser's dev tools 
to -> application -> localStorage and clear it. This will reset all previous votes. 

Please note, that the widget will only work if you have the local server running on port `8000`.

## Demo pages
You can see two demo pages where the widget was already used. Just navigate in your browser to 
http://localhost:8000/poll1.html or http://localhost:8000/poll2.html while `yarn ws` is running. 

## Unit tests
You can run unit tests by executing `yarn test` on the root folder. 

## Motivation of choices
My goal was to create a simple poll widget that is easy to understand and use.

### HTML
The HTML should reflect a modern HTML5 outline which should at least be fully accessible via keyboard navigation. The website is also fully useable without stylesheet. It should be readable for screenreaders and search engine crawlers. Except for the module scripts part it is fully validated.

### CSS
Sass granted me a fast and reliable way to create layouts fast. Creating own stylesheets for each aspect/component of the website makes it easier for other developers to understand the styles and to contribute. Of course as a team we should decide together on topics like variable naming, using `$spacing` variables instead of fixed `px` values, relative units. 
I used the [BEM](http://getbem.com/naming/) methodology to reflect [atomic design](https://bradfrost.com/blog/post/atomic-web-design/). 

### JavaScript
I decided to use [ES6 template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/) because with these one can get very quick results and the code stays maintainable due to its simplicity. I could further increase the maintainability by using [ES6 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) to keep parts of the JavaScript encapsulated which makes it easier to understand their scope. 

## Improvement areas
### HTML
- Further investigation into accessibility tools like `aria-roles`.
- The `<meter>` element which was used on one hand satisfies accessibility concerns but on the other hand the styling of it isn't widely supported among browser yet. Fallbacks should be implemented. Firefox 89.0 and Safari 14.1 are not showing the full styling of it. A simple `<div><span>` construct should suffice to display the result bars as well. 

### CSS
- With a proper configuration we could also use [CSS modules](https://github.com/css-modules/css-modules) to circumvent the challenge of not polluting the client's code with our own styles. It would also make naming a bit easier. 
- Writing fallbacks for unsupported CSS3 features should be implemented. Example: the `✔` chafaracter on the poll choice's label isn't displayed correctly in Safari 14.1.
- Some of the hard coded entities which are displayed via pseudo elements could be replaced with SVGs instead.

### JavaScript
- The answers in the poll generator should be drag and droppable to give users a chance to sort them.
- The additional answers should appear without unnecessary button clicks but instead on focus on the last input field.
- Unit tests could be extended.
- Module scripts are not supported in all browsers yet: fallbacks should be implemented.
- ES6 Template strings are not supported in all browsers yet: fallbacks should be implemented.
- Overall the JavaScript should be revised if certain parts could be made simpler.

### Tooling
- A proper [Webpack](https://webpack.js.org/) configuration would take care of minifying all the code. This was not feasible due to a lack of time yet but will be tackled next as high priority. 

### Design
- All of the design was done directly in the browser while coding. A proper research and design ideations would grant an optimized experience.
- Allowing users of the widget to skin their poll to integrate it better into their corporate CI is something that I would like to have. 

### Usability
- Giving the user a chance to vote for multiple choices should be tested.
- Allowing authors to create a poll with already prefilled percentages.
- Saving the data on a server instead of the localStorage is important as a next step.