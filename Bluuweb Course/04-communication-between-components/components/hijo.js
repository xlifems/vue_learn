Vue.component('hijo', {
    template: 
    `<div class="p-5 bg-success text-white">
        <h1>{{ mensaje }} {{numero}}</h1>
    </div>
    `,
    data() {
        return {
            mensaje:'Helo desde el componente hijo',
            nombre:'felix Adrian'
        }
    },
    props:['numero'],
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
})