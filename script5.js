const products = [
    {
        id: 1,
        name:"Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "electronics"
    },
    {
        id: 2,
        name:"Smart Watch",
        description: "Feature-rich smartwatch with health tracking",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "electronics"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable speaker with 20-hour battery life",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0YyxOqaduA_8UtVKwno-W7qKa05vXPjvVgkGhVkzibYBBnjJxBM-Gj8c&s",
        category: "electronics"
    },
     {
        id: 4,
        name: "Bluetooth Airpodes",
        description: "Portable speaker with 20-hour battery life",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "electronics"
    },
    {
        id: 5,
        name:"Running Shoes",
        description: "Comfortable running shoes for all terrains",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "fashion"
    },
     {
        id: 6,
        name: "Leather Wallet",
        description: "Genuine leather wallet with RFID protection",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1582126486298-9d5194a50d82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYXRoZXIlMjB3YWxsZXR8ZW58MHx8MHx8fDA%3D",
        category: "fashion"
    },
    {
        id: 7,
        name: "Sunglasses",
        description: "UV protection polarized sunglasses",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "fashion"
    },
    {
        id: 8,
        name:"Backpack",
        description: "Durable backpack with laptop compartment",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "fashion"
    },
    {
        id: 9,
        name:"Coffee Maker",
        description: "Automatic coffe maker with timer",
        price: 89.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXQYKH-eaWi3QkUX8D9SA2zJZm0_T2WzmXg&s" ,
        category: "home"
    },
    {
        id: 10,
        name: "Air Fryer",
        description: "Digital air fryer with multiple cooking functions",
        price: 129.99,
        image: "https://plus.unsplash.com/premium_photo-1711684803379-f45ffd226412?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpciUyMGZyeWVyfGVufDB8fDB8fHww",
        category: "home"
    },
    {
        id: 11,
        name: "Blender",
        description: "High-speed blender for smoothies and soups",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
        category: "home"
    },
    {
        id: 12,
        name:"Yoga Mat",
        description: "Non-slip yoga mat with carrying strap",
        price: 29.99,
        image: "https://bionmart.in/cdn/shop/files/EVA34.5mm_bcee3060-0d44-4e07-9498-697e81d8441e.jpg?v=1709891062&width=1445",
        category: "sports"
    },
     {
        id: 13,
        name: "Dumbbell Set",
        description: "Adjustable dumbbells 5-25 lbs",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "sports"
    },
    {
        id: 14,
        name: "Camping Tent",
        description: "4-person waterproof camping tent",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1653526167310-714293464c9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBpbmclMjB0ZW50fGVufDB8fDB8fHww",
        category: "sports"
    }
];

const recommendations = [
    products[1],
    products[4],
    products[2],
    products[0]
];

const productGrid = document.getElementById('product-grid');
const recommendationGrid = document.getElementById('recommendation-grid');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartSideBar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('.cart-count');

let cart = [];

function init() {
    renderProducts();
    renderRecommendations();
    setupEventListeners();
    loadcart();
}

function renderProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
}
function renderRecommendations() {
    recommendationGrid.innerHTML = '';
    recommendations.forEach(product => {
        recommendationGrid.appendChild(createProductCard(product));
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">
             <span class="price">$${product.price.toFixed(2)}</span>
             <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    </div>
    `;
    return card;
}

function setupEventListeners() {
    cartBtn.addEventListener('click',toggleCart);
    closeCartBtn.addEventListener('click',toggleCart);
    overlay.addEventListener('click',toggleCart);

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
        if (e.target.classList.contains('quantity-btn')) {
            const cartItemId = parseInt(e.target.closest('.cart-item').getAttribute('data-id'));
            const isIncrease = e.target.classList.contains('increase');
            updateQuantity(cartItemId, isIncrease ? 1 : -1);
        }
        if (e.target.classList.contains('remove-item')) {
            const cartItemId = parseInt(e.target.closest('.cart-item').getAttribute('data-id'));
            removeFromCart(cartItemId);
        }
    });
}

function toggleCart() {
    cartSideBar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    showAddedToCartMessage(product.name);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
     if (cartItem) {
        cartItem.quantity += change;
         if (cartItem.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
     }
     updateCart();
}

function updateCart() {
    saveCart();
    renderCartItems();
    updateCartCount();
    updateCartTotal();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        return;
    }
     cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.setAttribute('data-id', item.id);
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase">+</button>
                </div>
            </div>
            <button class="remove-item">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}   

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) =>{return sum + (item.price * item.quantity);}, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'added-to-cart-message';
    message.innerHTML = `
        <p>${productName} has been added to your cart!</p>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 2000);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}
// Add to your existing script.js
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Filter products
        const category = button.dataset.category;
        if (category === 'all') {
            renderProducts();
        } else {
            const filteredProducts = products.filter(
                product => product.category === category
            );
            renderFilteredProducts(filteredProducts);
        }
    });
});

function renderFilteredProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
}
init();