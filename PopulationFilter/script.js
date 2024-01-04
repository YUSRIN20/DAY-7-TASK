const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    
    // 2. Get all the countries with a population of less than 2 lakhs using Filter function
   const countrypopulation  = data.filter (pop => pop.population<20000)

   console.log(countrypopulation)

}