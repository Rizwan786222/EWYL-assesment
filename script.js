const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(parsedData => {
    //console.log(parsedData);
    localStorage.setItem("data", JSON.stringify(parsedData.results));
  })
window.localStorage.getItem("data");
let UserDetails = JSON.parse(window.localStorage.getItem("data"))
//console.log(UserDetails);
let details = " ";
UserDetails.map(info => {
  console.log(info);
  details += `
            <div class="user">
            <p>${info.name.title}.${info.name.first} ${info.name.last}</p>
            <p>${info.dob.age}</p>
            <p>${info.location.country}</p>
            <img src=${info.picture.medium}>
           
            </div>`
})
document.getElementById("root").innerHTML = details;

const searchname= () =>{
  charInfo = "";
   let searchdata =JSON.parse(localStorage.getItem("data"));
   let val = document.querySelector('.box').value
   let data = searchdata.filter((item) => item.name.first=== val);
   data.map ((info) => {
    details += `
            <div class="user">
            <p>${info.name.title}.${info.name.first} ${info.name.last}</p>
            <p>${info.dob.age}</p>
            <p>${info.location.country}</p>
            <img src=${info.picture.medium}>
           
            </div>`

   })
   console.log(details);
   document.getElementById("root").innerHTML = details;}


