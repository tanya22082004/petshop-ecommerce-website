const collections = [
  {
    id: 1,
    name: "Summer Essentials",
    description: "Keep your pet cool and comfortable",
    image: "images/collection-1.jpg",
    price: "$49.99"
  },
  {
    id: 2,
    name: "Cozy Winter Wear",
    description: "Warm and stylish outfits for cold days",
    image: "images/collection-2.jpg",
    price: "$59.99"
  },
  {
    id: 3,
    name: "Gourmet Treats",
    description: "Delicious and healthy snacks",
    image: "images/collection-3.jpg",
    price: "$29.99"
  },
  {
    id: 4,
    name: "Adventure Gear",
    description: "Equipment for outdoor exploration",
    image: "images/collection-4.jpg",
    price: "$79.99"
  },
  {
    id: 5,
    name: "Grooming Essentials",
    description: "Keep your pet looking their best",
    image: "images/collection-5.jpg",
    price: "$39.99"
  },
  {
    id: 6,
    name: "Playtime Favorites",
    description: "Fun toys for active pets",
    image: "images/collection-6.jpg",
    price: "$34.99"
  },
  {
    id: 7,
    name: "Bedding & Comfort",
    description: "Cozy beds and lounging spots",
    image: "images/collection-7.jpg",
    price: "$69.99"
  },
  {
    id: 8,
    name: "Health & Wellness",
    description: "Supplements and care products",
    image: "images/collection-8.jpg",
    price: "$54.99"
  }
];

function createCollectionCard(collection) {
  return `
    <div class="collection-card">
      <div class="card-banner">
        <img src="${collection.image}" alt="${collection.name}">
      </div>
      <div class="card-content">
        <h3 class="card-title">${collection.name}</h3>
        <p class="card-text">${collection.description}</p>
        <p class="card-price">${collection.price}</p>
      </div>
    </div>
  `;
}

function populateCollections() {
  const gridContainer = document.getElementById('collectionsGrid');
  const collectionCards = collections.map(createCollectionCard).join('');
  gridContainer.innerHTML = collectionCards;
}

document.addEventListener('DOMContentLoaded', populateCollections);
