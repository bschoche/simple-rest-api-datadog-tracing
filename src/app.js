"use strict";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// emit a random error
async function randomError(min, max, errOn = 1) {
  await sleep(50);
  Math.floor(Math.random() * (max - min) + min) === errOn ? (x.x = 3) : null;
}

exports.handler = async (event, context) => {
  let name = "you";
  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }

  await sleep(50);
  await randomError(1, 5, 3);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}, love lambda`,
    }),
  };
};
