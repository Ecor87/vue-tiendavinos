<!--Componente genera cards a usar en vista Home-->
<template>
    <div>
        <b-card-group columns>
            <b-card
                v-for="(vino,index) in homeTipos"
                v-bind:key="index"
                v-bind:title="vino.nombre"
                v-bind:img-src="vino.imagen"
                text-variant="white"
                img-alt="Image"
                img-bottom
                img-height="500"
                img-width=""
                tag="article"
                style="max-width: 20rem;"
                class="mb-1 cardTipos"
            >
                <b-button v-b-toggle="`cardCollapse${index}`" variant="light"><i class="fa-solid fa-wine-glass"></i></b-button>
                <b-collapse  v-bind:id="`cardCollapse${index}`">
                    <b-card-text>
                        <hr>
                        <p>{{vino.texto}}</p>
                    </b-card-text>
                </b-collapse>
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
        </b-card-group>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default{
    name: 'Tipos',
    data(){
        return{
            showButton0: true,
            showButton1: true,
            showButton2: true,
        }
    },
    methods:{
        cambiarBoton(index){
            console.log(index);
            if(index === 0){
                this.showButton0 = false;
            }
            else if(index === 1){
                this.showButton1 = false;
            }
            else if(index === 2){
                this.showButton2 = false;
            }
        }
    },
    computed:{
        ...mapState(['homeTipos'])
    }
}
</script>
<style scoped>
hr{
    background-color: white;
}
.cardTipos{
    background-color: #343a40;
}
</style>