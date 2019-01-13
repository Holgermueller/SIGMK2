const EXPRESS = require('express');

const APP = EXPRESS();
const PORT = process.env.PORT || 8080;

APP.listen(PORT, () => {
  console.log('server listening on ', PORT);
})