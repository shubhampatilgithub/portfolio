
"use client"

import { useEffect, useState } from "react";
import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {



  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}



