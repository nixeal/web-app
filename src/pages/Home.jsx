import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';


const Home =()=>{

  axios.get("http//localhost:5000")
  .then((response)=> console.log(response))
  .catch((error)=> console.log("error"+error));

  const [datasOne, setDatasOne] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/')
    .then(response => setDatasOne([...datasOne,response.data.rows]))
    .then((response=> console.log(response)))
    .catch((error)=> console.log(error))
  },[]);
      
  return (
  <div className='container-fluid bg-dark text-white'>
    <Header />
    <div className='container-fluid bg-dark text-white'>
    <table class="table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Country</th>
      <th scope="col">Petroleum products Name</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    {}
  </tbody>
</table>
    </div>
    <Footer />
  </div>
  );
};

export default Home;