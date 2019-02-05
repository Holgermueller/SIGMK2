$(document).ready(() => {

  $(document).on('click', '.saved-location', () => {
    let weatherLocationQuery = $(this).val();
    console.log(weatherLocationQuery);
  });

});