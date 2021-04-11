'use strict';

// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];
  
// const renderGoodsItem = (title = 'jeans', price = 230) => {
//     return `<div class="goods-item">
//         <h3>${title}</h3>
//         <img src="no-image.jpg" alt="no image">
//         <p>${price}</p>
//     </div>`;
// };
  
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join('');
// };

function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        // console.log('Работает промис');
        let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(callback(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
  }

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {

    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`, (good) => {
            this.goods = JSON.parse(good);
            console.log(this.goods);
        })
    }

    render() {
        let goodsList = this.goods.map(item => new GoodsItem(item.product_name, item.price).render());

        document.querySelector('#goods-list').innerHTML = goodsList.join('');
    }
    totalGoodsPrice() {
        let totalPriceForGoods = 0;

        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPriceForGoods += good.price;
            }
        });

        document.querySelector('#total-goods').innerHTML = `Общая сумма товаров - ${totalPriceForGoods}`;
    }
}

class GoodsItem {

    constructor(title = 'Товар', price = 'Запросить') {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item">
        <h3>${this.title}</h3>
        <img src="no-image.jpg" alt="no image">
        <p>${this.price}</p>
        <button id="add-to-cart" onclick="addToCart()">В корзину</button>
    </div>`;
    }
}

let goodsList = new GoodsList();
goodsList.fetchGoods();


window.onload = () => {
    //renderGoodsList(goods);
    goodsList.render();
    goodsList.totalGoodsPrice();
};

class Cart {
    constructor() {
        this.cartGoods = [];
    }

    //Добавление элемента в корзину
    addToCart(id) {
        let toCart;

        list.goods.forEach(function(item) {
            if (id = item.id) {
                toCart = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                }
            }
        });
        this.cartGoods.push(toCart);

    }

    //Соответсвенно, удаление элемента
    removeFromCart () {}


    //Вывод общего количества товаров и их общей суммы
    totalItems() {}

    totalPrices() {}
    //верстка самой корзины
    render() {}

    //вызов корзины с кнопки
    openCart() {}
}

class CartItem extends GoodsItem {
    //возмем оттуда конструктор, но рендер свой
    render() {
        return `<div class="cart-item">
        <h3>${this.title}</h3>
        <img src="no-image.jpg" alt="no image">
        <p>${this.price}</p>
        <button id="remove-from-cart" onclick="removeFromCart(${this.id})">&times;</button>
    </div>`;
    }
}