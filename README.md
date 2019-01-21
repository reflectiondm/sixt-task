# sixt-task
The coding task is to create a list of offers from that endpoint:
https://content.sixt.io/codingtasks/offers.json
 
The work should be done with react/redux and uploaded to a git repo of your choice. As we do not have a proper cross origin header for that endpoint please use something like the Moesif CORS Plugin for development.
 
1. the offers should be displayed in a responsive grid, each offer-tile should have a square format. Fullsize would maybe result in 4 tiles per row, mobile view would have only two tiles per row.
 
2. the offers should be sortable by the options in the key ‚sortIndexes‘
 
Design may be done roughly, just to show the responsive behaviour. Offers should display only name, image and a price.

# how to run it
In order to start an application locally, install npm packages with 
```bash
  npm install
```
and then just run
```bash
  npm start
```
# other commands
Run tests:
```bash
  npm run test
```
Run tests in wach mode:
```bash
  npm run test:watch
```
Lint the project:
```bash
  npm run lint
```

# Comments on the solution
## What has been done

The task as it is described above is completed. The website renders a webpage that shows a list of offers taken from the provided json. Interestingly, `access-control-allow-origin` header is set to * so I didn't have to install any aditional extensions.

Offers are rendered in a responsive grid with a break point of 768px. Since it wasn't explicitly restricted in the task, I assumed target browsers to be modern versions of Chrome, Safari, Firefox and Edge, so responsive behavior is implemeted using `css-grid`.

Offers could be sorted using a panel in the top side of the page. I assumed objects present in json are following a strict data contract so I didn't do excessive defensive checks to check that required fields are present.

There are also tests written for reducers and linting available.

## What I would add for a real-world project
Of course a realworld project is much more complicated then a test task, so I would like to name a few things that I would consider for a real-world application:

Tests of react components, using jest snapshot testing, for example.

More robust proptypes definition that resembles domain objects more closely.

More robust error handling and reporting.

ARIA support

Internationalization
