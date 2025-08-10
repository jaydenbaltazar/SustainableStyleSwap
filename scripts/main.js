function getCategoryName(id) {
  switch (id) {
    case "1": return "Tops";
    case "2": return "Bottoms";
    case "3": return "Outerwear";
    default: return "Unknown";
  }
}

const products = [
  {
    name: "Black Japanese T-shirt",
    category: "1",
    image: "./images/clothes/filo/blackJapanShirt.jpg",
    size: "Large",
    color: "Black",
    club: "FILO",
  },
  {   
    name: "Grey Basketball T-shirt",
    category: "1",
    image: "./images/clothes/filo/basketballGreyShirt.jpg",
    size: "Small",
    color: "Grey",
    club: "FILO",
  },
  {   
    name: "Beige Wrangler Pants",
    category: "2",
    image: "./images/clothes/filo/beigePants.jpg",
    size: "Large",
    color: "Beige",
    club: "FILO",
  },
  {   
    name: "Camo Pants",
    category: "2",
    image: "./images/clothes/filo/camoPants.jpg",
    size: "X-Large",
    color: "Green",
    club: "FILO",
  },
  {   
    name: "Brown Hockey Shirt",
    category: "1",
    image: "./images/clothes/filo/brownHockeyShirt.jpg",
    size: "Large",
    color: "Brown",
    club: "FILO",
  },
  {   
    name: "Newcastle United Jersey",
    category: "1",
    image: "./images/clothes/filo/newcastleJersey.jpg",
    size: "Small",
    color: "Grey",
    club: "FILO",
  },
  {   
    name: "Purple Lacoste Shirt",
    category: "1",
    image: "./images/clothes/filo/purpleLacosteShirt.jpg",
    size: "Large",
    color: "Purple",
    club: "FILO",
  },
  {   
    name: "Black Plaid Jacket",
    category: "3",
    image: "./images/clothes/filo/blackPlaidJacket.JPG",
    size: "Small",
    color: "Black",
    club: "FILO",
  },
  {   
    name: "Blue Champion Shirt",
    category: "1",
    image: "./images/clothes/filo/blueChampionShirt.JPEG",
    size: "Extra Small",
    color: "Blue",
    club: "FILO",
  },
  {   
    name: "Brown Long Sleeve",
    category: "1",
    image: "./images/clothes/filo/brownLongSleeve.JPG",
    size: "Extra Small",
    color: "Brown",
    club: "FILO",
  },
  {   
    name: "Knitted Button Up",
    category: "1",
    image: "./images/clothes/filo/knittedButtonUp.JPG",
    size: "Small",
    color: "Brown",
    club: "FILO",
  },
  {   
    name: "Grey Long Sleeve",
    category: "1",
    image: "./images/clothes/filo/greyLongSleeve.JPG",
    size: "Small",
    color: "Grey",
    club: "FILO",
  },
  {   
    name: "White Shorts",
    category: "2",
    image: "./images/clothes/filo/whiteShorts.JPG",
    size: "Extra Small",
    color: "White",
    club: "FILO",
  },
  {   
    name: "Winter Quarter Zip",
    category: "1",
    image: "./images/clothes/filo/winterQuarterZip.JPG",
    size: "Small",
    color: "Dark Grey",
    club: "FILO",
  },
  {   
    name: "Spyder Dark Blue Jacket",
    category: "3",
    image: "./images/clothes/filo/spyderDarkBlueHoodie.JPG",
    size: "Large",
    color: "Dark Blue",
    club: "FILO",
  },
  {   
    name: "Blue Sport Jacket",
    category: "3",
    image: "./images/clothes/filo/blueSportJacket.JPG",
    size: "Large",
    color: "Blue",
    club: "FILO",
  },
  {   
    name: "Flower Dress",
    category: "3",
    image: "./images/clothes/filo/flowerDress.JPG",
    size: "Large",
    color: "Black",
    club: "FILO",
  },
  {   
    name: "Grey Adidas Shirt",
    category: "1",
    image: "./images/clothes/filo/greyAdidasShirt.JPG",
    size: "Large",
    color: "Grey",
    club: "FILO",
  },
  {   
    name: "Loteria Shirt",
    category: "1",
    image: "./images/clothes/filo/lotteriaShirt.JPG",
    size: "Large",
    color: "Black",
    club: "FILO",
  },
  {   
    name: "Adidas Pants",
    category: "2",
    image: "./images/clothes/filo/adidasPants.JPG",
    size: "Large",
    color: "Black",
    club: "FILO",
  },
  {   
    name: "Red Shirt",
    category: "1",
    image: "./images/clothes/filo/redShirt.JPG",
    size: "Large",
    color: "Red",
    club: "FILO",
  },
  {   
    name: "Red Hoodie",
    category: "3",
    image: "./images/clothes/filo/redHoodie.JPG",
    size: "Large",
    color: "Red",
    club: "FILO",
  },
  {   
    name: "Gym Sleeveless Hoodie",
    category: "3",
    image: "./images/clothes/filo/gymSleevelessHoodie.JPG",
    size: "Large",
    color: "Black",
    club: "FILO",
  },
  {   
    name: "Us Open Tennis Blue Hoodie",
    category: "3",
    image: "./images/clothes/filo/usOpenHoodie.jpg",
    size: "Large",
    color: "Blue",
    club: "FILO",
  },

  {   
    name: "Blue Button Up",
    category: "1",
    image: "./images/clothes/pride/blueButtonUp.JPG",
    size: "Medium",
    color: "Blue",
    club: "PRIDE",
  },
  {   
    name: "Brown Cargo Pants",
    category: "2",
    image: "./images/clothes/pride/brownCargoPants.JPG",
    size: "Large",
    color: "Brown",
    club: "PRIDE",
  },
  {   
    name: "Dinosaur Jacket",
    category: "3",
    image: "./images/clothes/pride/dinosaurJacket.JPG",
    size: "Medium",
    color: "White",
    club: "PRIDE",
  },
  {   
    name: "Grey Cardigan",
    category: "3",
    image: "./images/clothes/pride/greyCardigan.JPG",
    size: "Small",
    color: "Grey",
    club: "PRIDE",
  },
  {   
    name: "America Shirt",
    category: "1",
    image: "./images/clothes/laso/americaShirt.jpg",
    size: "Large",
    color: "White",
    club: "LASO",
  },
  {   
    name: "Black Jean Shorts",
    category: "2",
    image: "./images/clothes/laso/blackJeanShorts.jpg",
    size: "Large",
    color: "Black",
    club: "LASO",
  },
  {   
    name: "Black Striped Button Up",
    category: "1",
    image: "./images/clothes/laso/blackStripedButtonUp.jpg",
    size: "Medium",
    color: "Black",
    club: "LASO",
  },
  {   
    name: "Blue Jacket",
    category: "3",
    image: "./images/clothes/laso/blueJacket.jpg",
    size: "Large",
    color: "Blue",
    club: "LASO",
  },
  {   
    name: "Black Prague Crop Top",
    category: "1",
    image: "./images/clothes/es/blackPragueCrop.JPG",
    size: "Small",
    color: "Black",
    club: "Earth Society",
  },
  {   
    name: "Red Floral Top",
    category: "1",
    image: "./images/clothes/es/redTop.JPG",
    size: "Small",
    color: "Red",
    club: "Earth Society",
  },
  
];

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function navigateToCategory(categoryId, clubName) {
  const params = new URLSearchParams({ category: categoryId });
  if (clubName) params.append("club", clubName);
  window.location.href = `collection.html?${params.toString()}`;
}

function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!query) return;

  const content = document.getElementById("main-content");
  const title = document.getElementById("page-title");

  if (!content || !title) {
    // If not on collection page, redirect with search query
    window.location.href = `collection.html?search=${encodeURIComponent(query)}`;
    return;
  }

  const results = products.filter((p) => p.name.toLowerCase().includes(query));

  title.textContent = results.length > 0
    ? `Search results for "${query}"`
    : `No products found for "${query}"`;

  content.innerHTML = "";
  results.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="product.html?productName=${encodeURIComponent(product.name)}">
        <div class="card-overlay"></div>
        <div class="card-inner">
          <img src="${product.image}" alt="${product.name}" />
        </div>
      </a>
    `;
    content.appendChild(card);
  });
}

function renderProducts(categoryFilter, clubFilter) {
  const content = document.getElementById("main-content");
  const title = document.getElementById("page-title");

  let filtered = products;

  if (categoryFilter) {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }

  if (clubFilter) {
    filtered = filtered.filter((p) => p.club === clubFilter);
  }

  title.textContent =
    filtered.length > 0
      ? `Here's some ${clubFilter || ''} ${getCategoryName(categoryFilter) +  `... come to our event to see more!` || 'Products'}`
      : `No products... come to our event to see more!`;

  content.innerHTML = "";
  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="product.html?productName=${encodeURIComponent(product.name)}">
        <div class="card-overlay"></div>
        <div class="card-inner">
          <img src="${product.image}" alt="${product.name}" />
        </div>
      </a>
    `;
    content.appendChild(card);
  });
}

function initCollectionPage() {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");
  const clubParam = params.get("club");
  const searchParam = params.get("search");

  if (searchParam) {
    document.getElementById("searchInput").value = searchParam;
    handleSearch(new Event("submit"));
  } else {
    renderProducts(categoryParam, clubParam);
  }
}

function initProductPage() {
  const name = getQueryParam("productName");
  const title = document.getElementById("product-title");
  const image = document.getElementById("product-image");
  const category = document.getElementById("product-category");
  const size = document.getElementById("product-size");
  const color = document.getElementById("product-color");
  const club = document.getElementById("product-club");

  const found = products.find((p) => p.name === name);
  if (found) {
    title.textContent = found.name;
    image.src = found.image;
    category.textContent = getCategoryName(found.category);
    size.textContent = found.size || "N/A";
    color.textContent = found.color || "N/A";
    club.textContent = found.club || "N/A";
  } else {
    title.textContent = "Product not found";
    image.src = "";
    category.textContent = "-";
    size.textContent = "-";
    color.textContent = "-";
    club.textContent = "-";
  }
}

// Mobile submenu toggle for navigation bar
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-toggle='submenu']");

  toggles.forEach(toggle => {
    const submenu = toggle.parentElement.querySelector(".submenu");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      // Close all submenus
      document.querySelectorAll(".submenu").forEach(s => {
        if (s !== submenu) s.classList.remove("open");
      });

      // Toggle current submenu
      submenu.classList.toggle("open");
    });
  });
});

function toggleMenu(button) {
  const menus = document.querySelectorAll('.menu');
  menus.forEach(menu => {
    menu.classList.toggle('show');
  });
  button.classList.toggle('active');
}



