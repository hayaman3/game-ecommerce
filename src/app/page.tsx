"use client";
import Link from "next/link";
import CartDrawer from "./CartDrawer/CartDrawer";
import Home from "./Home/page";

export default function Main() {
  function onClose() {
    console.log("Modal has closed");
  }

  function onOk() {
    console.log("Ok was clicked");
  }

  return (
    <>
      <CartDrawer title="Example Modal" onClose={onClose} onOk={onOk}>
        <Link href="/products?showDialog=y" className="text-3xl underline">
          Go to Products with Modal
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla
          voluptatibus vel, placeat explicabo exercitationem id officia laborum
          doloremque blanditiis earum accusamus.
        </p>
      </CartDrawer>
      <Home />
    </>
  );
}
