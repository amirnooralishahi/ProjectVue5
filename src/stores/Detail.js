import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useDetailStore = defineStore('detailStore', () => {
  let price = ref([])
  let title = ref([])
  async function getname() {
    axios
      .get('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then((res) => {
        for (var i = 0; i < 20; i++) {
          title.value.push(res.data.data[i].attributes.name)
        }
      })
  }
 async function getprice() {
    axios
      .get('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then((res) => {
        for (var i = 0; i < 20; i++) {
          price.value.push(res.data.data[i].attributes.price)
          console.log(price);
          
        }
      })
  }
  console.log(price);
  
  return {
    price,
    title,
    getprice,
    getname, 
  }
})
