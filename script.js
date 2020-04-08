var app = new Vue({
    el: '#app',
    data: {
        title: 'Todo Vuejs!',
        todos :[
            {
                text : "imparare VueJs",
                check : false
            },
            {
                text : "trasferirmi",
                check :false
            }
    ],
    },
    methods:{
        cancella(index){
            this.todos.splice(index,1);
        }
    }
})
            
            