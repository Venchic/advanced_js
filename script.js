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

class GoodsList {

    constructor() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 }, 
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 }, 
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 }, 
            { title: 'Shoes', price: 250 }, 
        ];
    }

    render() {
        let goodsList = this.goods.map(item => new GoodsItem(item.title, item.price).render());

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


window.onload = () => {
    //renderGoodsList(goods);
    goodsList.render();
    goodsList.totalGoodsPrice();
};

class Cart {
    constructor() {}

    //Добавление элемента в корзину
    addToCart() {}

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
    render() {}
}