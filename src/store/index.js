import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeMejores:[],
    homeTipos:[],
    productos:[],
    promocion:[],
    accesorios:[],
    bolsa:[],
    compra:[]
  },
  getters: {
    subTotal(state){
      let subtotal = 0;
      for(let producto of state.bolsa){
        subtotal += producto.producto.precio_promo;
      }
      return subtotal;
    },
    descuento(state){
      let subtotal = 0;
      let desc = 0
      for(let producto of state.bolsa){
        subtotal += producto.producto.precio_promo;
      }
      if(subtotal < 100000){
        desc = 5;
      }
      else{
        desc = 11;
      }
      return desc;

    },
    total(state){
      let subtotal = 0;
      let total = 0
      for(let producto of state.bolsa){
        subtotal += producto.producto.precio_promo;
      }
      if(subtotal < 100000){
        total = Math.floor(subtotal * 0.95);
      }
      else{
        total = Math.floor(subtotal * 0.89);
      }
      return total;

    },


  },
  mutations: {
    changeHomeMejores(state,homeJson){
      state.homeMejores.push(homeJson)
    },
    changeHomeTipos(state,homeJson){
      state.homeTipos.push(homeJson)
    },
    changeProductos(state,productosJson){
      state.productos.push(productosJson)
    },
    changePromocion(state,promocionJson){
      state.promocion.push(promocionJson)
    },
    changeAccesorios(state,accesoriosJson){
      state.accesorios.push(accesoriosJson)
    },
    changeBolsa(state,producto){
      state.bolsa.push(producto);
    },
    deleteBolsaFull(state){
      state.bolsa = []
    },
    deleteBolsa(state,producto){
      state.bolsa.splice(producto,1)
    },
    changeCompra(state,formCompra){
      state.compra.push(formCompra)
    }
  },
  actions: {
    //Action hace fetch para elementos de vista Home
    async getHome({commit}){
      try{
        const res = await fetch('home.json');
        const json = await res.json();
        // console.log(json);
        for(let vino of json.mejoresvinos){
          commit('changeHomeMejores',vino)
        }
        for(let vino of json.tiposvino){
          commit('changeHomeTipos',vino);
        }
      }
      catch(err){
        console.log(err);
      }
    },

    //Action hace fetch para elementos de vista Vinos
    async getProductos({commit}){
      try{
        const res = await fetch('productos.json');
        const json = await res.json();
        // console.log(json);
        for(let producto of json.productos){
          commit('changeProductos',producto);
        }
      }
      catch(err){
        console.log(err);
      }
    },

    //Action hace fetch para elementos de vista Promocion
    async getPromocion({commit}){
      try{
        const res = await fetch('promocion.json');
        const json = await res.json();
        // console.log(json);
        for(let promocion of json.productos){
          commit('changePromocion',promocion);
        }
      }
      catch(err){
        console.log(err);
      }
    },

    //Action hace fetch para elementos de vista Accesorios
    async getAccesorios({commit}){
      try{
        const res = await fetch('accesorios.json');
        const json = await res.json();
        // console.log(json);
        for(let accesorio of json.productos){
          commit('changeAccesorios',accesorio);
        }
      }
      catch(err){
        console.log(err);
      }
    },
    //Action llama mutation para ingresar productos de vista Vinos a state.bolsa
    addBolsa({commit,state},id){
      let cant = 0;
      for(let producto of state.productos){
        if(producto.id === id){
          cant++;
          let productoBolsa = {'producto':producto,'cantidad':cant}
          commit('changeBolsa',productoBolsa);
        }
      }
    },

    //Action llama mutation para ingresar productos de vista Promocion a state.bolsa
    addBolsaPromo({commit,state},id){
      let cant = 0;
      for(let promo of state.promocion){
        if(promo.id === id){
          cant++;
          let productoBolsa = {'producto':promo,'cantidad':cant}
          commit('changeBolsa',productoBolsa);
        }
      }
    },

    //Action llama mutation para ingresar productos de vista Accesorios a state.bolsa
    addBolsaAccesorios({commit,state},id){
      let cant = 0;
      for(let accesorio of state.accesorios){
        if(accesorio.id === id){
          cant++;
          let productoBolsa = {'producto':accesorio,'cantidad':cant}
          commit('changeBolsa',productoBolsa)
        }
      }
    },

    //Action llama mutation para ingresar datos de formulario Checkout a state.compra
    addCompra({commit},formCompra){
      commit('changeCompra',formCompra);
    },

    //Action llama mutation para borrar todos los datos en state.bolsa
    cleanBolsa({commit}){
      commit('deleteBolsaFull');
    },

    //Action llama mutation para borrar 1 dato en state.bolsa
    quitarProductoBolsa({commit},producto){
      commit('deleteBolsa',producto)
    }
  },
  modules: {
  }
})
