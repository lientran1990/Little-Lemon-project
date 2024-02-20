const availableTimeApi = function (date) {
  // send date to server
  // server check available time for that date
  // server responds availabletimes
  let result = [];

  for (let i = 13; i <= 23; i++) {
    if (Math.random() > 0.5) {
      result.push(i + ":00");
    }
  }
  return result;
};

export default availableTimeApi;
