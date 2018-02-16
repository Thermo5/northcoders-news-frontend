# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website, based on Reddit. Articles are divided into topics and each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article which can also be up or down voted. A user can add comments and remove any comments which they have added.

## Getting Started

To see the project in action please click [here](https://northcoders-news-frontend.herokuapp.com/).

And this is a link to the [API](https://github.com/Thermo5/northcoders-news-backend)

## Prerequisites

```
    Node.js v8.6.0 or higher
    npm v5.6.0
    git version 2.14.3
```
## Installation
To run this project you will need to clone it onto your local machine and install all dependencies.

Navigate to you chosen directory and run the following command in the commandline to clone the package:
```
    git clone https://github.com/Thermo5/northcoders-news-frontend.git
```

To install all depencency run:
```
    npm install
```

Finally to run the app:
```
    npm start
```
Once the build process has finished go to [http://localhost:9090/](http://localhost:9090/) in your browser.

## Running Tests

To see the tests for the project simply navigate to the ncnews directory in the command line and run:

```
    npm test
```

These tests ensure that the state is managed in the correct way with the redux reducer functions. 


## Built With
* [React](https://github.com/facebook/react) - User interface framework
* [Redux](https://github.com/reactjs/redux) - Application state manager
* [Mocha](https://mochajs.org/) - Test framework
* [Chai](http://chaijs.com/) - Assertation library
* [Webpack](https://webpack.js.org/) - Module Bundler
