function addToWishlist(button) {
    const productId = button.getAttribute('data-product-id');
    const productName = button.getAttribute('data-product-name');
    const productPrice = button.getAttribute('data-product-price');
    const productImage = button.getAttribute('data-product-image');

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.some(item => item.id === productId)) {
        wishlist.push({ id: productId, name: productName, price: productPrice, image: productImage });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function displayWishlistItems() {
    const wishlistContainer = document.getElementById('wishlist-items');
    if (!wishlistContainer) return;

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    wishlistContainer.innerHTML = '';

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }

    wishlist.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `
            <div class="product-card">
                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                    <img src="${item.image}" width="360" height="360" loading="lazy" alt="${item.name}" class="img-cover">
                    <button class="card-action-btn" aria-label="remove from wishlist" title="Remove from Wishlist" onclick="removeFromWishlist('${item.id}')">
                        <ion-icon name="heart" aria-hidden="true"></ion-icon>
                    </button>
                </div>
                <div class="card-content">
                    <div class="wrapper">
                        <div class="rating-wrapper gray">
                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <span class="span">(0)</span>
                    </div>
                    <h3 class="h3">
                        <a href="#" class="card-title">${item.name}</a>
                    </h3>
                    <data class="card-price" value="${item.price}">${item.price}</data>
                </div>
            </div>
        `;
        wishlistContainer.appendChild(itemElement);
    });
}

function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlistItems();
    updateWishlistCount();
}

// Call these functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateWishlistCount();
    displayWishlistItems();
});
