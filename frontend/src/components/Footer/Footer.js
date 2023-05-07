import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea hic magnam expedita tempore maxime suscipit nostrum officiis, aut laudantium
                        consequuntur inventore quidem necessitatibus recusandae sapiente autem repellendus aspernatur unde.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque consequatur amet facilis eligendi natus magnam cum asperiores laudantium. Obcaecati ullam
                        error a facilis minus saepe quia vero nulla quis?
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Store Brand</span>
                    <span className="copyright">Copyright 2023</span>
                </div>
                <div className="right">
                    <img src="assets/images/payment.png" alt="payments" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
