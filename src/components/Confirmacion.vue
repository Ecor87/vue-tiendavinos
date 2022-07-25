<!--Componente a mostrar en vista Checkout al completar la compra-->
<template>
    <div>
        <h1>Confirmación</h1>
        <p>¡La orden Nº{{orden}} ha sido confirmada y ya la estamos preparando!</p>
        <router-link to="/"><b-button variant="dark">Volver a Home</b-button></router-link>
    </div>
</template>
<script>
export default{
    name: 'Confirmacion',
    props:{
        orden: Number
    }
}
</script>
<style scoped>
</style>