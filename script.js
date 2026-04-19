// Зберігання даних у браузері (localStorage)
const userAgent = navigator.userAgent;

// Визначаємо операційну систему
let osName = "Невідома ОС";
if (userAgent.includes("Win")) osName = "Windows";
else if (userAgent.includes("Mac")) osName = "MacOS";
else if (userAgent.includes("Linux")) osName = "Linux";
else if (userAgent.includes("Android")) osName = "Android";
else if (userAgent.includes("like Mac")) osName = "iOS";

// Визначаємо браузер
let browserName = "Невідомий браузер";
if (userAgent.includes("OPR") || userAgent.includes("Opera")) browserName = "Opera";
else if (userAgent.includes("Edg")) browserName = "Edge";
else if (userAgent.includes("Chrome")) browserName = "Chrome";
else if (userAgent.includes("Firefox")) browserName = "Firefox";
else if (userAgent.includes("Safari")) browserName = "Safari";

// Збираємо все в один рядок
const finalInfo = `ОС: ${osName} | Браузер: ${browserName}`;
localStorage.setItem('userSystemInfo', finalInfo);

// Відображаємо всю наявну інформацію у футері
const footerInfo = document.getElementById('browser-info');
footerInfo.textContent = "Система: " + localStorage.getItem('userSystemInfo');

// Робимо запит для відображення коментарів. Використовуємо 26 варіант для постів.
fetch('https://jsonplaceholder.typicode.com/posts/26/comments')
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById('comments-container');
        container.innerHTML = ''; // Очищаємо текст завантаження
        
        // Відображаємо отримані коментарі у порядку їх отримання
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `<strong>${comment.email}</strong>: <p>${comment.body}</p><hr>`;
            container.appendChild(commentElement);
        });
    })
    .catch(error => console.error('Помилка завантаження:', error));

// Після того як користувач пробуде на сайті 1 хвилину показуємо модальне вікно
const modal = document.getElementById('feedback-modal');
const closeModalBtn = document.getElementById('close-modal');

setTimeout(() => {
    modal.style.display = 'block';
}, 10000); 

// Закриття модального вікна при натисканні на хрестик
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Перехід на нічний/денний режим
const themeToggleBtn = document.getElementById('theme-toggle');
const currentHour = new Date().getHours();


// Денна тема від 07:00 до 21:00, у весь інший час нічна тема
if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}

// Функціональність кнопки перемикача на сторінці
themeToggleBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
};