import React from 'react'
import Person from './Person';
import Test from './components/test';
import Product from './components/Product';
import Person2 from './components/Person2';
import Person3 from './components/Person3';
import Laptop from './components/Laptop';
import Events from './components/Events';
import Counter from './components/Counter';
import ShowProduct from './components/ShowProduct';
import Filterproduct from './components/Filterproduct';

function App() {
  return (
    <>
      <div>
        {/* <Person />
            <h1>App is entry point</h1>
            { <Test/>} */}
        {/* <Product title="Galaxy s24 Ultra" brand="Samsung"
        price={150000} ram="8 GB" rom="128 GB" camera="200 Mp" />

      <Product title="I phone  16" brand="Apple"
        price={75000} fingerprint = "yes"/>

      <Product title="OnePlus 13" brand="OnePlus"
        price={35000} /> */}
      </div>
      <div>
        {/* <Person2 name=" Ayush" age="23" salary={50000}></Person2>
        <Person2 name="superman" age="18" salary={5000}></Person2>
        <Person2 name="spiderman" age="31" salary={100} ram="ram" ></Person2> */}
      </div>
      <div>
        {/* <Person3 name = 'Ayush' age = {23} panCard = {true} price = {100} ></Person3> */}
      </div>
      <div>
        {/* <Laptop brandName = "hp" model = "probook" price = {150000}></Laptop>
  <Laptop brandName = "lenovo" model = "yoga" prce = {250000}></Laptop>
  <Laptop brandName = "dell" model = 'inspiron' price = {50000}></Laptop> */}
      </div>
      <div>
        {/* <Events /> */}
      </div>
      <div>
        {/* <Counter /> */}
      </div>
      <div>
        {/* <ShowProduct/> */}
      </div>
      <div>
        <Filterproduct/>
      </div>
    </>
  );
}

export default App;
