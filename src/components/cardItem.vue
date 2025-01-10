<template>
  <div class="Card d-flex justify-content-center w-100">
    <div class="Card-contain d-flex flex-column justify-content-center">
      <div class="filter-item d-flex justify-content-end w-100 border">
        <p>ارزان ترین</p>
        <p>گران ترین</p>

        <p>پرفروش ترین</p>
        <p>جدید ترین</p>

        <p>پربازدید ترین</p>
      </div>
      <div class="cardItems d-flex justify-content-center mt-3 row">
        <div
          class="cardItem border rounded col-3"
          v-for="(item, index) in arrimage"
          :key="index"
        >
          <div class="image">
            <img
              alt=""
              :src="require(`@/assets/image/${item}`)"
              class="img img-fluid"
            />
          </div>
          <div class="sticker mt-2 d-flex justify-content-end">
            <div
              class="text d-flex flex-column gap-1 name w-100 align-items-end"
            >
              <h3 class="fs-5 overflow-hidden text-start"></h3>
              <p class="">قابل چاپ با اندازه دلخواه</p>
            </div>
          </div>
          <div class="price d-flex gap-2 p-3">
            <span class="fw-bold">100,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const arrimage = ref([
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "4.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "4.jpg",
  "1.jpg",
  "2.jpg",
]); // فقط نام فایل‌ها
// const arrimage2 = ref(["5.jpg", "6.jpg", "7.jpg", "1.jpg", "2.jpg", "3.jpg"]);
// const arrimage3 = ref(["8.jpg", "9.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]);

const options = { method: "GET" };

fetch("https://demo.spreecommerce.org/api/v2/storefront/products", options)
  .then((response) => response.json())
  .then((response) => {
    const nameElements = document.querySelectorAll(".name h3");
    const priceElements = document.querySelectorAll(".price span");

    nameElements.forEach((element, index) => {
      if (index < response.data.length) {
        let text = response.data[index].attributes.name;
        element.innerHTML = text;
        console.log(response.data[index].attributes);
      }
    });
    priceElements.forEach((element, index) => {
      if (index < response.data.length) {
        let price = response.data[index].attributes.display_price;
        element.innerHTML = price;
      }
    });
  })
  .catch((err) => console.error(err));
</script>

<style>
</style>
