const EXPRESS = require('express');
const EXPHBS = require('express-handlebars');
const lessMiddleware = require('less-middleware');
const minify = require('express-minify');
const uglifyEs = require('uglify-es');
const reload = require('reload');
const compression = require('compression');
const morgan = require('morgan');

const APP = EXPRESS();
const PORT = process.env.PORT || 8080;

APP.use(morgan('tiny'));

const myErrorHanlder = (errorInfo, callback) => {
  console.log(errorInfo);
  if (errorInfo.stage === 'minify'){
    callback(errorInfo.error, JSON.stringify(errorInfo.error));
    return;
  }
  callback(errorInfo.error, errorInfo.body);
};

APP.use(compression());
APP.use(lessMiddleware('public'));
APP.use(minify({
  uglifyJS: uglifyEs,
  errorHandler: myErrorHanlder
}));
APP.use(EXPRESS.static('public'));

APP.engine('handlebars', EXPHBS({ defaultLayout: 'main'}));
APP.set('view engine', 'handlebars');

require('./routes/routes.js')(APP);

APP.listen(PORT, () => {
  console.log('server listening on ', PORT);
});
reload(APP);
