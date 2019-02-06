$(document).ready(() => {

  function clearSky() {
    $('#body').removeAttr('style');
  }

  function dawnBackground() {
    $('#body').css({ "background-image": "linear-gradient(#00FAFF, #FFCD00)" });
  }

  function dayBackground() {
    $('#body').css({ "background-color": "#00EBFF" });
  }

  function sunsetBackground() {
    $('#body').css({ "background-image": "linear-gradient(#5F0066, #FF0500)" });
  }

  function nightBackground() {
    $('#body').css({ "background-color": "#280066" });
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

});