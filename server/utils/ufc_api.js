var config = require('../../config');
var axios = require('axios');

function ufcApi() {

  this.getFighters = function(callback) {

    axios.get(config.UFC_API.url + '/fighters')
      .then(function(response) {
        callback(response.data);
      })
      .catch(function(err) {
        console.log(err);
        return null;
      });
  }
};

module.exports = ufcApi;
