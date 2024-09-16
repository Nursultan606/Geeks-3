//Первое задание
function onlyNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

console.log(onlyNumber("12345"));
console.log(onlyNumber("abc"));


//Второе задание
function Seconds() {
  let count = 0;
  let intervalId = setInterval(() => {
    console.log("Прошла секунда");
    count++;
    if (count >= 20) {
      clearInterval(intervalId);
    }
  }, 1000);
}

Seconds();

//Третье задание
const count = () => {
    let count = 1;
    const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count > 10) {
            clearInterval(interval);
        }
    }, 1000);
};

count();

//Четвертое задание

const block = document.querySelector(".block");

block.addEventListener("click", () => {
      if (block.classList.contains("secondColor")) {
        block.classList.remove("secondColor");
      } else {
        block.classList.add("secondColor");
      }
});

// Пятое задание



