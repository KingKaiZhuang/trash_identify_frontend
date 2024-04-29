<template>
  <section data-aos="fade-in" class="identify">
    <div class="container">
      <div class="row">
        <div class="identify-item center">
          <img src="http://127.0.0.1:5000/video_feed" alt="">
        </div>
        <div class="identify-content">
          <div class="col-6 center">
            <div class="identify-img">
              <img src="../assets/images/bottle.png" alt="">
            </div>
          </div>

          <div class="col-6">
            <div class="identify-text">
              <div class="identify-list">
                <h3>物品名稱:</h3> <span>{{ itemName }}</span>
              </div>
              <div class="identify-list">
                <h3>掃描紀錄時間:</h3> <span>{{ scanTime }}</span>
              </div>
              <div class="identify-list">
                <h3>容器材質:</h3> <span>{{ material }}</span>
              </div>
              <div class="identify-list">
                <h3>辨識置信度:</h3> <span>{{ confidence }}</span>
              </div>
              <div class="identify-list">
                <h3>分類:</h3> <span>{{ category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section data-aos="fade-in">
    <div class="container">
      <div class="row">
        <div class="toast-message col-12" v-if="showToast" :class="{ 'fade-out': !showToast }">
          <img v-if="success" :src="toast.success" alt="">
          <img v-if="error" :src="toast.error" alt="">
        </div>
      </div>
    </div>
  </section>

  <section data-aos="fade-in" class="number">
    <div class="container">
      <div class="row">

        <div class="title">
          <h2>辨識數量顯示</h2>
        </div>

        <div class="trash-number">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 center">
                <div class="trash">
                  <div class="trash-img">
                    <img src="../assets/images/trash-box/number-1.png" alt="">
                  </div>
                  <div class="trash-text">
                    <h3>一般垃圾</h3>
                    <p>目前容量: 50%</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 center">
                <div class="Recycle">
                  <div class="trash-img">
                    <img src="../assets/images/trash-box/number-2.png" alt="">
                  </div>
                  <div class="trash-text">
                    <h3>回收垃圾</h3>
                    <p>目前容量: 50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section>
    <Trashchart />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import successImage from '../assets/images/toast/success.png';
import errorImage from '../assets/images/toast/error.png';
import Trashchart from '../components/TrashChart.vue';

const data = ref({
  name: '---',
  timestamp: '---',
  material: '---',
  confidence: '---',
  category: '---',
  success: false,
  error: false,
});

const toast = ref({
  success: successImage,
  error: errorImage
});

const itemName = ref('');
const scanTime = ref('');
const material = ref('');
const confidence = ref('');
const category = ref('');
const success = ref(false);
const error = ref(false);
const showToast = ref(false);

onMounted(() => {
  itemName.value = data.value.name || '---';
  scanTime.value = data.value.timestamp || '---';
  material.value = data.value.material || '---';
  confidence.value = data.value.confidence ? `${data.value.confidence * 100}%` : '---';
  category.value = data.value.category || '---';
  success.value = data.value.success;
  error.value = data.value.error;
  showToast.value = success.value || error.value;

  if (success.value || error.value) {
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  }
});
</script>

<style scoped>
@import '../assets/scss/identify.scss';
</style>