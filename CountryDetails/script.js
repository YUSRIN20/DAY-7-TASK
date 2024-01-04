const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    
    // 3. Print the following details name, capital, flag, using forEach function
     let key = Object.keys(data)
     key.forEach((keyval) => {
         console.log("Name=>",data[keyval].name.common)
         console.log("Capital=>",data[keyval].capital)
         console.log("Flags=>",data[keyval].flag);
         console.log("Flags-img=>",data[keyval].flags.png);
       });


}


