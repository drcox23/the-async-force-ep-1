console.log("sanity");

// helper function to get data.
reqHelper = url => {
  const newReq = new XMLHttpRequest();
  newReq.open("GET", url);
  newReq.send();
  return newReq;
};

firstRequest = reqHelper("https://swapi.co/api/people/4/");
firstRequest.addEventListener("load", function(res) {
  console.log(res);
  console.log("response: ", JSON.parse(res.currentTarget.response));
  let person4name = JSON.parse(res.currentTarget.response).name;
  console.log("person: ", person4name);
  let name1 = document.getElementById("person4Name");
  name1.innerHTML = person4name;

  let getPlanet = reqHelper("https://swapi.co/api/planets/1/");
  getPlanet.addEventListener("load", function(res) {
    let person4planet = JSON.parse(res.currentTarget.response).name;
    console.log("planet4: ", person4planet);
    let planetName4 = document.getElementById("person4HomeWorld");
    planetName4.innerHTML = person4planet;
  });
});

secondRequest = reqHelper("https://swapi.co/api/people/14/");
secondRequest.addEventListener("load", function(res) {
  console.log(res);
  console.log("response2: ", JSON.parse(res.currentTarget.response));
  let person14name = JSON.parse(res.currentTarget.response).name;
  let name2 = document.getElementById("person14Name");
  name2.innerHTML = person14name;

  let hansSpecies = reqHelper("https://swapi.co/api/species/1/");
  hansSpecies.addEventListener("load", function(res) {
    let hans = JSON.parse(res.currentTarget.response).name;
    let species = document.getElementById("person14Species");
    species.innerHTML = hans;
  });
});

anotherRequest = reqHelper("https://swapi.co/api/films/");
anotherRequest.addEventListener("load", function(res) {
  console.log("response3: ", JSON.parse(res.currentTarget.response));
  let films = JSON.parse(res.currentTarget.response).results;
  console.log(films[0].title);
  films.className = "film";

  for (let i = 0; i < films.length; i++) {
    let filmBullet = document.createElement("li");
    filmBullet.innerHTML = films[i].title;
    filmList.appendChild(filmBullet);
  }
});

// if i make another request i need another XMLHttpRequest object using a different variable name.

// dont have access to the response object outside the function
