import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';


const Home =()=>{

  const [datasOne, setDatasOne] = useState();

  useEffect(()=>{
    const getData = ()=>{
      return axios.get('http://127.0.0.1:5000/')
      .then(result => setDatasOne([...datasOne,result.data.rows]))
      .catch((error)=> console.log(error));
    }
    getData();
  },[])
  
  // console.log(datasOne[0][0].country)

  return (
    // <p>hello</p>
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
    {/* {datasOne.map((data,key)=>{
      return data.map((eachData,key)=>{
        return(
          <tr key={key}>
            <td>{eachData.country}</td>
          </tr>
        )
      })
    })} */}
  </tbody>
</table>
    </div>
    <Footer />
  </div>
  );
};

export default Home;