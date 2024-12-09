const collections = [
  {
    id: 1,
    name: "Summer Essentials",
    description: "Keep your pet cool and comfortable",
    image: "https://media.istockphoto.com/id/544358808/photo/two-funny-playing-dogs.jpg?s=612x612&w=0&k=20&c=cI-jNsVSLiIN7WJ6gJyn13b_ft-yS2rcPqEE5CS3Aus=",
    price: "$49.99"
  },
  {
    id: 2,
    name: "Cozy Winter Wear",
    description: "Warm and stylish outfits for cold days",
    image: "https://thumbs.dreamstime.com/b/cute-dogs-decked-out-stylish-clothes-playfully-explore-snowy-landscape-cute-dogs-decked-out-stylish-clothes-playfully-294530611.jpg",
    price: "$59.99"
  },
  {
    id: 3,
    name: "Gourmet Treats",
    description: "Delicious and healthy snacks",
    image: "https://m.media-amazon.com/images/I/61YJI+7-WjL._AC_UF1000,1000_QL80_.jpg",
    price: "$29.99"
  },
  {
    id: 4,
    name: "Adventure Gear",
    description: "Equipment for outdoor exploration",
    image: "https://static.vecteezy.com/system/resources/previews/049/414/248/non_2x/adventure-ready-backpack-and-gear-laid-out-on-a-flat-surface-featuring-essentials-for-outdoor-exploration-free-photo.jpeg",
    price: "$79.99"
  },
  {
    id: 5,
    name: "Grooming Essentials",
    description: "Keep your pet looking their best",
    image: "https://cdn.prod.website-files.com/64045354bb774e2a007e6cc2/6514195d9f43a33e49f4d287_Grooming%20Essentials%20for%20Dogs_%20The%20Ultimate%20Guide%20for%20a%20Healthy%2C%20Happy%20Pooch.jpg",
    price: "$39.99"
  },
  {
    id: 6,
    name: "Playtime Favorites",
    description: "Fun toys for active pets",
    image: "https://cdn-jpkmj.nitrocdn.com/aiGbikfmRGiXAaynUTAnHzVVlmYLrkCm/assets/images/optimized/rev-d7d7be5/citizenshipper.com/blog/wp-content/uploads/2024/10/v2-j63sw-3jbaj-768x442.jpg",
    price: "$34.99"
  },
  {
    id: 7,
    name: "Bedding & Comfort",
    description: "Cozy beds and lounging spots",
    image: "https://wikopet.com/wp-content/uploads/2023/01/U3A8730-1-scaled.jpg",
    price: "$69.99"
  },
  {
    id: 8,
    name: "Health & Wellness",
    description: "Supplements and care products",
    image: "https://richesm.com/wp-content/uploads/2022/02/Health-and-Wellness-.jpeg",
    price: "$54.99"
  }
];

function createCollectionCard(collection) {
  return `
    <div class="collection-card">
      <div class="card-banner">
        <img src="${collection.image}" alt="${collection.name}" loading="lazy">
        <button class="wishlist-btn" onclick="addToWishlist(this)" 
          data-product-id="${collection.id}"
          data-product-name="${collection.name}"
          data-product-price="${collection.price}"
          data-product-image="${collection.image}">
          <ion-icon name="heart-outline"></ion-icon>
        </button>
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
