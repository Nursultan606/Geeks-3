// первое задание
const extractNumbers = (str) => {
  const numbers = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(parseInt(char))) {
      numbers.push(parseInt(char));
    }
  }
  return numbers;
};

console.log(extractNumbers("a1fg5hj6"));

// Второе задание
function fibonacciWithDelay(n, a = 0, b = 1) {
  if (n <= 0) {
    return;
  }
  setTimeout(() => {
    console.log(a);
    fibonacciWithDelay(n - 1, b, a + b);
  }, 1000);
}

fibonacciWithDelay(144);
// третье задание
async function fetchAndLogTitles() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    data.forEach(product => {
      console.log(product.title);
    });
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}
fetchAndLogTitles();

// четвертое задание
 const buttonsContainer = document.getElementById('buttons');

    buttonsContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const color = event.target.textContent.toLowerCase();
            document.body.style.backgroundColor = color;
        }
    });

// пятое задание
 const block = document.getElementById('block');
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        if (block.style.display === 'none') {
            block.style.display = 'block';
            button.textContent = 'Скрыть';
        } else {
            block.style.display = 'none';
            button.textContent = 'Показать';
        }
    });

// шестое задание
 const counterElement = document.getElementById('counter');
    let count = 0;

    const intervalId = setInterval(() => {
        count++;
        counterElement.textContent = count;

        if (count === 100) {
            clearInterval(intervalId);
        }
    }, 10);

 //седьмое задание
const fetchButton = document.getElementById('fetch-button');

        fetchButton.addEventListener('click', async () => {
            try {
                const response = await fetch('../data.json');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        });