import { createSlice, current } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "Product Slice",
  initialState: {
    Total: 0,
    cart: [],
    Products: [
      {
        img: "https://www.pakmobizone.pk/wp-content/uploads/2022/04/Sony-WI-C200-Wireless-In-ear-Headphones-With-Microphone-Black-1.png",
        name: "Sony-WI-C200",
        price: "49.99",
        id: 1,
        subPictures: [
          "https://www.pakmobizone.pk/wp-content/uploads/2022/04/Sony-WI-C200-Wireless-In-ear-Headphones-With-Microphone-Black-1.png",
          "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dwee3a26a6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png",
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
          "https://www.bowerswilkins.com/-/media/images/bowerswilkins/px7/px7-carbon-rear3.png",
        ],
      },
      {
        img: "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dwee3a26a6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png",
        name: "Marshall-headphones",
        price: "56.75",
        id: 2,
        subPictures: [
          "https://www.pakmobizone.pk/wp-content/uploads/2022/04/Sony-WI-C200-Wireless-In-ear-Headphones-With-Microphone-Black-1.png",
          "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dwee3a26a6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png",
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
          "https://www.bowerswilkins.com/-/media/images/bowerswilkins/px7/px7-carbon-rear3.png",
        ],
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
        name: "Carbon-rear3",
        price: "103.45",
        id: 3,
        subPictures: [
          "https://www.pakmobizone.pk/wp-content/uploads/2022/04/Sony-WI-C200-Wireless-In-ear-Headphones-With-Microphone-Black-1.png",
          "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dwee3a26a6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png",
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
          "https://www.bowerswilkins.com/-/media/images/bowerswilkins/px7/px7-carbon-rear3.png",
        ],
      },
      {
        img: "https://www.bowerswilkins.com/-/media/images/bowerswilkins/px7/px7-carbon-rear3.png",
        name: "Bower-swilkins",
        price: "42.78",
        id: 4,
        subPictures: [
          "https://www.pakmobizone.pk/wp-content/uploads/2022/04/Sony-WI-C200-Wireless-In-ear-Headphones-With-Microphone-Black-1.png",
          "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dwee3a26a6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png",
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
          "https://www.bowerswilkins.com/-/media/images/bowerswilkins/px7/px7-carbon-rear3.png",
        ],
      },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      const ProductData = state.Products.find(
        (prod) => prod.id === action.payload.id
      );
      console.log(current(ProductData));
      const Product = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!Product) {
        state.cart.push({ quantity: 1, ...ProductData });
      } else if (Product) {
        const prodIndex = state.cart.findIndex(
          (prod) => prod.id === action.payload.id
        );
        state.cart[prodIndex].quantity = state.cart[prodIndex].quantity + 1;
      }

      state.Total = parseInt(state.Total) + parseInt(ProductData.price);
    },
    removeFromCart: (state, action) => {
      const Product = state.cart?.find((prod) => prod.id === action.payload.id);
      
      if (Product.quantity === 1) {
        state.cart = state.cart?.filter((item) => item.id !== action.payload.id);
      } else if (Product) {
        const prodIndex = state.cart.findIndex(
          (prod) => prod.id === action.payload.id
        );
        state.cart[prodIndex].quantity = state.cart[prodIndex].quantity - 1;
      }
      state.Total = state.Total - parseInt(Product.price);
    },
    emptyCart:(state,action)=>{
        state.Total = 0;
        state.cart =[];
    }
  },
});

export const actions = {
  addToCart: ProductsSlice.actions.addToCart,
  removeFromCart: ProductsSlice.actions.removeFromCart,
  emptyCart: ProductsSlice.actions.emptyCart
};
export default ProductsSlice.reducer;
