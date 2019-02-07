$(document).ready(() => {

  function clearSky() {
    $('#body').removeAttr('style');
  }

  function dawnBackground() {
    $('#body').css({ "background-image": "radial-gradient(circle at bottom, #FFCD00, #00FAFF)" });
  }

  function dayBackground() {
    $('#body').css({ "background-color": "#00EBFF" });
  }

  function sunsetBackground() {
    $('#body').css({ "background-image": "radial-gradient(circle at bottom, #FF0500, #5F0066)" });
  }

  function nightBackground() {
    $('#body').css({ "background-color": "#280066" });
  }

  function cloudy() {
    $('.weather').css({
      "background-image": "linear-gradient(rgba(128,128,128, 1), rgba(128,128,128, 0))",
      "background-size": "100%"
    });
  }

  function partlyCloudy() {
    $('.weather').css({
      "background-image": "linear-gradient(rgba(220,220,220, 1), rgba(220,220,220, 0))",
      "background-size": "100%"
    });
  }

  function sunnySkies() {
    $('.weather').css({
      "background-image": "linear-gradient(-135deg, rgba(255,215,0, 1), rgba(255,255,0, 0))",
      "background-size": "100%"
    });
  }

  $(document).on('click', '#dawn', () => {
    dawnBackground();
  });

  $(document).on('click', '#day', () => {
    clearSky()
    dayBackground();
  });

  $(document).on('click', '#sunset', () => {
    sunsetBackground();
  });

  $(document).on('click', '#night', () => {
    clearSky()
    nightBackground();
  });

  $(document).on('click', '#partlyCloudy', () => {
    partlyCloudy();
  });

  $(document).on('click', '#cloudy', () => {
    cloudy();
  });

  $(document).on('click', '#sunny', () => {
    sunnySkies();
  });

});