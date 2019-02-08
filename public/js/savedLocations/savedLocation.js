$(document).ready(() => {

  $(document).on('click', '.saved-location', () => {
    let weatherQueryLocation = $('.saved-location').id();
    console.log(weatherQueryLocation);



  });
});