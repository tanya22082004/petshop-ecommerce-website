const wishlist = document.getElementById('wishlist');

function loadWishlist() {
    const items = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.innerHTML = '';
    if (items.length === 0) {
        wishlist.innerHTML = '<p>Your wishlist is empty.</p>';
    } else {
        items.forEach((item, index) => {
            setTimeout(() => addItemToList(item), index * 100);
        });
    }
}

function addItemToList(item) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="card-banner img-holder" style="--width: 360; --height: 360;">
            <img src="${item.image}" width="360" height="360" loading="lazy" alt="${item.name}" class="img-cover">
        </div>
        <div class="item-details">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        </div>
        <button class="delete-btn" data-id="${item.id}">Delete</button>
    `;
    li.style.animation = 'fadeIn 0.5s ease-out';
    wishlist.appendChild(li);
}

function deleteItem(e) {
    if (e.target.classList.contains('delete-btn')) {
        const itemId = e.target.getAttribute('data-id');
        let items = JSON.parse(localStorage.getItem('wishlist')) || [];
        items = items.filter(item => item.id !== itemId);
        localStorage.setItem('wishlist', JSON.stringify(items));
        const li = e.target.closest('li');
        li.style.animation = 'fadeIn 0.5s ease-out reverse';
        setTimeout(() => {
            li.remove();
            if (wishlist.children.length === 0) {
                wishlist.innerHTML = '<p>Your wishlist is empty.</p>';
            }
        }, 500);
    }
}

wishlist.addEventListener('click', deleteItem);

// Load wishlist items when the page loads
window.addEventListener('load', loadWishlist);
