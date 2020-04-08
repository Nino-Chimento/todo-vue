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
        newtodo : " "
    },
    methods:{
        cancella(index){
            this.todos.splice(index,1);
        },
        crea(){
           this.todos.push({
               text:this.newtodo,
               check:false
           })
           this.newtodo = ""; 
        },
        fatto(index){
            this.todos[index].check = !this.todos[index].check;
        }, 
    }   
})
            
            