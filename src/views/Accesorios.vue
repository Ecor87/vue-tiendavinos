<template>
    <div class="row">
        <div class="col-3">
            <Bolsa/>
            <!--Solo muestra botones si hay algo en bolsa del store-->
            <router-link to="/checkout" v-if="bolsa.length > 0" ><b-button variant="dark" class="bolsaBtn">Pagar</b-button></router-link>
            <b-button v-if="bolsa.length > 0" v-on:click="cleanBolsa" variant="outline-dark" class="bolsaBtn">Limpiar</b-button>
        </div>
        <div class="col-9">
            <AccesoriosCards/>
        </div>
    </div>
</template>
<script>
import AccesoriosCards from '@/components/AccesoriosCards.vue'
import Bolsa from '@/components/Bolsa.vue'
import { mapActions,mapState } from 'vuex'
export default{
    name: 'Accesorios',
    data(){
        return{
        }
    },
    components:{
        Bolsa,
        AccesoriosCards
    },
    methods:{
        ...mapActions(['cleanBolsa'])
    },
    computed:{
        ...mapState(['accesorios','bolsa'])
    },
    created(){
    },
    mounted(){
    }
}
</script>
<style scoped>
.bolsaBtn{
 margin-left: 10px;
}
</style>