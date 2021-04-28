const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        searchStatus: `поиск`,
        API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/',
        catalogData: 'catalogData.json',
        isVisibleCart: false,
        show: false,
        isSearchBoxVisible: false,
    },
    methods: {
        makeGETRequest(url, callback) {
          let xhr;
          if (window.XMLHttpRequest) {
              xhr = new XMLHttpRequest();
              //console.log(xhr);
          } else if (window.ActiveXObject) {
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
          }
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
                //console.log(callback(xhr.responseText));
            }
          }
          xhr.open('GET', url, true);
          xhr.send();
        },
        filterGoods () {
            let filterRequest = this.searchLine.toLowerCase().trim();
            console.log(filterRequest);

            if (filterRequest === '') {
                this.filteredGoods = this.goods;
            } else {
                this.filteredGoods = this.goods.filter((product) => {
                    return product.product_name.toLowerCase().includes(filterRequest);
                });
            }
        },
        addToCart (index) {
           console.log(index);
        },
        toggleCart () {
            this.isVisibleCart = !this.isVisibleCart;
            console.log(this.isVisibleCart);
        },
        toggleShow () {
            this.show = !this.show;
            console.log(this.show);
        },
        toggleSearchBox (){
            this.isSearchBoxVisible = !this.isSearchBoxVisible;
            if (this.isSearchBoxVisible) {
                this.searchStatus = 'закрыть';
            } else {
                this.searchStatus = 'search';
            }
        },
        changeIconSearch () {

        },
    },
    computed: {

    },
    mounted() {
      // сработает сразу после запуска
        this.makeGETRequest(`${this.API + this.catalogData}`, (goods) => {
            console.log(goods);
            if (goods) {
                this.goods = JSON.parse(goods);
                console.log(JSON.parse(goods));
                this.filteredGoods = JSON.parse(goods);
                //console.log(this.filteredGoods.price);
            } else {
                this.goods.product_name = 'Нет данных';
                this.filteredGoods.product_name = 'Нет данных';
            }
        });
    },
});

Vue.component ('goods-list', {
    props: ['goods'],
    template: `
    <div class="goods-list" id="goods-list">
        <goods-item 
            v-for="good in goods" 
            :good="good"> 
        </goods-item>
    </div>
    `,
});

Vue.component ('goods-item', {
    props: ['good'],
    template: `
        <div class="goods-item">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
        </div>
    `,
});