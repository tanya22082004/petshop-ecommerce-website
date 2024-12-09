// Define addToCart function in global scope first
window.addToCart = function(button) {
    console.log('Add to cart clicked:', button.dataset); // Debug log
    
    const product = {
        id: button.dataset.productId,
        name: button.dataset.productName,
        price: parseFloat(button.dataset.productPrice.replace('$', '')),
        image: button.dataset.productImage,
        quantity: 1, // Default quantity
        timestamp: new Date().toISOString()
    };
    
    // Get the cart instance and add the item
    if (window.cart) {
        window.cart.addItem(product);
    } else {
        console.error('Cart instance not found');
    }
};

class Cart {
    constructor() {
        this.items = [];
        this.loadCart();
        this.renderCart();
        this.updateSummary();
        
        // Make cart instance globally available
        window.cart = this;
    }

    loadCart() {
        try {
            const savedCart = localStorage.getItem('cart');
            this.items = savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            this.items = [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.items));
            this.updateCartBadge();
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    initializeCartButtons() {
        // Add click event listeners to all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const product = {
                    id: button.dataset.productId,
                    name: button.dataset.productName,
                    price: parseFloat(button.dataset.productPrice.replace('$', '')),
                    image: button.dataset.productImage,
                    quantity: 1, // Default quantity
                    timestamp: new Date().toISOString()
                };
                this.addItem(product);
            });
        });
    }

    addItem(product) {
        // Check if product already exists in cart
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity
        } else {
            this.items.push(product);
        }

        this.saveCart();
        this.renderCart();
        this.updateSummary();
        this.showToast('Item added to cart');
        
        // Animate the cart icon
        this.animateCartIcon();
    }

    animateCartIcon() {
        const cartBadge = document.querySelector('.btn-badge');
        if (cartBadge) {
            cartBadge.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartBadge.style.transform = 'scale(1)';
            }, 200);
        }
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.renderCart();
        this.updateSummary();
        this.showToast('Item removed from cart');
    }

    clearCart() {
        if (confirm('Are you sure you want to clear your cart?')) {
            this.items = [];
            this.saveCart();
            this.renderCart();
            this.updateSummary();
            this.showToast('Cart cleared');
        }
    }

    renderCart() {
        const cartContainer = document.querySelector('.cart-items');
        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="cart-empty">
                    <ion-icon name="cart-outline"></ion-icon>
                    <p>Your cart is empty</p>
                    <button class="checkout-btn" onclick="location.href='/'">
                        Continue Shopping
                    </button>
                </div>
            `;
            return;
        }

        cartContainer.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <span class="item-timestamp">Added: ${new Date(item.timestamp).toLocaleString()}</span>
                    <span class="item-price">$${(item.price * item.quantity).toFixed(2)} (${item.quantity} pcs)</span>
                </div>
                <button class="remove-btn" onclick="cart.removeItem(${index})" title="Remove item">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        `).join('');
    }

    updateSummary() {
        const subtotal = this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);

        const tax = subtotal * 0.1;
        const total = subtotal + tax;

        const summaryElements = {
            subtotal: document.getElementById('subtotal'),
            tax: document.getElementById('tax'),
            total: document.getElementById('total')
        };

        if (summaryElements.subtotal) summaryElements.subtotal.textContent = `$${subtotal.toFixed(2)}`;
        if (summaryElements.tax) summaryElements.tax.textContent = `$${tax.toFixed(2)}`;
        if (summaryElements.total) summaryElements.total.textContent = `$${total.toFixed(2)}`;
    }

    updateCartBadge() {
        const cartBadge = document.querySelector('.btn-badge');
        if (cartBadge) {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    showToast(message) {
        let toast = document.getElementById('cart-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cart-toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Cart(); // This will automatically set window.cart
});

// Add this CSS for animations and toast
const style = document.createElement('style');
style.textContent = `
    .btn-badge {
        transition: transform 0.2s ease;
    }

    #cart-toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    }

    #cart-toast.show {
        opacity: 1;
    }

    .add-to-cart-btn {
        transition: transform 0.2s ease;
    }

    .add-to-cart-btn:active {
        transform: scale(0.95);
    }
`;
document.head.appendChild(style);
