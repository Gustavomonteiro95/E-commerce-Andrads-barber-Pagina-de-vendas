
function orderedProducts() {
  let products = Array.from(document.querySelectorAll('.product-box'));
  let selectedValue = document.querySelector('#filter').value;

  switch (selectedValue) {
    case 'offers':
      // Ordena por produtos em oferta
      products.sort(function(a, b) {
        let priceA = parseFloat(a.querySelector('.price').getAttribute('data-preco'));
        let priceB = parseFloat(b.querySelector('.price').getAttribute('data-preco'));

        let isOfferA = a.querySelector('.price').getAttribute('data-oferta') === 'true';
        let isOfferB = b.querySelector('.price').getAttribute('data-oferta') === 'true';

        if (isOfferA && !isOfferB) {
          return -1;
        } else if (!isOfferA && isOfferB) {
          return 1;
        } else {
          return priceA - priceB;
        }
      });
      break;
    case 'smallerPrice':
      // Ordena por menor preço
      products.sort(function(a, b) {
        let priceA = parseFloat(a.querySelector('.price').getAttribute('data-preco'));
        let priceB = parseFloat(b.querySelector('.price').getAttribute('data-preco'));

        return priceA - priceB;
      });
      break;
    case 'biggerrPrice':
      // Ordena por maior preço
      products.sort(function(a, b) {
        let priceA = parseFloat(a.querySelector('.price').getAttribute('data-preco'));
        let priceB = parseFloat(b.querySelector('.price').getAttribute('data-preco'));

        return priceB - priceA;
      });
      break;
    default:
      break;
  }

  // Adiciona os produtos ordenados de volta à página
  let shopContent = document.querySelector('.shop-content');
  shopContent.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    shopContent.appendChild(products[i]);
  }
}

const selected = document.getElementById("filter")

selected.addEventListener("change", orderedProducts)
