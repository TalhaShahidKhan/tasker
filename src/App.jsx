import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskBoard from "./components/TaskBoard";
import Hero from "./components/Hero";


export default function App(){
  return (
    <>
    <Navbar/>
    <Hero/>
    <TaskBoard/>
    <Footer/>
    </>
  );
}