import React,{useState} from 'react'
import NavBar from './components/Navbar'
import Header from './components/Header' 
import Footer from './components/Footer'
import Card from './components/card'
function App() {
  let [cart,setCart] = useState(0)
  let shoppingData = [{
    itemName : "Fancy Product",
    price : "$40.00 - $80.00",
    textMuted: false
},
{
    itemName : "Special Item",
    price : "$20.00 - $18.00",
    textMuted: true
},
{
    itemName : "Sale Item",
    price : "$15.00 - $125.00",
    textMuted: false
},
{
    itemName : "Popular Item",
    price : "$60.00 - $90.00",
    textMuted: true
},
{
    itemName : "Sale Item",
    price : "$40.00 - $80.00",
    textMuted: false
},
{
    itemName : "Fancy Product",
    price : "$40.00 - $80.00",
    textMuted: true
},
{
    itemName : "Special Item",
    price : "$47.00 - $53.00",
    textMuted: false
},
{
    itemName : "Popular Item",
    price : "$52.00 - $80.00",
    textMuted: true
}
]
  return<>
      <NavBar cart={cart}/>
      <Header/> 
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {shoppingData.map((item, index) => (
                <Card key={index} itemName={item.itemName}
                price={item.price}
                textMuted={item.textMuted}
                setCart={setCart} />
            ))}
                </div>
            </div>
      </section>
      <Footer/>
  </>
}

export default App