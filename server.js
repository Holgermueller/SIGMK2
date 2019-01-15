const EXPRESS = require('express');
const EXPHBS = require('express-handlebars');

const APP = EXPRESS();
const PORT = process.env.PORT || 8080;

APP.use(EXPRESS.static('public'));

APP.engine('handlebars', EXPHBS({ defaultLayout: 'main'}));
APP.set('view engine', 'handlebars');

require('./routes/routes.js')(APP);

APP.listen(PORT, () => {
  console.log('server listening on ', PORT);
});