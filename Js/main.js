// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart= document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


let total = 0
let displayTotal = ''
let listCar = []

/* function para exibir carrinho com o click */ 

cartIcon.onclick = () => {
  cart.classList.add("active");
  if (listCar.length == 0){
    console.log('vazio')
  }
  
};


/* function fechar carrinho -*/

closeCart.onclick = () => {
  cart.classList.remove("active");
};



var buttons = document.querySelectorAll('.add-cart');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = addCart;
}

   /* addCart.addEventListener('click', */
   
  function addCart () { 
      let ex = this.className // Capturando a classe do item clicado (Ex: item1)
      itemSelected = (ex[4]+ex[5]+ex[6]+ex[7]+ex[8]+ex[9])
      
      itemSelected = itemSelected.trim()

      if(listCar.find(element => element == itemSelected)){
        alert('Este item já foi adicionado ao carrinho!')
        
      } else {
        listCar.push(itemSelected)

        /* criando o ícone vermelho com a quantidade de itens no carrinho */
        
        let quantidadeItem = document.querySelector('.quantity-item');
          if (listCar.length > 0){
            quantidadeItem.innerText = `${listCar.length}`
          } 
         
        /* ----------------------------------------------------------------*/

        

        const sectionCart = document.getElementById('cart-content')
        const cartBox = document.createElement('div')
        cartBox.className = 'cart-box'
        const image = document.createElement('img')
        image.className = 'cart-img'
        image.src = document.getElementById('img-'+itemSelected).src
        cartBox.appendChild(image)

        const detailBox = document.createElement('div')
        detailBox.className = 'detail-box'
        cartBox.appendChild(detailBox)

        const cartProduct = document.createElement('div')
        cartProduct.className = 'cart-product-title'
        cartProduct.innerText = document.querySelector(`.tittle-${itemSelected}`).textContent
        detailBox.appendChild(cartProduct)

        const price = document.createElement('p')
        price.className = 'cart-price'
        let priceArray = []
        priceArray = document.querySelector(`.price-${itemSelected}`).textContent
        price.innerText = `R$${parseFloat(priceArray.slice(2)).toFixed(2).replace(".", ",")}`
        detailBox.appendChild(price)


        const fatherBoxDetails = document.createElement('div')
        fatherBoxDetails.className = 'father-details-box'
        detailBox.appendChild(fatherBoxDetails)


        const ajustPrice = document.createElement('div')
        ajustPrice.className = 'ajust-price'

        const binIcon = document.createElement('div')
        binIcon.className = 'bin-icon'


        const qtdLess = document.createElement('button')
        qtdLess.textContent = '-'
        qtdLess.type = 'text'
        qtdLess.className = 'price-less'
        qtdLess.onclick = () => {
          inp.value --
          if (inp.value == 0){ // Removendo item do carrinho caso a quantidade selecionada seja igual a 0
          sectionCart.removeChild(cartBox)
          let idx = listCar.indexOf(itemSelected)
          listCar.splice(idx,1)
          total -= parseFloat(priceArray.slice(2)) * inp.value
          displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
          
          quantidadeItem.innerText = `${listCar.length}`
          if (listCar.length == 0){
            quantidadeItem.innerText = ' '
            cart.classList.remove("active");
          }
          }
          total -= parseFloat(priceArray.slice(2))
          displayTotal = document.querySelector('.total-price')
          displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
        
      }
        ajustPrice.appendChild(qtdLess)

        const inp = document.createElement('input')
        inp.value = 1
        inp.className = 'cart-quantity'
        inp.min = '1'
        ajustPrice.appendChild(inp)
        
        

        const qtdMore = document.createElement('button')
        qtdMore.type = 'text'
        qtdMore.textContent = '+'
        qtdMore.className = 'price-more'
        qtdMore.onclick = () => {
          inp.value ++
          total += parseFloat(priceArray.slice(2))
          displayTotal = document.querySelector('.total-price')
          displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
        }
        ajustPrice.appendChild(qtdMore)


        const buttonIcon = document.createElement('button')
        buttonIcon.className = 'trash-button'
        const icon = document.createElement('i')
        

        icon.className = 'bx bxs-trash cart-remove'
        buttonIcon.appendChild(icon)
        buttonIcon.onclick = function removeCart (){
          const sectionCart = document.getElementById('cart-content')
          sectionCart.removeChild(cartBox)
          let idx = listCar.indexOf(itemSelected)
          listCar.splice(idx,1)
          total -= parseFloat(priceArray.slice(2)) * inp.value
          displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
          quantidadeItem.innerText = `${listCar.length}`
          if (listCar.length == 0){
                cart.classList.remove("active");
                quantidadeItem.innerText = ' '
            } 
          }  
        binIcon.appendChild(buttonIcon)

        fatherBoxDetails.appendChild(ajustPrice)
        fatherBoxDetails.appendChild(binIcon)
        sectionCart.append(cartBox)

        total += parseFloat(priceArray.slice(2))
        displayTotal = document.querySelector('.total-price')
        displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
        

       // cart.classList.add("active");
            
       
       
        }
  }


  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    header.classList.toggle('scroll', window.scrollY > 400);
  });
  




 