module.exports = app => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/fiveDayForecast', (req, res) => {
    res.render('fiveDayForecast');
  });

  app.get('/map', (req, res) => {
    res.render('map');
  });

  // No code below this line
};
