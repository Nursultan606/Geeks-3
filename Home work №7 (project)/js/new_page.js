const cardContainer = document.querySelector('#card-container')
const imageSrc = 'https://i.ucrazy.org/files/pics/2024.03/1711088137_033.webp'

async function cardList() {
    try{
        const response = await
        fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src = "${imageSrc}" alt="изображение">
                <h3>${post.title}<h3>
                <p>${post.body}</p>
            `;
            cardContainer.appendChild(card)
        });
    } catch (error){
        console.log(error)
    }
}
cardList()


