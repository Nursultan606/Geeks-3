const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

const regExp =/^\+996 [2579] \d{2} \d{2} \d{2}$/

phoneButton.onclick = ()=> {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = "Ok"
        phoneSpan.style.color = "green"
    }else {
        phoneSpan.innerHTML = "Not Ok"
        phoneSpan.style.color = "red"
    }
}

//Урок 3
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentItemsParent = document.querySelector('.tab_content_items')

let currentSlide = 0


const hideTabContent = (id) => {
    tabContentBlocks.forEach((item) =>{
        item.style.display = 'none'
    })
    tabContentItems.forEach((item)=> {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (id=0) =>{
    tabContentBlocks[id].style.display ='block'
    tabContentItems[id].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((item, index)=>{
            if (event.target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

function nextSlide (){
    hideTabContent();

    currentSlide++;
    if (currentSlide >= tabContentItems.length) {
        currentSlide = 0;
    }
    showTabContent(currentSlide)
}
const interval =setInterval(nextSlide, 3000)

// CONVERTER

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')


const converter = (element, targetElement) => {
    element.oninput = async () => {
        try {
            const response = await
                fetch("../data/converter.json")
                const data = await response.json()
            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2)
                eurInput.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2)
                eurInput.value = (element.value * data.usd / data.eur).toFixed(2)
            }
            if (element.id === 'eur') {
                somInput.value = (element.value * data.eur).toFixed(2)
                usdInput.value = (element.value * data.eur / data.usd).toFixed(2)
            }
            if (element.value === '') {
                usdInput.value = ''
                eurInput.value = ''
                somInput.value = ''
            }
        } catch (error) {
            console.log(error)
        }
    }
}

converter(somInput, usdInput)
converter(somInput, eurInput)
converter(usdInput, somInput)
converter(usdInput, eurInput)
converter(eurInput, usdInput)
converter(eurInput, somInput)


//CARD SWITCHER
const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let cardId = 1;
const totalCards = 200;

async function updateCard(cardId) {
    try {
        const response = await
        fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()
      card.innerHTML = `
        <p> ${data.title}</p>
        <p style="color : ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
      `;
    } catch (error) {
        console.log(error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCard(cardId);
});

btnNext.onclick = () => {
  cardId = (cardId % totalCards) + 1;
  updateCard(cardId);
};

btnPrev.onclick = () => {
  cardId = (cardId - 2 + totalCards) % totalCards + 1;
  updateCard(cardId);
};


//Fetch запрос
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


//WEATHER

// query params - параметры запроса


const citySearchInput = document.querySelector('.cityName');
// const searchButton = document.querySelector('#search');
const cityName = document.querySelector('.city');
const cityTemp = document.querySelector('.temp');
const API_URL ='http://api.openweathermap.org/data/2.5/weather'
const API_KEY ='e417df62e04d3b1b111abeab19cea714'

// citySearchInput.oninput = () => {
//     fetch(`${API_URL}?q=${citySearchInput.value}&appid=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => {
//             cityName.innerHTML =data.name || 'Город не найден...'
//             cityTemp.innerHTML =data.main?.temp ? Math.round(data.main.temp - 273) + '&deg;С' : '*/*/*'
//         });
// }


citySearchInput.oninput = async () => {
    try{
        const response = await fetch(`${API_URL}?q=${citySearchInput.value}&appid=${API_KEY}`)
        const data = await response.json
        cityName.innerHTML =data.name || 'Город не найден...'
        cityTemp.innerHTML =data.main?.temp ? Math.round(data.main.temp - 273) + '&deg;С' : '*/*/*'
    } catch (e) {
        console.log(e)
    }
}