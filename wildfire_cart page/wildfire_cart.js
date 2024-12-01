
// display cart  

let cart_items_object
function display_item_incart(){
    cart_items_object = cart_items.map(id_of_item=>{
        for(let i = 0 ; i <= product.length ; i++){
            if(id_of_item == product[i].id){
                return product[i] 
            }
        }
    })
    console.log(cart_items_object)
}

// onload thing to display when load of page

function onload(){
    display_item_incart();
    display_cart_item();
    display_cart_summary();
}

onload()

function display_cart_item(){
    let items_cart = document.querySelector(".items");
    let innerHTML = ``;
    cart_items_object.forEach(element => {
        innerHTML += generateItem_HTML(element)
    });
    items_cart.innerHTML = innerHTML;
    
}



function remove_item_fromCart(item_id){
    cart_items = cart_items.filter(cart_items_id=> cart_items_id != item_id );
    localStorage.setItem("cart_items",JSON.stringify(cart_items));
    display_item_incart();
    display_cart_item();
    display_cart_summary();
}
 

function generateItem_HTML(item){
    return `<div class="item">
                        <!-- item property -->
                        <img src="${item.image}" alt="product img">
                        <div class="item_content">

                            <h4 class="item_title">${item.title}</h4>
                            <span class="discription">${item.discription}</span>
                            
                            <div class="line2">
                                <span class="rating">${item.rating.review}/5 <i class="fa-solid fa-star"></i></span>
                                <span class="people_buy">|${item.rating.people_buy}<i class="fa-solid fa-user"></i></span>
                            </div>
                            
                            <div class="line3">
                                <span class="price">₹${item.price}</span>
                                <span class="cut_price">${item.cut_price}</span>
                                <span class="sale">sale</span>
                            </div>

                        </div>
                        <div class="cross" onclick="remove_item_fromCart(${item.id})"><i class="fa-solid fa-x"></i></div>
                    </div>`
}

// 

console.log(cart_items)


function remove_item_fromCart(item_id) {
    const index = cart_items.indexOf(item_id); // Find the index of the first occurrence of item_id
    if (index !== -1) { // If item_id is found in the cart_items array
        cart_items.splice(index, 1); // Remove only one instance of the item_id
    }
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
    display_item_incart();
    display_cart_item();
}















// cart mrp

function display_cart_summary(){
    let cart_summary = document.querySelector(".cart_summary");
    let total_item = cart_items.length;
    let total_MRP = 0;
    let Discount_MRP = 0;
    let Total_amount = 0;

        
    cart_items_object.forEach(item_neededtoadd =>{
        total_MRP += item_neededtoadd.cut_price;
    })

    cart_items_object.forEach(item_discountadded =>{
        Discount_MRP += item_discountadded.cut_price - item_discountadded.price
    })

    cart_items_object.forEach(item_totalamount =>{
        Total_amount += item_totalamount.price + 50
    })

    cart_summary.innerHTML = 
    `<div class="total_price">
                    <div class="logo" onclick="show_MRP()"><i class="fa-solid fa-wallet"></i></div>
                    <div class="total_price_item">
                        <div class="upper_item">
                            <p style="display: inline-block; font-family:Verdana, Geneva, Tahoma, sans-serif;">ITEM :- ${total_item}</p>
                        </div>
                        <div class="MRP">
                            <pre><h3>Total MRP                             ₹${total_MRP}</h3></pre>
                            <pre><h3>Discount on MRP                       -₹${Discount_MRP}</h3></pre>
                            <pre><h3>Convenience Fee                         ₹50</h3></pre>
                            <hr>
                            <pre><h2>TOTAL AMOUNT                 ₹${Total_amount}</h2></pre>
                        </div>
                    </div>
                </div>`
}













// MRP


let total_price_item = document.querySelector(".total_price_item")

function show_MRP(){
    total_price_item.classList.toggle("enable")
}

