function compareTime(timeString1, timeString2) {
  let dateTime1 = new date(timeString1);
  let dateTime2 = new date(timeString2);

  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
  compareTime,
};
