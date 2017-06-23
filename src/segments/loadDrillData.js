
export default function LoadDrillData (url, callback) {

  fetch(url)
  .then(function(response) {
    return response.json().then(function(json) {
      callback(json);
    });
  }.bind(this), function(error) {
    alert(error.message);
  });
}
