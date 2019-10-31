const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Learn vuejs',
        message: 'Sin stok',
        frutas: [
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'Pera', cantidad: 0 },
            { nombre: 'Mango', cantidad: 5 }
        ],
        nuevaFruta: '',
        total:0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({ nombre: this.nuevaFruta, cantidad: 5 });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
           this.total = 0;
           for (const fruta of this.frutas) {
               this.total += fruta.cantidad; 
           }
           return this.total;
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})