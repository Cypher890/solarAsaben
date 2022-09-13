
let calculate = document.querySelector('.calculate')
let answer = document.querySelector('.answer')
let input = document.querySelector('.input')
let planets = document.querySelector('#planets')
let massText = document.querySelector('.massText')
let images = document.querySelector('.imgs')
let main = document.querySelector('#main')

planetData = [{ Earth: 9.8, src: "images/Earth.png" }, { Mercury: 3.59, src: "images/Mercury.png" }, { Venus: 8.87, src: "images/Venus.png" },
{ Mars: 3.7, src: "images/Mars.png" }, { Jupiter: 24.5, src: "images/Jupiter.png" }, { Saturn: 11.08, src: "images/Saturn.png" },
{ Uranus: 10.67, src: "images/Uranus.png" }, { Neptune: 14.07, src: "images/Neptune.png" }, { Moon: 1.6, src: "images/moon.png" }]

calculate.addEventListener('click', function () {
    var inputValue = input.value;
    planetData.forEach((e) => {
        for (const key in e) {
            console.log(planets.selectedOptions[0].innerText)
            if (planets.selectedOptions[0].innerText === key) {
                answer.innerHTML = 'Weight of the object on ' + key + ' = ' + inputValue * e[key] + ' N';
                images.src = (e["src"]);
                massText.textContent = '';
            }
        }
    })
})

