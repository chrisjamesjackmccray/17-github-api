import 'es6-promise';
import 'whatwg-fetch';

fetch(`https://api.github.com/users/jbarket`)
.then((response) => {
  return response.json();

})

.then((response) => {
  console.log(response);
})
