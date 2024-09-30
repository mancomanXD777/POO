document.addEventListener('DOMContentLoaded', () => {
    // Handle login button click
    const loginButton = document.querySelector('.login');
    loginButton.addEventListener('click', () => {
        alert('Login functionality coming soon!');
    });

    // Handle add definition button click
    const addButton = document.querySelector('.add');
    addButton.addEventListener('click', () => {
        const newDefinition = prompt('Enter a new definition:');
        if (newDefinition) {
            alert(`New definition added: ${newDefinition}`);
            // You could add logic here to dynamically create a new definition box
        }
    });

    // Handle like button clicks
    const likeButtons = document.querySelectorAll('.like');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            let likes = parseInt(button.textContent);
            likes += 1; // Increment likes
            button.textContent = `${likes} likes`;
        });
    });
});