const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the Articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact");

const articleSeed = [
  {
    title: "Trump Administration Reverses Obama on Affirmative Action",
    // date: new Date("July 3, 2018"),
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2018/07/03/us/politics/trump-affirmative-action-race-schools.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
  },
  {
    title: "Trump Interviews 4 Supreme Court Prospects in Rush to Name Replacement",
    // date: new Date("July 2, 2018"),
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2018/07/02/us/politics/trump-supreme-court-nomination.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
  },
  {
    title: "Dead of AIDS and Forgotten in Potter’s Field",
    // date: new Date("July 3, 2018"),
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2018/07/03/nyregion/hart-island-aids-new-york.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=photo-spot-region&region=top-news&WT.nav=top-news"
  },
  {
    title: "Former E.P.A. Aide Says Pruitt Asked Her to Help Find Work for His Wife",
    // date: new Date("July 2, 2018"),
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2018/07/02/climate/epa-pruitt-wife-job.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
  },
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
