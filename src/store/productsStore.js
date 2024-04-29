import { defineStore } from 'pinia'

export const productsStore = defineStore({
  // data, methods, computed
  // state, actions, getters
  id: 'products',
  state: () => ({
    products: [
      {
        id: 1,
        title: "漂亮的風景",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct01.png?alt=media&token=78b6bbbd-82d9-4ee8-8452-04eb621f89ab",
        price: 900,
      },
      {
        id: 2,
        title: "寧靜的湖泊",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct02.png?alt=media&token=eabd6a92-822b-4a1c-8740-b2d83f8f47ef",
        price: 1200,
      },
      {
        id: 3,
        title: "壯觀的山脈",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct03.png?alt=media&token=09c51a34-9eda-47a5-b1ae-f84ed64a5d06",
        price: 1500,
      },
      {
        id: 4,
        title: "秋天的林間",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct04.png?alt=media&token=2857396c-1b3f-417d-8d41-5509d6199318",
        price: 1100,
      },
      {
        id: 5,
        title: "繁星點點的夜空",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct05.png?alt=media&token=df6ac239-0b6a-4313-a663-0cc36fc326fa",
        price: 1300,
      },
      {
        id: 6,
        title: "秋天的林間",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct06.png?alt=media&token=81a27ec2-3c0d-47b2-b11a-4571fe44f84c",
        price: 1100,
      },
      {
        id: 7,
        title: "繁星點點的夜空",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct07.png?alt=media&token=87761a4a-cfcc-4179-b7b7-dfe9266eee39",
        price: 1300,
      },
      {
        id: 8,
        title: "繁星點點的夜空",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/trash-identify.appspot.com/o/cart%2Fproduct08.png?alt=media&token=c4b28812-bcf1-4819-8d29-16f7860a0a02",
        price: 1300,
      },
    ],
  }),

  getters: {
    sortProducts: ({ products }) => { 
      return products.sort((a,b) => a.price - b.price);
    }
  }
});
