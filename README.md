# CITYTAPS CLOUD CRON SERVICE


The node-cron module is tiny task scheduler in pure JavaScript for node.js.


## Getting Started

```console
npm install
npm start
```
The cron will now send a message to `ct-cloud-API` every day at 12pm to add some consumption fee.

## Cron Syntax

This is a quick reference to cron syntax and also shows the options supported by node-cron.

### Allowed fields

```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

### Allowed values

|     field    |        value        |
|--------------|---------------------|
|    second    |         0-59        |
|    minute    |         0-59        |
|     hour     |         0-23        |
| day of month |         1-31        |
|     month    |     1-12 (or names) |
|  day of week |     0-7 (or names, 0 or 7 are sunday)  |


#### Using multiples values

You may use multiples values separated by comma:

```javascript
var cron = require('node-cron');

cron.schedule('1,2,4,5 * * * *', function(){
  console.log('running every minute 1, 2, 4 and 5');
});
```

## ScheduledTask methods

### Start

Starts the scheduled task.

```javascript
var cron = require('node-cron');

var task = cron.schedule('* * * * *', function() {
  console.log('immediately started');
}, false);

task.start();
```

### Stop

The task won't be executed unless re-started.

```javascript
var cron = require('node-cron');

var task = cron.schedule('* * * * *', function() {
  console.log('will execute every minute until stopped');
});

task.stop();
```

### Destroy

The task will be stopped and completely destroyed.

```javascript
var cron = require('node-cron');

var task = cron.schedule('* * * * *', function() {
  console.log('will not execute anymore, nor be able to restart');
});

task.destroy();
```

# super-bassoon
