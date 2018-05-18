# fend-feedreader-game
Google-Udacity Front-end Web Developer Nano Degree - Feed Reader Unit Testing Project
------------------------------------------------------------------------
By _Tharaa Elmorssi_

#Overview
This project is to develop unit tests via Jasmine framework for the pre-existing developed Feed Reeder application.

## Unit Tests / Test Suites created for this project
1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A new test suite named `"The menu"`.
4. A test that ensures the menu element is hidden by default, analyzing the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. A test that ensures the menu changes visibility when the menu icon is clicked, checking that the menu displays when clicked and hides when clicked again.
6. A test suite named `"Initial Entries"`.
7. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. A test suite named `"New Feed Selection"`.
9. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Steps to run the application
1. Clone the project to your local directory.
2. Copy the index.html path.
3. Run the index.html local path to your browser.
4. Find the tests results at the bottom of the loaded page.
