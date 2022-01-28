// 1.selecting search bar value and button click
// 2.selecting the api and connecting to js
// 3.connecting with html via json.

let srcBtn = document.querySelector('.srcbtn');
let result= document.querySelector('.display');

function weather(){
   
    let inputCity = document.querySelector('.inputcity').value;

    // adding weather api
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity+'&appid=40477207711d427effdeaa9862b29751')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const cityName = data.name;
        const temp=data.main.temp;
        const celtem=temp-273.15
        const celt=Math.floor(celtem)
        const ftem=(celtem*(5/9))+32
        const ft=Math.floor(ftem)
        const description=data.weather[0].description;
        
        // changing all the inner html

        document.querySelector('.c-temp').innerHTML=`${celt}<sup>o</sup>C`;
        document.querySelector('.f-temp').innerHTML=`${ft}<sup>o</sup>F`;
        document.querySelector('.desc').innerHTML=description.toUpperCase();
        document.querySelector('.city-name').innerHTML=cityName.toUpperCase()
        result.style.display="block";

    })
}
srcBtn.addEventListener('click',weather)

let clearBtn = document.querySelector('#btn');

clearBtn.addEventListener('click',function (){
    let clrinput = document.querySelector('.inputcity');
    clrinput.value = '';
    result.style.display = "none";
});