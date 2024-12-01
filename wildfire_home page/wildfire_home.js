

// cart
let cart_items=[];

function add_to_bag(productid){
    cart_items.push(productid)
    localStorage.setItem("cart_items",JSON.stringify(cart_items))
    cart_count()
}

function cart_count(){
    document.querySelector(".count").innerText = cart_items.length
}

// like wishlist
let like_product =[];

function wishlist_product(productid){
    like_product.push(productid)
    localStorage.setItem("like_product",JSON.stringify(like_product))
    like_count()
}

function like_count(){
    document.querySelector(".like").innerText = like_product.length
}



// products
let item_contener = document.querySelector(".items");
let item = document.querySelector(".item");

let product = [
    {
        id:"001",
        image:"https://images.meesho.com/images/products/402732758/feqay_512.webp",
        title:"ONE PIECE",
        discription:"The Souled Store Men and Boys Short Sleeves Solid Cotton Oversized Hooded T-Shirts",
        rating:{
            review:4.5,
            people_buy:1400,
        },
        price:1500,
        cut_price:2100,
    },
    {
        id:"002",
        image:"https://m.media-amazon.com/images/I/51Bj9syNw2L._SX679_.jpg",
        title:"PUMA",
        discription:"Allen Solly Men's Cotton Crew Neck Sweatshirt",
        rating:{
            review:4.6,
            people_buy:2300,
        },
        price:3000,
        cut_price:5000,
    },
    {
        id:"003",
        image:"https://m.media-amazon.com/images/I/51JOZCImL6L._SY879_.jpg",
        title:"HIT SQUARE",
        discription:"HIT SQUARE Classic Batman Polyster Gym/Sports Hood T-Shirt for Men",
        rating:{
            review:4.4,
            people_buy:800,
        },
        price:1000,
        cut_price:1800,
    },
    {
        id:"004",
        image:"https://m.media-amazon.com/images/I/71Pzo2e+d5L._SX679_.jpg",
        title:"HIT SQUARE",
        discription:"HIT SQUARE Classic Batman Polyster Gym/Sports Hood T-Shirt for Men",
        rating:{
            review:5,
            people_buy:800,
        },
        price:1000000,
        cut_price:1800,
    },
    {
        id:"005",
        image:"https://m.media-amazon.com/images/I/51xvMpy37LL._SY879_.jpg",
        title:"HIT SQUARE",
        discription:"The Souled Store Men and Boys Short Sleeves Solid Cotton Oversized Hooded T-Shirts",
        rating:{
            review:4.7,
            people_buy:800,
        },
        price:1700,
        cut_price:2600,
    },
    {
        id:"006",
        image:"https://m.media-amazon.com/images/I/61tM2jn7LQL._SX679_.jpg",
        title:"HIT SQUARE",
        discription:"LEOTUDE Men's Full Sleeve Regular Fit Tshirt, Round Neck Cottonblend T-Shirt",
        rating:{
            review:4.2,
            people_buy:800,
        },
        price:1900,
        cut_price:2400,
    },
    {
        id:"007",
        image:"https://m.media-amazon.com/images/I/71POpWY7J0L._SY879_.jpg",
        title:"JUGULAR",
        discription:"JUGULAR Men's Cotton Hooded Neck T-Shirt with Mask ",
        rating:{
            review:4.4,
            people_buy:1200,
        },
        price:1600,
        cut_price:2300,
    },
    {
        id:"008",
        image:"https://m.media-amazon.com/images/I/713UZ1-vrmL._SY879_.jpg",
        title:"Richscot",
        discription:"Richscot Mens Hooded Lion Printed Tshirt with Mask",
        rating:{
            review:4.4,
            people_buy:800,
        },
        price:1200,
        cut_price:1700,
    },
    {
        id:"009",
        image:"https://m.media-amazon.com/images/I/71tg+kJnvLL._SY879_.jpg",
        title:"RES",
        discription:"The Souled Store Deep Diver II Men and Boys Short Sleeves Purple Graphic Printed Cotton Oversized Hooded T-Shirts",
        rating:{
            review:4.4,
            people_buy:800,
        },
        price:1500,
        cut_price:2000,
    },
]


// HTML PAGE

function Displayproducts_HOMEpage(){
    
let innerHTML = ``;
product.forEach(product=>{
    innerHTML += `<div class="item">
                        <!-- item property -->
                        <img src="${product.image}" alt="product img">
                        <div class="heart" onclick="wishlist_product(${product.id})"><i class="fa-solid fa-heart"></i></div>
                        <div class="add_to_chart" onclick="add_to_bag(${product.id})"><i class="fa-solid fa-cart-shopping"></i></div>
                        <div class="item_content">

                            <h4 class="item_title">${product.title}</h4>
                            <span class="discription">${product.discription}</span><br>
                            
                            <div class="line2">
                                <span class="rating">${product.rating.review}/5 <i class="fa-solid fa-star"></i></span>
                                <span class="people_buy">| ${product.rating.people_buy}<i class="fa-solid fa-user"></i></span>
                            </div>
                            
                            <div class="line3">
                                <span class="price">₹${product.price}</span>
                                <span class="cut_price">${product.cut_price}</span>
                                <span class="sale">sale</span>
                            </div>

                        </div>

                    </div>`
})
item_contener.innerHTML = innerHTML
}


// onload 

function onload(){
    //cart filling
    let cart_items_str = localStorage.getItem("cart_items");
    cart_items = cart_items_str ? JSON.parse(cart_items_str):[];
    // wishlist filling
    let wishlist_item_str = localStorage.getItem("like_product");
    like_product = wishlist_item_str ? JSON.parse(wishlist_item_str) : [];
    Displayproducts_HOMEpage()
}
onload()
