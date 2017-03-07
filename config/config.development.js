'use strict';

module.exports = {
  // You need to change the url for prod 
  url: 'http://localhost:8080/api/accounts/debitDailyFee',
  role: 'CronService',
  // You can change the authorization token here when you create a user an assign a role for CronService
  authorization: '',
  message: {
    signal: 1
  }
};
