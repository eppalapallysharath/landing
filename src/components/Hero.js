import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import Sidebar from "./Sidebar";
import img from "../Images/hero-cake.jpg";

const Hero = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  const styles = {
    background: img,
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    /* Add more styles here */
  };

  return (
    <div className="c" style={styles}>
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="navHead">Yummy and beautiful desserts</h1>
          <p>
            A local favorite for 83+ years. Featuring our famous donuts ice
            cream and our cakes. Full menu offered all day and late night. Full
            bar with entertainment on weekends.
          </p>
          <div className="btn">Book now</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
