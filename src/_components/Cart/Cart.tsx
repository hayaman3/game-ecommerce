// import { useCartStore } from "../../store/useCartStore";

// export default function Cart() {
//   // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
//   const cart = useCartStore((state) => state.cart);

//   // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.
//   const total = cart.reduce(
//     (acc, product) => acc + product.price * (product.quantity as number),
//     0,
//   );

//   return (
//     <section>
//       <ul>
//         {cart.map((product) => (
//           <CartItem key={product.id} product={product} />
//         ))}
//       </ul>
//       <div className="mt-4 flex items-center justify-between">
//         <span className="text-lg font-bold">Total:</span>
//         <span className="text-xl font-bold">${total.toFixed(2)}</span>
//       </div>
//     </section>
//   );
// }
