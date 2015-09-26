var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
Metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .build(function(err){
    if (err) throw err;
  });
