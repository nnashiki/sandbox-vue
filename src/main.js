var app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        counter: 0
    },
    methods: {
        increment: function (event) {
            this.counter += 1
        }
    }
})

var button = new Vue({
    el: '#button',
    methods: {
        handleClick: function (event) {
            alert(event.target)
        }
    }
})
