<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = ref({
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: '一般垃圾',
      data: [60,20,80], // 1月的數據
      backgroundColor: '#ff6384', // 1月的顏色
    },
    {
      label: '回收垃圾',
      data: [20,50,90], // 2月的數據
      backgroundColor: '#36a2eb', // 2月的顏色
    },
    {
      label: '金屬垃圾',
      data: [12,20,6], // 3月的數據
      backgroundColor: '#cc65fe', // 3月的顏色
    }
  ],
});


const chartOptions = ref({ responsive: true });

const dataVisibility = reactive([true, true, true]);

function toggleData(index) {
  dataVisibility[index] = !dataVisibility[index];
}

watchEffect(() => {
  chartData.value.datasets.forEach((dataset, index) => {
    dataset.hidden = !dataVisibility[index];
  });
  // 這裡需要一種方法來觸發圖表更新，可能是通過重新渲染或直接操作 Chart.js 實例
});
</script>
