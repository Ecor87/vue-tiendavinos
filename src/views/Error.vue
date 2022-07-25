<template>
<div>
    <div class="error">
        <h1 id="errorText">La página que busca no existe</h1>
        <router-link to="/"><b-button variant="dark">Volver a Home</b-button></router-link>
    </div>
</div>
</template>
<script>
export default{
    name: 'Error',
    data(){
        return{
        }
    },
    components:{
    },
    methods:{
    },
    computed:{
    },
    created(){
    },
    mounted(){
    }
}
</script>
<style scoped>
.error{
 border: 1px solid #343a40;
 border-radius: 10px;
 margin-left: 19%;
 width: 60%;
 height: 250px;
 padding-top: 60px
}
#errorText{
    margin-bottom: 60px;
}
</style>