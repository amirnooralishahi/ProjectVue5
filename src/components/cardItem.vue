<template>
  <div class="Card d-flex flex-column justify-content-center w-100">
    <div class="filter-item d-flex w-100 mt-3">
      <div class="d-flex item w-100 justify-content-end">
        <p>ارزان ترین</p>
        <p>گران ترین</p>

        <p>پرفروش ترین</p>
        <p>جدید ترین</p>
        <div class="line d-flex flex-column gap-2">
          <span class="full">پربازدید ترین</span>
          <span class="line-down"></span>
        </div>
      </div>
    </div>
    <div class="Card-contain d-flex flex-column justify-content-center">
      <div class="cardItems d-flex justify-content-end row">
        <div
          class="cardItem border rounded-4 col-3"
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
              <div class="d-flex justify-content-between w-100 border">
                <i class="bi bi-heart heart"></i>
                <h3 class="fs-5 overflow-hidden text-start">
                  {{ usebook.title[index] }}
                </h3>
              </div>

              <p class="">قابل چاپ با اندازه دلخواه</p>
            </div>
          </div>
          <div class="price d-flex gap-2 p-3">
            <span class="fw-bold">{{ usebook.price[index] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useDetailStore } from "../stores/Detail.js";
import { onMounted, ref } from "vue";

const usebook = useDetailStore();

onMounted(() => {
  usebook.getname();
  usebook.getprice();

});
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
]);
</script>

<style>
</style>
