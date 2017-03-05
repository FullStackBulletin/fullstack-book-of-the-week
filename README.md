# fullstack-book-of-the-week

[![npm version](https://badge.fury.io/js/fullstack-book-of-the-week.svg)](http://badge.fury.io/js/fullstack-book-of-the-week) [![CircleCI](https://circleci.com/gh/FullStackBulletin/fullstack-book-of-the-week.svg?style=shield)](https://circleci.com/gh/FullStackBulletin/fullstack-book-of-the-week) [![codecov](https://codecov.io/gh/FullStackBulletin/fullstack-book-of-the-week/branch/master/graph/badge.svg)](https://codecov.io/gh/FullStackBulletin/fullstack-book-of-the-week)


A set of tech books that might be enjoyed by the fullstack developer, ideally one per week.


## Install

With NPM:

```bash
npm install fullstack-book-of-the-week
```

with Yarn:

```bash
yarn add fullstack-book-of-the-week
```


## Usage

ES5 example:

```javascript
var bookOfTheWeek = require('fullstack-book-of-the-week').default;
console.log(bookOfTheWeek()()); // changes every week based on current time

// You can pass a custom week number (from 1 to 53) to get a different book
console.log(bookOfTheWeek()(23));
```

ES2015 example:

```javascript
import { bookOfTheWeek } from 'fullstack-book-of-the-week';
console.log(bookOfTheWeek()()); // changes every week based on current time

// You can pass a custom week number (from 1 to 53) to get a different book
console.log(bookOfTheWeek()(23));
```

Sample output:

```json
{
  "id": "1785885588",
  "title": "Node.js Design Patterns - Second Edition",
  "author": "Mario Casciaro and Luciano Mammino",
  "links": {
    "usa": "https://www.amazon.com/dp/1785885588/?tag=fullstackbulletin-20",
    "uk": "https://www.amazon.co.uk/dp/1785885588/?tag=fullstackbulletin-21"
  },
  "coverPicture": "https://images-na.ssl-images-amazon.com/images/I/519BIge%2BJ2L.jpg",
  "description": "Get the best out of Node.js by mastering  its most powerful components and patterns to create modular and scalable applications with ease. Create reusable patterns and modules by leveraging the new features of Node.js. Understand  the asynchronous single thread design of node and grasp all its features and patterns to take advantage of various functions. This unique guide will help you get the most out of Node.js and its ecosystem."
}
```


## Options

You can pass a custom array of books in the initialization function
in case you want to use the same algorithm in a custom set of books.

E.g.

```javascript
import { bookOfTheWeek } from 'fullstack-book-of-the-week';

const quotes = [
  {
    "id": "1491927577",
    "title": "Linux Pocket Guide: Essential Commands",
    "author": "Daniel J. Barrett",
    "links": {
      "usa": "https://www.amazon.com/dp/1491927577/?tag=fullstackbulletin-20",
      "uk": "https://www.amazon.co.uk/dp/1491927577/?tag=fullstackbulletin-21"
    },
    "coverPicture": "https://images-na.ssl-images-amazon.com/images/I/51AbKrNDvaL.jpg",
    "description": "If you use Linux in your day-to-day work, this popular pocket guide is the perfect on-the-job reference. The third edition features new commands for processing image files and audio files, running and killing programs, reading and modifying the system clipboard, and manipulating PDF files, as well as other commands requested by readers. You’ll also find powerful command-line idioms you might not be familiar with, such as process substitution and piping into bash. Linux Pocket Guide provides an organized learning path to help you gain mastery of the most useful and important commands. Whether you’re a novice who needs to get up to speed on Linux or an experienced user who wants a concise and functional reference, this guide provides quick answers. Selected topics include:The filesystem and shell, File creation and editing, Text manipulation and pipelines, Backups and remote storage, Viewing and controlling processes, User account management, Becoming the superuser, Network connections, Audio and video, Installing softwar, Programming with shell scripts."
  },
  {
    "id": "0134032802",
    "title": "The Art of Scalability: Scalable Web Architecture, Processes, and Organizations for the Modern Enterprise",
    "author": "Martin L. Abbott and Michael T. Fisher",
    "links": {
      "usa": "https://www.amazon.com/dp/0134032802/?tag=fullstackbulletin-20",
      "uk": "https://www.amazon.co.uk/dp/0134032802/?tag=fullstackbulletin-21"
    },
    "coverPicture": "https://images-na.ssl-images-amazon.com/images/I/51RLUGr60SL.jpg",
    "description": "Writing for technical and nontechnical decision-makers, Abbott and Fisher cover everything that impacts scalability, including architecture, process, people, organization, and technology. Their insights and recommendations reflect more than thirty years of experience at companies ranging from eBay to Visa, and Salesforce.com to Apple. You’ll find updated strategies for structuring organizations to maximize agility and scalability, as well as new insights into the cloud (IaaS/PaaS) transition, NoSQL, DevOps, business metrics, and more. Using this guide’s tools and advice, you can systematically clear away obstacles to scalability–and achieve unprecedented IT and business performance."
  }
];

console.log(bookOfTheWeek(quotes)());
```


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/FullStackBulletin/fullstack-book-of-the-week/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
