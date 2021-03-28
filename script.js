'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
  
const renderGoodsItem = (title = 'jeans', price = 230) => {
    return `<div class="goods-item">
        <h3>${title}</h3>
        <img src="no-image.jpg" alt="no image">
        <p>${price}</p>
    </div>`;
};
  
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

window.onload = () => {
    renderGoodsList(goods);
};