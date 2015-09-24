var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
Metalsmith(__dirname)
  .use(markdown())
  .build(function(err){
    if (err) throw err;
  });
