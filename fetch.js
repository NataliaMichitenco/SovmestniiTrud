import fetch from 'isomorphic-fetch';

   // Функция для получения данных с API и отображения пользователей
   async function getUsersAndDisplay() {
     try {
       const response = await fetch('https://reqres.in/api/users');
       const users = await response.json();

       const userList = document.getElementById('user-list');
       users.forEach(user => {
         const listItem = document.createElement('li');
         listItem.textContent = user.name;
         userList.appendChild(listItem);
       });
     } catch (error) {
       console.error('Ошибка:', error);
     }
   }

   // Вызов функции для получения данных и отображения пользователей
   getUsersAndDisplay();