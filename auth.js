const users = JSON.parse(localStorage.getItem('users')) || [];

function register(){

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    const user = {
        name,
        email,
        password
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công");

    window.location.href = "login.html";
}

function login(){

    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if(user){

        alert("Đăng nhập thành công");

        localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
        );

        window.location.href = "index.html";

    }else{

        alert("Sai tài khoản hoặc mật khẩu");

    }
}