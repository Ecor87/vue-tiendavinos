<template>
    <div>
        <!--Formulario-->
        <div v-if="!confirmacion" class="container formulario">
            <h1>Checkout</h1>
            <div class="row">
                <div class="col-8">
                    <b-form @submit="onSubmit" v-if="show">
                    <h3>Datos del Comprador</h3>

                    <!--Nombre-->
                    <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                        <b-form-input
                        id="input-1"
                        v-model="form.nombre"
                        placeholder="Ingrese su nombre"
                        required
                        ></b-form-input>
                    </b-form-group>
    
                    <!--Email-->
                    <b-form-group
                        id="input-group-2"
                        label="Email"
                        label-for="input-2"
                    >
                        <b-form-input
                        id="input-2"
                        v-model="form.email"
                        type="email"
                        placeholder="Ingrese email"
                        required
                        ></b-form-input>
                    </b-form-group>
    
                    <!--Email 2-->
                    <b-form-group
                        id="input-group-3"
                        label="Repetir Email"
                        label-for="input-3"
                    >
                        <b-form-input
                        id="input-3"
                        v-model="form.email2"
                        type="email"
                        placeholder="Ingrese email nuevamente"
                        required
                        ></b-form-input>
                    </b-form-group>
    
                    <!--Telefono-->
                    <b-form-group
                        id="input-group-4"
                        label="Teléfono"
                        label-for="input-4"
                    >
                        <b-form-input
                        id="input-4"
                        v-model="form.telefono"
                        type="text"
                        placeholder="Ingrese teléfono"
                        required
                        ></b-form-input>
                    </b-form-group>
        
                    <hr>
    
                    <h3>Datos del Despacho</h3>

                    <!--Direccion-->
                    <b-form-group
                        id="input-group-5"
                        label="Dirección"
                        label-for="input-5"
                    >
                        <b-form-input
                        id="input-5"
                        v-model="form.direccion"
                        type="text"
                        placeholder="Ingrese dirección"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <!--Comuna-->
                    <b-form-group
                        id="input-group-6"
                        label="Comuna"
                        label-for="input-6"
                    >
                        <b-form-input
                        id="input-6"
                        v-model="form.comuna"
                        type="text"
                        placeholder="Ingrese Comuna"
                        required
                        ></b-form-input>
                    </b-form-group>
    
                    <hr>
                    <h3>Forma de pago</h3>

                    <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }">
                        <b-form-group
                        id="radio-7"
                        :aria-describedby="ariaDescribedby"
                        >
                        <b-form-radio v-model="form.selected" value="trasnf">Transferencia Bancaria</b-form-radio>
                        <b-form-radio v-model="form.selected" value="servipag">Servipag</b-form-radio>
                        <b-form-radio v-model="form.selected" value="webpay">Webpay</b-form-radio>
                        <b-form-radio v-model="form.selected" value="entrega">Contra Entrega</b-form-radio>
                        </b-form-group>
                    </b-form-group>
        
                    <b-button type="submit" variant="dark">Continuar</b-button>
                    
                    <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                    </b-form>
                    <!-- <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                    </b-card> -->
                </div>
                <div class="col-4">
                    <Bolsa/>
                </div>
            </div>
        </div>
        <!--Fin Formulario-->

        <!--Confirmacion-->
        <div v-if="confirmacion">
            <Confirmacion v-bind:orden="numeroOrden"/>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Bolsa from '@/components/Bolsa.vue'
import Confirmacion from '@/components/Confirmacion.vue'
export default{
    name: 'Checkout',
    components:{
        Bolsa,
        Confirmacion
    },
    data() {
        return {
        form: {
            nombre: '',
            email: '',
            email2: '',
            telefono: '',
            direccion: '',
            comuna: '',
            selected: ''
        },
        show: true,
        confirmacion: false,
        numeroOrden: null
        }
    },
    methods:{
        ...mapActions(['addCompra','cleanBolsa']),
        onSubmit(event) {
            event.preventDefault();
            console.log(this.total);
            let formCompra = {
                'nombre':this.form.nombre,
                'email':this.form.email,
                'telfono':this.form.telefono,
                'direccion':this.form.direccion,
                'comuna':this.form.comuna,
                'pago':this.form.selected,
                'subtotal':this.subTotal,
                'descuento':this.descuento,
                'total':this.total,
            };
            //Verifica que ambas direcciones de correo sean iguales
            if(this.form.email == this.form.email2){
                //Genera numero al azar para simmular orden de compra
                this.numeroOrden = Math.floor(Math.random()*1000000);
                this.addCompra(formCompra);
                //cambia confirmacion a true para mostrar componente confirmacion y ocultar el formulario
                this.confirmacion = true;
                //Limpia bolsa al enviar checkout para preparar para otra compra
                this.cleanBolsa();
            }
            else{
                alert('Por favor verifique que ambas direcciones de correo sean iguales')
            }
        },
        // onReset(event) {
        //     event.preventDefault()
        //     // Reset our form values
        //     this.form.email = ''
        //     this.form.name = ''
        //     this.form.food = null
        //     this.form.checked = []
        //     // Trick to reset/clear native browser form validation state
        //     this.show = false
        //     this.$nextTick(() => {
        //         this.show = true
        //     })
        // }
    },
    computed:{
        ...mapGetters(['subTotal','descuento','total'])
    },
    created(){
    },
}
</script>
<style scoped>
h1{
    margin-bottom: 50px
}
.formulario{
    margin-bottom: 40px;
}
</style>