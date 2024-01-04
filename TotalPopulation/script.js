const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    let data = JSON.parse(xhr.response)

   // 4.Print the total population of countries using reduce function
    const totalPopulation = data.map((country) => country.population)
    .reduce((accumulator, currvalue) => accumulator + currvalue);
  console.log("Total Population ==>", totalPopulation);

};
