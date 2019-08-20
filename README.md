# Technical Assessment
This assessment is based on Vue.js, created by vue-cli with default configuration with vuex. Your task will be based on this base project.

## Required Tasks
1. Clone the project, install dependencies and get it running on your machine.
2. Install [BootstrapVue](https://bootstrap-vue.js.org/) and update relevant project files to enable Bootstrap theme.
3. Create a `navbar` for the project containing `home`, `about` and `task` menu items.
4. Leave `home` page as it is in the project, in the `about` page add a few paragraphs about yourself and why you like coding.
5. In the `task` page create a form that accept an amount value with two decimal points (validated!) and a currency from a dropdown box.
6. On submit of the form in **#5**, call one of the currency conversion service to get a ZAR value for the amount provided and display it below the form.

### Currency API Services
- [Currencies List API](https://exchangeratesapi.io/)
- [Currency Converter API](https://free.currencyconverterapi.com/)
- [Another Currency JSON API](https://fixer.io/)

### Notes on the above tasks
**#5 and #6** are the important ones, so spend the most time on these as I'd like to see the following:
- Ability to validate form input
- Ability to call a REST API from the project
- Ability to parse the results and handle errors
- Ability to display the results / error messages

I will look at the closeness of the outputs to those of the requirements. Your code must be neat and concise. There should be no errors or warning coming from the project linter. Even though the task is pretty simple, I want to see how you structured the project, separated re-usable components from once-off views, made use of Vue.js templates, components and available libraries.

## Optional Tasks
Below tasks are optional, but if you complete these as well, you will score higher on this technical assessment.
1. Change **#6** code to use vuex.
2. Namespace vuex store in **#1** above.
3. Use Django / Python to write a REST API wrapper service for the currency conversion of **#6** of the required tasks.
4. Change **#6** of the required tasks to call your Django API instead of the public API.

If you're not comfortable writing the backend service in Python, you can use JS with Node.js and Express, however ability to write a Python service will definitely earn you extra points.

## Final Submission
1. Create your own free repo with either GitHub or BitBucket
2. Commit my initial project to it.
3. Create a new branch where you will write all your code.
4. Commit the branch and generate a pull request to `master`.
5. Comment your pull request to explain to me what you've done and where.
6. Send me the link to you repo - make sure it's *public!*

***Good Luck & May the Force Be With You! :)***