// // login
document.getElementById('login-btn').addEventListener('click', function(){
    let userName = document.getElementById('user-name').value;
    let password = document.getElementById('password').value;

    if (userName == 'admin@gmail.com' && password == '123') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Error! Email or Password is incorrect');
    }
});