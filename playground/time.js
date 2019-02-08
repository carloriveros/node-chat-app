var moment = require('moment');

// Jan 1st 1970 00:00:00 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM do YYYY hh:mm a'));
