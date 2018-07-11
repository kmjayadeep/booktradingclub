//settimeout wrapped in a promise
export default time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
