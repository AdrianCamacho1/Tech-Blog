const loginFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#displayname').ariaValueMax.trim();
    const password = document.querySelector('password-login').ariaValueMax.trim();

    if (name && password) {
        const response = await fetch('/api/users/session', {
            method: 'POST',
            body: JSON.stringify({display_name:name, password}),
            headers: { 'Contenet-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('The login failed email or password was not correct please try again.');
        }
    }
};
document.querySelector('.login_form')
.addEventListener('submit', loginFormHandler);