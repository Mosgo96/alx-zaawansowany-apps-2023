const orderSum = document.querySelector('#orderSum');
const averagePrice = document.querySelector('#averagePrice');

const calculateSumButton = document.querySelector('#calculateSumButton');
const calculateAveragePriceButton = document.querySelector('#calculateAveragePriceButton')

const products = [
    {
      name: 'banan',
      price: 4.99
    },
    {
      name: "chleb",
      price: 3.25
    },
    {
      name: 'ser',
      price: 7.00
    },
    {
      name: 'baton',
      price: 1.99
    }
  ]

const calculateOrderSum = () => {
    let sum = 0;

    products.forEach(order => {
        sum += order.price
    })

    orderSum.innerText = ` ${sum} zł`;
}

const calculateAveragePrice = () => {
    let sum = 0;
  
    products.forEach(order => {
      sum += order.price
    })
  
    averagePrice.innerText = ` ${(sum / products.length).toFixed(2)}zł`
  }

  calculateSumButton.addEventListener('click', calculateOrderSum);
  calculateAveragePriceButton.addEventListener('click', calculateAveragePrice);