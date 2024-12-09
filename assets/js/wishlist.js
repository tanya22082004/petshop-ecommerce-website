const wishlist = document.getElementById('wishlist');

// Function to add item to wishlist
function addToWishlist(item) {
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if item already exists in wishlist
    if (!wishlistItems.some(wishlistItem => wishlistItem.id === item.id)) {
        wishlistItems.push(item);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        showToast('Item added to wishlist!');
    }
}

// Function to load wishlist items
function loadWishlist() {
    const items = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.innerHTML = '';
    
    if (items.length === 0) {
        wishlist.innerHTML = `
            <p>Your wishlist is empty. 
               <a href="/collections.html" style="color: #ea5541; text-decoration: underline;">
                   Continue shopping
               </a>
            </p>`;
    } else {
        items.forEach((item, index) => {
            setTimeout(() => addItemToList(item), index * 100);
        });
    }
}

// Function to add item to the wishlist display
function addItemToList(item) {
    const li = document.createElement('li');
    li.className = 'wishlist-item';
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
    wishlist.appendChild(li);
}

// Function to delete item from wishlist
function deleteItem(e) {
    if (e.target.classList.contains('delete-btn')) {
        const itemId = e.target.getAttribute('data-id');
        let items = JSON.parse(localStorage.getItem('wishlist')) || [];
        items = items.filter(item => item.id !== itemId);
        localStorage.setItem('wishlist', JSON.stringify(items));
        
        const li = e.target.closest('li');
        li.classList.add('removing');
        
        li.addEventListener('animationend', () => {
            li.remove();
            if (items.length === 0) {
                wishlist.innerHTML = `
                    <p>Your wishlist is empty. 
                       <a href="/collections.html" style="color: #ea5541; text-decoration: underline;">
                           Continue shopping
                       </a>
                    </p>`;
            }
        });
        
        showToast('Item removed from wishlist!');
    }
}

// Function to show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger reflow
    toast.offsetHeight;
    
    // Add visible class
    toast.classList.add('visible');
    
    // Remove toast after animation
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Event Listeners
wishlist.addEventListener('click', deleteItem);
window.addEventListener('load', loadWishlist);

// Export function for use in other files
window.addToWishlist = addToWishlist;
