document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('#productList .product-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        products.forEach(card => {
            const title = card.querySelector('h4').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'flex'; // ou 'block' dependendo do layout
            } else {
                card.style.display = 'none';
            }
        });
    });
});
