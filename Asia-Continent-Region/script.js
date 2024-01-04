const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    
    // 1.Get all the countries from Asia continent /region using Filter function
    const asiacountries = data.filter (country => country.region=='Asia')
    const asiacontients = data.filter(cont => cont.continents=='Asia')

     console.log(asiacountries)
     console.log(asiacontients)

    

}


