const cron    = require('cron');
const request = require('request');
const logger  = require("./config/logger");
const {
  url, 
  role, 
  message, 
  authorization
} = require("./config/config.development");

// code to run crone job every day 12 PM..
// '0 12 0 * * *'
// Every minute
// '0*****'
// Every seconds
// 
/*
This is for 2:13am
13 2 * * *
 * * * * *  command to execute
 ┬ ┬ ┬ ┬ ┬
 │ │ │ │ │
 │ │ │ │ │
 │ │ │ │ └───── day of week (0 - 7) (0 to 6 are Sunday to Saturday, 7 is Sunday again)
 │ │ │ └────────── month (1 - 12)
 │ │ └─────────────── day of month (1 - 31)
 │ └──────────────────── hour (0 - 23)
 └───────────────────────── min (0 - 59)*/

// This cron should be launched every day at 12pm
let cronJob = cron.job('* * * * *', function(){
  const options = {
    url: url,
    headers: {
      'Content-Type': 'application/json', 
      'role': role,
      'Authorization': authorization
    },
    form: message
  };
  function callback(error, response) {
    if (error || response.statusCode !== 200) {
      logger.error(`${response.statusCode} - ${response.body ? response.body : null}`);
    } else {
      logger.info('Signal has been sent to the API '); 
      logger.info(response.body); 
    }
  }
  request.post(options, callback);
});

cronJob.start();