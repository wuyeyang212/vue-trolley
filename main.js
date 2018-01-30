var app = new Vue({
    el: '#app',
    data: {
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
        remove: function (index) {
            this.list.splice(index, 1);
        },
        reduce: function (index) {
            this.list[index].count --;
        },
        add: function (index) {
            this.list[index].count ++;
        },
        selAll: function () {
            let isAll = document.querySelector('#all').checked;

            this.list.forEach(function(item, index) {
                item.check = !item.check
            })
            
        }
    },
    computed: {
        totalPrices: function () {
            let totalPrices = 0

            this.list.forEach(function (val, index) {
                if (val.check == true)
                    totalPrices += parseFloat(val.price * val.count);
            })

            return totalPrices.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    }

})