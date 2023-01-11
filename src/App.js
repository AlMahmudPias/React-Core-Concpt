import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Musfiq','Soumya','Tamim','Mahmudullah','Mustafiz','Liton']
  const product = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDf Reader', price:'6$69.00'}

  ]
  return (
    <div className="App">
      <header className="App-header">
      <p>I am React User</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          product.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        product.map(product => <Product product = {product}></Product>)
      }
      
      <Person></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () =>{
    const newCount = count - 1;
    setCount(newCount);
  }
 
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray ',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width:'200px',
    float:'left',
    padding: '100px'

  }
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
    
  }
  console.log(props);
  return <div style={personStyle}>
    <h1>Name:{props.name} </h1>
    <p>Hero Of The Year</p>
  </div>
}

export default App;
