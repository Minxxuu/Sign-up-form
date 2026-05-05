const submit = document.getElementById('submit');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

submit.addEventListener('click', function(event) {
    if (password.value !== confirm_password.value) {
        event.preventDefault();
        alert('Passwords do not match!');
    }
});