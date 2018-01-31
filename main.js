'use strict'

var app = new Vue({
    el: '#app',
    data: {
        isAll: true,
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                check: true,
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1,
                check: true,
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                check: true,
            },
        ]
    },
    methods: {
        remove: function (index) {  //移除商品
            this.list.splice(index, 1);
        },
        reduce: function (index) {  //减少商品
            this.list[index].count --;
        },
        add: function (index) { //增加商品
            this.list[index].count ++;
        },
        selAll: function () {   //商品全选
            let isAll = document.querySelector('#all');

            if (isAll.checked == true) {
                this.list.forEach(function(item, index) {
                    item.check = true;
                })  
            } else {
                this.list.forEach(function(item, index) {
                    item.check = false;
                })  
            }
        }
    },
    computed: {
        totalPrices: function () {  //计算总价
            let totalPrices = 0;

            this.list.forEach(function (val, index) {
                if (val.check == true)
                    totalPrices += parseFloat(val.price * val.count);
            })

            return totalPrices.toString().replace(/\B(?=(\d{3})+$)/g, ','); //每三位数中间加一个‘，’
        }
    }
})