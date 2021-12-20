import React, { Component } from "react";
import Pokev1 from '../Pokev1'
import Pokev2 from '../Pokev2'
import Pokev3 from '../Pokev3'
import { Route, Routes } from "react-router-dom";

const  Main = () => {
    return <main>
    <Routes>
      <Route path="/Pokev1" element={<Pokev1/>} />
      <Route path="/Pokev2" element={<Pokev2/>} />
      <Route path="/Pokev3" element={<Pokev3/>} />
      {/* <Route path="/list" element={<List formMoreList={this.state.myNewsForm} deleteOne={this.deleteOne} callasync={this.componentDidMount} />} /> */}
    </Routes>
  </main>;
  }

  


export default Main;
