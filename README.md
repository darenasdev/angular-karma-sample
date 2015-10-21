# AngularJS Sample app with unit test using karma

## Overview

This is a sample angular app, showing how to write an unit test 
for the controller part using karma and jasmine.

## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-github].
- Git [home][git-home] (download, documentation).

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`).



### Installing dependencies

The app uses node.js tools, such as Bower and Karma.  You can install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for this app

## Workings of the application

### Running the app

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.


### Running unit test

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome browser is used,
     You can change in the test/karma.conf.js` file.

