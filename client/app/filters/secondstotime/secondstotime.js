let secondstotimeFilter = function () {
  "ngInject";
  
  let filter = (input) => {
    if(input === null){ return ''; }
		var minutes = Math.floor(input / 60000);
		var seconds = Math.floor(((input % 60000) / 1000)).toFixed(0);

		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  
  return filter;
}

export default secondstotimeFilter;
