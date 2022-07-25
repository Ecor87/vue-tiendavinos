<template>
  <div>
    <header class="container">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="30000"
          controls
          indicators
          fade
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide 
            v-for="(vino,index) in homeMejores"
            v-bind:key="index"
            v-bind:caption="vino.titulo"
            >
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                v-bind:src="vino.imagen"
                v-bind:alt="`Imagen ${vino.titulo}`"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
    
        <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p>

    </header>
    <section>
        <Tipos/>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Tipos from '@/components/Tipos.vue';

export default{
    name: 'Home',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    components:{
        Tipos
    },
    methods:{
        onSlideStart(slide) {
            this.sliding = true
            },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
    computed:{
        ...mapState(['homeMejores','homeTipos'])
    },
    created(){
    }
}
</script>
<style scoped>

</style>