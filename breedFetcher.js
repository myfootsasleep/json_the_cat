const request = require("request");
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  //console.log('body: ', body);
  const data = JSON.parse(body);
  //console.log(data);
  console.log(data['0']['description']);
});