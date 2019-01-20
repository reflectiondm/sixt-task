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
