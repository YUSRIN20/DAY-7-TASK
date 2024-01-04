const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    let data = JSON.parse(xhr.response)

  //  5.Print the country that uses US dollars as currency.
    let num = 0;
    data.forEach((country) => {
      if (country?.currencies?.hasOwnProperty("USD")) {
        console.log(++num, country.name.common);
      }
    })
}
