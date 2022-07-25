<!--Componente genera cards a usar en vista Accesorios-->
<template>
    <div>
        <b-card-group columns>
            <b-card
                v-for="(producto,index) in accesorios"
                v-bind:key="index"
                v-bind:title="producto.nombre"
                v-bind:img-src="producto.imagen"
                v-bind:img-alt="`Image ${producto.nombre}`"
                img-top
                text-variant="white"
                bg-variant="dark"
                border-variant="secondary"
                tag="article"
                style="max-width: 25rem;"
                class="mb-2"
            >
            <b-button v-b-toggle="`cardCollapse${index}`" variant="outline-light"><i class="fa-solid fa-wine-glass"></i></b-button>
            <b-collapse v-bind:id="`cardCollapse${index}`">
                <b-card-text>
                <p class="vinoDesc">{{producto.descripcion}}</p>
                </b-card-text>
                <b-card-text>
                    <ul>
                        <li v-for="caracteristica of producto.caracteristicas">{{caracteristica}}</li>
                    </ul>
                </b-card-text>
                </b-collapse>
                <hr>
                <b-card-text>
                    <p class="precios"><b>Precio Oferta: ${{formatNumber(producto.precio_promo)}}</b></p>
                    <p class="precios"><strike>Precio Normal: ${{formatNumber(producto.precio_normal)}}</strike></p>
                </b-card-text>
                <b-button v-on:click="addBolsaAccesorios(producto.id)" variant="light" >Agregar</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
import utils from '@/utils/functions.js'
const {formatNumber} = utils;


export default{
    name: 'Accesorios',
    props:{
    },
    methods:{
        ...mapActions(['addBolsaAccesorios']),
        formatNumber
    },
    computed:{
        ...mapState(['accesorios'])
    }
}
</script>
<style scoped>
hr{
    background-color: white;
}
.vinoDesc{
    margin-top: 15px;
}
.precios{
    margin-bottom: 5px;
}

</style>