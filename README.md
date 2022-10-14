# Timestamp Microservice

## Overview
This microservice returns a JSON object with a utc key that is a string of the input date in the format: "Thu, 01 Jan 1970 00:00:00 GMT" and unix key that is a Unix timestamp of the input date in milliseconds.

### Url: https://timestamp-microservice11.herokuapp.com/

## Api endpoints
1. Using input date
```
get: /api/{date}

Response: {
  utc: String, 
  unix: Number
}
```

2. Using current date
```
get: /api

Response: {
  utc: String,
  unix: Number
}
```
