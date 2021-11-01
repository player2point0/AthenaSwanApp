<h2>Intro</h2>

A reactjs site with PWA functionality built with typescript.

Hosting of the demo site currently uses "render" and is available at https://athena-swan-inclusion-matters.onrender.com/

<h2>General Structure</h2>

The sections are broken up into "chapters", with each chapter being made up of `DoubleColumn` or `SingleColumn` components. This allows for a reuseable way to provide a desktop and mobile site, for example a `DoubleColumn` will basically turn into 2 `SingleColumns` when on a mobile device.

In `App.tsx` a list of refs for each section is stored, a callback `addRefsToParent` is then passed down to the `DoubleColumn` or `SingleColumn` components which will add a reference to the component's DOM elements to the refs list. This is what allows the scroll button to scroll to the next section, which happens in `scrollToNextSection`. And this is also how the alternating background colors are set, by a `useEffect` in `App.tsx` which runs on load, when a new section is added (such as when the button in Chapter4 is clicked) and if the site is changed to mobile. The `useEffect` calls `setSectionBackgroundColors` which sets every other section to red using the ref to the component.

<h2>Questionnaire</h2>

A Google form is used to store responses to the free text perspective question as well as the likert scale questions at the end. The reason for this is to get around some of the difficulties that come from embedding a large form and to allow the form to be split into two different sections.

The form state is stored in `App.tsx` which uses `react-hook-form` and passes down a callback `register` to connect the `LikertScaleInput` and `TextBox` components. Submitting the form happens in `submit` and maps the form data to an input that Google Forms expects, for more info see https://theconfuzedsourcecode.wordpress.com/2019/11/11/you-may-restfully-submit-to-your-google-forms/

<h2>Google Analytics</h2>

The initial work for adding in Google Analytics has been started in `GAController`, with the intention of providing reporting data on whether people watch the video before answering the questions.
