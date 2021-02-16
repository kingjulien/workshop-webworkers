onmessage = function(e) {
  console.log('Message received from main script');
  console.log(e);
  console.log(e.data);
  console.log('Posting message back to main script');

  const resultFromHardCalculation = 'this was calculated from webworker';

  // we're not sure if it was approved
  // new one will replace existing one
  // new Notification('Heeee!');

  postMessage(resultFromHardCalculation);
};