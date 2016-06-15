let Formater = function () {

  let format = (text, ...values) => {
    let result = text;
    if (!!text) {
      var pattern = /\{\d+\}/g;
      result = text.replace(pattern, function (capture) {
        return values[capture.match(/\d+/)];
      });
    }
    return result;
  };

  return {
    format
  }
}

export default Formater;

