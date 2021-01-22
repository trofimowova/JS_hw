var d = document,
    itemBox = d.querySelectorAll('.item_box'), 
    cartCont = d.getElementById('cart_content'); 

    function addEvent(elem, type, handler){
        if(elem.addEventListener){
          elem.addEventListener(type, handler, false);
        } else {
          elem.attachEvent('on'+type, function(){ handler.call( elem ); });
        }
        return false;
      }

      function getCartData(){
        return JSON.parse(localStorage.getItem('cart'));

    function setCartData(o){
        localStorage.setItem('cart', JSON.stringify(o));
        return false;

        function addToCart(e){
            this.disabled = true; 
            var cartData = getCartData() || {}, 
                parentBox = this.parentNode, 
                itemId = this.getAttribute('data-id'), // ID товара
                itemTitle = parentBox.querySelector('.item_title').innerHTML, 
                itemPrice = parentBox.querySelector('.item_price').innerHTML; 
            if(cartData.hasOwnProperty(itemId)){ 
              cartData[itemId][2] += 1;
            } else { 
              cartData[itemId] = [itemTitle, itemPrice, 1];
            }
            if(!setCartData(cartData)){ 
              this.disabled = false; 
            }
           return false;
          }
//
