module.exports = app => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/fiveDayForecast', (req, res) => {
    res.render('fiveDayForecast');
  });

  // No code below this line
};
