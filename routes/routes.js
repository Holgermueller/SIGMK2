module.exports = app => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/forecast', (req, res) => {
    res.render('forecast');
  });

  // No code below this line
};
