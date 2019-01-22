function updateTime() {
  moment();
  const CURRENTDATEANDTIME = moment().format("ddd, MMM Do, YYYY <br> hh:mm:ss A");
  $("#currentTime").html(CURRENTDATEANDTIME);
}
setInterval(updateTime, 1000);
