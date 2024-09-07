const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

const regExp =/^\+996 [2579] \d{2} \d{2} \d{2}$/

phoneButton.onclick = ()=> {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = "Ok"
        phoneSpan.style.color = "green"
    }else {Z
        phoneSpan.innerHTML = "Not Ok"
        phoneSpan.style.color = "red"
    }
}

//TAB SLIDER

const tabContentBlocks =document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector(".tab_content_items");
const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = "none"
    })
    tabItems.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}


const showTabContent = (index = 0) =>{
    tabContentBlocks[index].style.display = "block"
    tabItems[index].classList.add("tab_content_item_active")
}

hideTabContent()
showTabContent()


tabParent.onclick = (event) =>{
    if (event.target.classList.contains("tab_content_item")){
        tabItems.forEach((item, index) =>{
            if(event.target === item){
            hideTabContent()
            showTabContent(index)
            }
        })
    }
}