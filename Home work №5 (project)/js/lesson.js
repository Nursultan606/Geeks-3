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

//CONVERTER

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()


        request.onload = () => {
            const data = JSON.parse(request.response)
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
        }
    }
}

converter(somInput, usdInput)
converter(somInput, eurInput)
converter(usdInput, somInput)
converter(usdInput, eurInput)
converter(eurInput, usdInput)
converter(eurInput, somInput)
