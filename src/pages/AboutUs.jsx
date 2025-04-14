import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutUs() {
    return (
        <>
            <header className=" text-black text-center">
                <h1 className='mt-3'>About Us</h1>
                <p className="lead">Discover our story, mission, and values</p>
            </header>

            <section className="container my-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img 
                            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-jewellery-about-img-01.png?v=1663305462" 
                            className="img-fluid rounded" 
                            alt="About Us Image" 
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Our Story</h2>
                        <p>We started with a passion for excellence and a vision to bring the best to our customers. Our journey has been marked by innovation, dedication, and a commitment to quality.</p>
                        <p>Over the years, we have grown into a trusted name, known for delivering exceptional products and services. Join us as we continue to make a positive impact in the industry.</p>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Mission & Values</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="bi bi-heart fs-1 text-primary"></i>
                            <h3>Passion</h3>
                            <p>We love what we do and strive to bring passion into everything we create.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-people fs-1 text-primary"></i>
                            <h3>Integrity</h3>
                            <p>We value honesty and transparency in all our dealings.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="bi bi-globe fs-1 text-primary"></i>
                            <h3>Innovation</h3>
                            <p>We embrace change and seek innovative solutions to challenges.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </footer>
        </>
    );
}
