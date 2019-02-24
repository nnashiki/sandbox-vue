var app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    }
})

var button = new Vue({
    el: '#button',
    methods: {
       handleClick : function (event) {
           alert(event.target)
       }
    }
})
