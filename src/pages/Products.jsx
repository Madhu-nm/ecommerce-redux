import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import './product.css';
import { toast } from "react-toastify";


const product=[{
    id: 1, name: "Syndria  earrings", price: 19050, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-03.jpg?v=1671114482", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-03-a.jpg?v=1671114483"
}, {
    id: 2, name: "Adney hoop earrings", price: 20000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-01.jpg?v=1671113985", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-01-a.jpg?v=1671113987"
}, {
    id: 3, name: "Amphine stud earrings", price: 25000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-06.jpg?v=1671114150", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-06-a.jpg?v=1671114149"
}, {
    id: 4, name: "The ruon earrings", price: 23000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-for-her-product-02-a.jpg?v=1663650104", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-01-a.jpg?v=1671113987"
}, {
    id: 5, name: "Royal sherbi ring", price: 240000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-05.jpg?v=1671114554", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-05-a.jpg?v=1671114555"
}, {
    id: 6, name: "Classic Ring", price: 25000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-02.jpg?v=1671113309", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-02-a.jpg?v=1671113309"
}, {
    id: 7, name: "Trendy Ring", price: 18000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-10.jpg?v=1671113908", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-10-a.jpg?v=1671113908"
}, {
    id: 8, name: "Magdalena band", price: 19000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-16.jpg?v=1671115087", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-16-a.jpg?v=1671115087"
}, {
    id: 9, name: "Trendy bangle", price: 28800, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-07.jpg?v=1671114422", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-07-a.jpg?v=1671114423"
}, {
    id: 10, name: "Bespoke twister bangle", price: 28000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-12.jpg?v=1671182923", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-12-a.jpg?v=1671182923"
}, {
    id: 11, name: "Stylish pendant", price: 250000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-09.jpg?v=1671114253", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-15-a.jpg?v=1671115221"
}, {
    id: 12, name: "The migan pendant", price: 30000, img: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-15.jpg?v=1671115221", img2: "https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-15-a.jpg?v=1671115221"
}]

export default function Products() {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };


  return (
    <>
          <h1 className="heading">Collections</h1>
      <div className="Shop">
        {product.map((product) => (
          <div key={product.id} className="product p-1 mbase" style={{ width: "18rem" }}>
            <div className="base">
              <img src={product.img} width={100} />
              <div className="overlay">
                <img src={product.img2} alt="" />
              </div>
            </div>
            <h2>{product.name} - Rs.{product.price}</h2>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

    </>
  );
}
