<!--Componente que genera navbar-->
<template>
    <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand><img src="wine_glass64B.png" alt="" id="navbarImg"><router-link to="/" class="navbarLink">Vinos Mi Chile</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse class="navLinks" id="nav-collapse" is-nav>
        <b-navbar-nav >
            <b-nav-item><router-link to="/vinos" class="navbarLink">Vinos</router-link></b-nav-item>
            <b-nav-item><router-link to="/promocion" class="navbarLink">Vinos en Promoción</router-link></b-nav-item>
            <b-nav-item><router-link to="/accesorios" class="navbarLink">Accesorios</router-link></b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </nav>
</template>
<script>
export default{
    name: 'Navbar'
}
</script>
<style scoped>
.navbarLink{
    /* text-decoration: none; */
    color: white;
}
.navLinks{
    justify-content: flex-end;
}
#navbarImg{
    height: 36px;
    margin: 0 15px 0 0;
}
</style>