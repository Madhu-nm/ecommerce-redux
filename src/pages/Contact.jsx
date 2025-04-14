import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <>
            <header className=" text-dark text-center py-2">
                <h1>Contact Us</h1>
                <p className="lead">We would love to hear from you!</p>
            </header>

            <section className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Get In Touch</h2>
                        <p>If you have any questions or need further assistance, feel free to reach out to us. Our team is here to help you.</p>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-alt-fill text-success"></i> Address:Chennai</li>
                            <li><i className="bi bi-telephone-fill text-success"></i> Phone:123456-7890</li>
                            <li><i className="bi bi-envelope-fill text-success"></i> Email:contact@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>Send Us a Message</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </footer>
        </>
    );
}
