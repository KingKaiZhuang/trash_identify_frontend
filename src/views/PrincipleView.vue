<template>
  <section data-aos="fade-in" class="banner">
    <img src="../assets/images/principle/banner.png" alt="" />
  </section>

  <div data-aos="fade-in" class="principle-title">
    <h2>AI & WEB 原理</h2>
  </div>

  <section data-aos="fade-in" class="principle-article">
    <div class="principle-list" v-for="item in items" :key="item.id">
      <div class="list-img">
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="list-content">
        <p>製作人負責 - {{ item.name }} - {{ item.id }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="list-footer">
        <div class="list-link">
          <a :href="item.detailLink">詳細內容</a>
        </div>
        <div class="list-number">
          <span>{{ item.number }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/scss/principle.scss";
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "5b0g0042",
          name: "許皓詠",
          title: "PYTHON YOLO 辨識",
          description:
            "安裝攝影機鏡頭，用於拍攝垃圾並識別垃圾類型。運用深度學習，例如 YOLO，來辨識垃圾，區分一般垃圾和回收資源。",
          imageUrl: require("@/assets/images/principle/python-yolo.png"),
          detailLink: "#",
          number: "01",
        },
        {
          id: "5b0g0024",
          name: "莊鈞凱",
          title: "PHP LARAVEL 網頁",
          description:
            "即時視頻預覽：展示一個區域用於即時視頻流的預覽，讓用戶了解即時辨識的效果。",
          imageUrl: require("@/assets/images/principle/php-laravel.png"), // 假設的圖片路徑
          detailLink: "#",
          number: "02",
        },
        {
          id: "5b0g0041",
          name: "趙偉聖",
          title: "ARDUINO 硬體設備",
          description:
            "利用了辨識結合網頁以後，最後搭配硬體來實現自動化分類的結果。了辨識結合網頁以後，最後搭配硬體來實現自動化分類的結果。",
          imageUrl: require("@/assets/images/principle/arduino.png"), // 假設的圖片路徑
          detailLink: "#",
          number: "03",
        },
      ],
    };
  },
};
</script>
