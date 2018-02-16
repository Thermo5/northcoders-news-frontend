Northcoders News
Northcoders News is a social news aggregation, web content rating, and discussion website, based on Reddit. Articles are divided into topics and each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article which can also be up or down voted. A user can add comments and remove any comments which they have added.

Getting Started
To see the project in action please click here.

And this is a link to the API

Prerequisites
    Node.js v7.0.0 or higher
Installation
If you would like to download the project to run on your local machine follow these steps:

    Git clone https://github.com/lukemurray77/Northcoders-News.git ncnews

    cd ncnews

    npm install

    npm run dev
Once the build process has finished go to http://localhost:9090/ in your browser.

Running Tests
To see the tests for the project simply navigate to the ncnews directory in the command line and run:

    npm test
These tests ensure that the state is managed in the correct way with the redux reducer functions.

Built With
React - User interface framework
Redux - Application state manager
Mocha - Test framework
Chai - Assertation library
Webpack - Module Bundler
