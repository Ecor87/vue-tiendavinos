<!--Componente genera bolsa de compras a usar en vistas Vinos,Promocion,Accesorios,Checkout-->
<template>
    <div class="container bolsaCompras">
        <h2>Bolsa de Compras</h2>

        <!--Solo muestra elemento cuando array bolsa en el store no tiene elementos-->
        <h6 v-if="bolsa.length == 0">Bolsa vacía. <br> Por favor agregue un producto</h6>

        <div v-for="(producto,index) in bolsa" v-bind:key="index" class="pl-2 pt-1">
            <b-card no-body class=" cardBolsa p-2" style="width: 300px;">
                <b-row no-gutters class="p-1">
                    <b-col md="3">
                        <b-card-img v-bind:src="producto.producto.imagen" v-bind:alt="`Image ${producto.producto.nombre}`" class="rounded-0 cardBolsaImg"></b-card-img>
                    </b-col>
                    <b-col  md="7">
                        <b-card-body>
                            <b-card-text>
                                <h6>{{producto.producto.nombre}}</h6>
                                <b>${{formatNumber(producto.producto.precio_promo)}}</b>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    <!--Botón borra un producto de la bolsa-->
                    <b-col md="2" class="bolsaBorrar">
                        <b-button variant="danger" size="sm" v-on:click="quitarProductoBolsa(index)"><i class="fa-solid fa-trash-can"></i></b-button>
                    </b-col>
                </b-row>
            </b-card>

        </div>
        <hr>
        <!--Solo muestra elemento cuando array bolsa en el store tiene elementos-->
        <div v-if="bolsa.length !== 0">
            <h5>Sub-Total: ${{formatNumber(subTotal)}}</h5>
            <h5>Descuento: {{descuento}}%</h5>
            <h5>Total: ${{formatNumber(total)}}</h5>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import utils from '@/utils/functions.js'
const {formatNumber} = utils;

export default{
    name: 'Bolsa',
    data(){
       return{
       } 
    },
    methods:{
        formatNumber,
        ...mapActions(['quitarProductoBolsa'])

    },
    computed:{
        ...mapState(['bolsa']),
        ...mapGetters(['subTotal','descuento','total']),

    },
}
</script>
<style scoped>
hr {
  border: 0;
  clear:both;
  display:block;
  width: 90%;               
  background-color:gainsboro;
  height: 2px;
}
.bolsaCompras{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.cardBolsa{
    max-height: 140px;
    justify-content: center;
}
.cardBolsaImg{
    height: 90px;
    width: auto;
    margin-top: 15px;

}
.bolsaBorrar{
    display: flex;
    align-items: center;
}

</style>