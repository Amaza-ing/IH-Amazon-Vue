import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([
    {
      id: 1,
      name: "ordenador",
      price: 1000,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png",
    },
    {
      id: 2,
      name: "teclado",
      price: 50,
      img: "https://m.media-amazon.com/images/I/614GO7cAxaL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "ratón",
      price: 20,
      img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF894,1000_QL80_DpWeblab_.jpg",
    },
  ]);

  function deleteProduct(id) {
    products.value = products.value.filter((product) => product.id != id);
  }

  function findProduct(id) {
    return products.value.find((product) => product.id == id);
  }

  return {
    products,
    deleteProduct,
    findProduct
  }
});
