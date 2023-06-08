var categories = [
    { name: "outerwear", description: "Waders, Vests, Hats, Boots" },
    { name: "rod&reel", description: "Fishing Rods, Reels and Combos" },
    { name: "tackle", description: "Spoons, Inline Spinners, Float rigs and Jiggers" },
    { name: "livebait", description: "Worms, Grubs and Eggs" }
  ];
  
  function showProducts(category) {

    var productList = document.getElementById("product-list");
    
    productList.innerHTML = "";
    
    var filteredProducts = products.filter(function(product) {
      return product.category === category.name;
    });
    
    filteredProducts.forEach(function(product) {
      var row = document.createElement("tr");
      row.innerHTML = "<td>" + product.name + "</td><td>" + product.price + "</td><td>" + product.category + "</td>";
      productList.appendChild(row);
    });
  }
  
  var menu = document.getElementById("menu");
  categories.forEach(function(category) {
    var button = document.createElement("button");
    button.textContent = category.description;
    button.addEventListener("click", function() {
      showProducts(category);
    });
    menu.appendChild(button);
  });
  
  var products = [
    { name: "Neo Wader", price: 15500, category: "outerwear" , discontinued: false },
    { name: "Ugly Stik Orig", price: 12000, category: "rod&reel" , discontinued: false },
    { name: "Croc Diam", price: 1000, category: "tackle" , discontinued: false },
    { name: "Night Crawl", price: 500, category: "livebait" , discontinued: false },
    { name: "Ang Vest", price: 12500, category: "outerwear", discontinued: true },
    { name: "Penn Voy", price: 8500, category: "rod&reel" , discontinued: false },
    { name: "Rap Rain", price: 2000, category: "tackle" , discontinued: false },
    { name: "Salm Egg", price: 1000, category: "livebait" , discontinued: true },
  ];

  function filterProductsByCategory(category) {
    return products.filter(function(product) {
      return product.category === category;
    });
  }
  
  function filterProductsNotDiscontinued() {
    return products.filter(function(product) {
      return !product.discontinued;
    });
  }
  
  var chosenCategory = "outerwear";
  var productsInChosenCategory = filterProductsByCategory(chosenCategory);
  console.log(productsInChosenCategory);
  
  var productsNotDiscontinued = filterProductsNotDiscontinued();
  console.log(productsNotDiscontinued);
  
  showProducts({ name: "All Categories" });

  function clearProductList() {
    var productList = document.getElementById("product-list");
    productList.innerHTML = "";
  }

var tbody = document.getElementById("product-list");

tbody.innerHTML = "";

productsInChosenCategory.forEach(function(product) {
  
  var row = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.textContent = product.name;

  var priceCell = document.createElement("td");
  priceCell.textContent = product.price;

  var categoryCell = document.createElement("td");
  categoryCell.textContent = product.category;

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(categoryCell);

  tbody.appendChild(row);
});


var tbody = document.getElementById("product-list");

tbody.innerHTML = "";

function handleRowClick(product) {
  console.log("Product Details:", product);
}

productsInChosenCategory.forEach(function(product) {
  var row = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.textContent = product.name;

  var priceCell = document.createElement("td");
  priceCell.textContent = product.price;

  var categoryCell = document.createElement("td");
  categoryCell.textContent = product.category;

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(categoryCell);

  row.addEventListener("click", function() {
    handleRowClick(product);
  });

  tbody.appendChild(row);
});

var tbody = document.getElementById("product-list");

tbody.innerHTML = "";

function handleRowClick(product) {
  console.log("Product Details:", product);
}

function formatAsCanadianCurrency(priceInCents) {
  var formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  });
  return formatter.format(priceInCents / 100);
}

productsInChosenCategory.forEach(function(product) {
  var row = document.createElement("tr");

  var titleCell = document.createElement("td");
  titleCell.textContent = product.title;

  var descriptionCell = document.createElement("td");
  descriptionCell.textContent = product.description;

  var priceCell = document.createElement("td");
  var priceInDollars = formatAsCanadianCurrency(product.price);
  priceCell.textContent = priceInDollars;

  row.appendChild(titleCell);
  row.appendChild(descriptionCell);
  row.appendChild(priceCell);

  row.addEventListener("click", function() {
    handleRowClick(product);
  });

  tbody.appendChild(row);
});