var fs = require('fs');
var csv2 = require('csv2');
var through2 = require('through2');
var createRequestUrlFactory = require('./createRequestUrl.js');

var createRequestUrl = createRequestUrlFactory(
  process.env.AWS_ACCESS_KEY_ID,
  process.env.AWS_SECRET_ACCESS_KEY,
  process.env.AWS_ASSOCIATE_TAG
);

fs.createReadStream('./list.txt')
  .pipe(csv2())
  .pipe(through2.obj(function (chunk, enc, callback) {
    callback(null, {url: chunk[0]});
  }))
  .pipe(through2.obj(function (chunk, enc, callback) {
    callback(null, {id: chunk.url.match(/[A-Z0-9]+$/)[0]})
  }))
  .pipe(through2.obj(function (chunk, enc, callback) {
    const requestUrl = createRequestUrl(
      'ItemLookup',
      {
        ItemId: chunk.id,
        IdType: 'ASIN',
        ResponseGroup: 'EditorialReview,Images,ItemAttributes'
      }
    );
    callback(null, {requestUrl});
  }))
  .pipe(through2.obj(function (chunk, enc, callback) {
    callback(null, JSON.stringify(chunk, null, 2) + ',\n');
  }))
  .pipe(process.stdout)
;
