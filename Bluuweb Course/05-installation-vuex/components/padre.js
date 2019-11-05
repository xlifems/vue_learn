Vue.component('padre', {
    template: 
    `<div class="p-5 bg-dark text-white">
        <h1>Contenido del componente padre {{numeroPadre}}</h1>
        <button class="btn btn-warning my-5" @click="numeroPadre++">+</button>
        <h4>El nombre del hijo es : {{ nombre }}</h4>
        <hijo :numero="numeroPadre"  @nombreHijo="nombre = $event" ></hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre: 20,
            nombre: ''
        }
    }
})