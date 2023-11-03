const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-name').ariaValueMax.trim();

    if (title && description) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('profile');
        }else {
            alert('Post was not created');
        }
    }
};

const delButton = async (event) => {
    const deleteBtn = document.getElementById("deleteBtn").hasAttribute("onclick");

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.hasAttribute('data-id');

        const response = await fetch (`/api/posts/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/profile');
        }else {
            alert('Post was unable to be deleted');
        }
    }
};

document.querySelector('.new-post-form')
.addEventListener('submit', newFormHandler);