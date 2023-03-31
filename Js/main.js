// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart= document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


let total = 0
let displayTotal = ''
let listCar = []

// Abrir carrinho
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Fechar carrinho
closeCart.onclick = () => {
  cart.classList.remove("active");
};



/* const addCart = document.querySelector('.add-cart') */

let listaCarrinho = ''


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
        console.log('Este item já foi adicionado ao carrinho!')
        
      } else {
        listCar.push(itemSelected)
        console.log(listCar)
      

        const sectionCart = document.getElementById('cart-content')
        const cartBox = document.createElement('div')
        cartBox.className = 'cart-box'
        const image = document.createElement('img')
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
          inp.value -= 1
        }
        ajustPrice.appendChild(qtdLess)

        const inp = document.createElement('input')
        inp.value = 0
        inp.className = 'cart-quantity'
        ajustPrice.appendChild(inp)

      
        const qtdMore = document.createElement('button')
        qtdMore.type = 'text'
        qtdMore.textContent = '+'
        qtdMore.className = 'price-more'
        qtdMore.onclick = () => {
          inp.value ++
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
          total -= parseFloat(priceArray.slice(2))
          displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
          }  
        binIcon.appendChild(buttonIcon)

        fatherBoxDetails.appendChild(ajustPrice)
        fatherBoxDetails.appendChild(binIcon)
        sectionCart.append(cartBox)

        total += parseFloat(priceArray.slice(2))
        displayTotal = document.querySelector('.total-price')
        displayTotal.innerText = `R$${total.toFixed(2).replace(".",",")}`
        

        cart.classList.add("active")
      }
  }





 