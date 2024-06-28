document.querySelectorAll('.save-btn').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
});

function recipeClick() {
  window.location.href = 'pages/recipe-page.html';
}
