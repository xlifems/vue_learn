const app = new Vue({
    el: '#app',
    data: {
        fondo: 'bg-warning',
        color: false      
    },
    methods: {
        agregarFruta() {
            this.frutas.push({ nombre: this.nuevaFruta, cantidad: 5 });
            this.nuevaFruta = '';
        }
    }
})