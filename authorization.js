// document.getElementById('form__information').addEventListener('form__btn', async function(event) {
//   event.preventDefault();

//   const email = document.getElementById('.email').value;
//   const password = document.getElementById('.password').value;

//   const response = await fetch('https://reqres.in/', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//   });

//   const data = await response.json();

//   if (data.success) {
//       document.getElementById('message').innerText = 'Авторизация успешна!';
//       window.location.href = 'team.html'
//   } else {
//       document.getElementById('message').innerText = 'Ошибка авторизации. Пожалуйста, проверьте введенные данные.';
//   }
// });


// app.get('team.html', (req, res) => {
//   if (req.isAuthenticated()) {
//       // Пользователь аутентифицирован, отобразить защищенную страницу
//       res.sendFile(path.join(__dirname, 'team.html'));
//   } else {
//       // Пользователь не аутентифицирован, перенаправить на страницу авторизации
//       res.redirect('index.html');
//   }
// });


const fetch = require('node-fetch');

// Регистрация пользователя
async function registerUser(email, password) {
    const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data.token;
}

// Авторизация пользователя
async function loginUser(email, password) {
    const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data.token;
}

// Получение защищенных данных
async function getProtectedData(token) {
    const response = await fetch('https://reqres.in/api/protected', {
        headers: { 'Authorization': Bearer ${token}}
    });
    const data = await response.json();
    return data;
}

// Пример использования
(async () => {
    const userToken = await registerUser('test@example.com', 'password123');
    console.log('User token:', userToken);

    const authToken = await loginUser('test@example.com', 'password123');
    console.log('Auth token:', authToken);

    const protectedData = await getProtectedData(authToken);
    console.log('Protected data:', protectedData);
})();