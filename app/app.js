import 'es6-promise';
import 'whatwg-fetch';

fetch(`https://api.github.com/users/jbarket`)
.then((response) => {
  return response.json();

})
.then((response) => {
  console.log(response);
  document.querySelector("#name").textContent = response.name;
})

fetch(`https://api.github.com/users/jbarket/repos`)
.then((response) => {
  return response.json();
})

.then((response) => {
  // console.log(response);

  let repoDiv = document.querySelector("#lowerdiv");

  let img = document.createElement("img");


  response.forEach((repo) => {
    console.log(repo);

    let div = document.createElement("div");
    div.innerHTML = repo.name;

    repoDiv.appendChild(div);

  })

})
