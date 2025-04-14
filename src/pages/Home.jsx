import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <img 
                            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-jewellery-slider-01.jpg?v=1679407411&width=1500" 
                            className="d-block w-100" 
                            alt="..." 
                        />
                        <div className="carousel-caption text-start">
                            <h1 className="text-dark">Fresh Collection</h1>
                            <Link to="/Products"><button className="btn btn-dark mt-3">Explore Collections</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img 
                            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-jewellery-slider-02.jpg?v=1678795739&width=1500" 
                            className="d-block w-100" 
                            alt="..." 
                        />
                        <div className="carousel-caption text-start ">
                            <h1 className="text-dark">Fresh Collection</h1>
                            <Link to="/Products"><button className="btn btn-dark mt-3">Explore Collections</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img 
                            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-jewellery-slider-03.jpg?v=1678795738&width=1500" 
                            className="d-block w-100" 
                            alt="..." 
                        />
                        <div className="carousel-caption text-start">
                            <h1 className="text-dark">Fresh Collection</h1>
                            <Link to="/Products"><button className="btn btn-dark mt-3">Explore Collections</button></Link>
                        </div>
                    </div>
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#carouselExampleAutoplaying" 
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#carouselExampleAutoplaying" 
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

           
      <section className="promo-banner text-white text-center pt-4" style={{ backgroundColor: "black" }}>
        <div className="container">
          <h3>Big Sale - Up to 50% Off!</h3>
          <p>Shop now and save big on your favorite items!</p>
          <Link to="/Products">
            <button className="btn btn-light mt-2">Shop Now</button>
          </Link>
        </div>
      </section>

   
      <section className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <div className="category-card">
              <Link to="/Products">
                <img 
                  src="https://hongotheme.myshopify.com/cdn/shop/files/demo-jewellery-img-05.jpg?v=1661339043" 
                  alt="Jewelry Collection"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/Products">
                <img 
                  src="https://hongotheme.myshopify.com/cdn/shop/products/jewellery-for-her-product-02-a.jpg?v=1663650104" 
                  alt="Jewelry for Her"
                  className="img-fluid"
                />
                <button className="btn btn-dark mt-2 w-100 ms-0">SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/Products">
                <img 
                  src="https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-02.jpg?v=1671113309" 
                  alt="Jewelry Collection"
                  className="img-fluid"
                />
                <button className="btn btn-dark mt-2 ms-0 w-100">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

 
      <section className="container my-1">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4 bg-light p-3 border border-dark me-2">
            <div className="testimonial">
              <p>"Great quality products! Will definitely shop here again."</p>
              <small>- John Doe</small>
            </div>
          </div>
          <div className="col-md-4 bg-light p-3 border border-dark me-2">
            <div className="testimonial">
              <p>"Amazing customer service and fast delivery. Highly recommend!"</p>
              <small>- Jane Smith</small>
            </div>
          </div>
          <div className="col-md-3 bg-light p-3 border border-dark me-2">
            <div className="testimonial">
              <p>"The best shopping experience I’ve had in a long time!"</p>
              <small>- Mark Johnson</small>
            </div>
          </div>
        </div>
      </section>

  
      <section className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/Products">
                <img 
                  src="https://hongotheme.myshopify.com/cdn/shop/products/jewellery-for-her-product-01.jpg?v=1663649676&width=720" 
                  alt="Jewelry for Her"
                  className="img-fluid"
                />
                 <button className="btn btn-dark mt-2 w-100 ms-0">SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/Products">
                <img 
                  src="https://hongotheme.myshopify.com/cdn/shop/products/jewellery-him-product-02.jpg?v=1663650909" 
                  alt="Jewelry for Him"
                  className="img-fluid"
                />
                  <button className="btn btn-dark mt-2 w-100 ms-0">SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="category-card">
              <Link to="/Products">
                <img 
                  src="https://hongotheme.myshopify.com/cdn/shop/files/demo-jewellery-banner-02.jpg?v=1661339832" 
                  alt="Jewelry Collection"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

  
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Store. All rights reserved.</p>
   
      </footer>
        </>
    );
}
