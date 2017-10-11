'use strict';

const uuid = require('uuid');
const dynamoDB = require('./../dynamodb');

module.exports.createItemHandler = (event, context, callback) => {
  const timestamp = new Date().getTime();
  
  //validate empty body
  if(!event.body) {
    var emptyBodyResponse = {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: { 'message': 'No body data was sent.' },
    };

    //return validation response
    callback(null, emptyBodyResponse);
    return;
  }

  const itemData = JSON.parse(event.body);

  //check data item structure
  if(typeof itemData.item !== 'string') {
    var validationResponse = {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: { 'message': 'The body data does not contains a valid item' },
    };

    //return validation response
    callback(null, validationResponse);
    return;
  }

};
