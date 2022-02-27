import React,{useState, useEffect} from 'react';
import '../css/body.css';
import axios from 'axios';
const Body = () => {
    const [datasOne, setDatasOne] = useState("");
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/')
        .then(result => setDatasOne([...datasOne,result.data.rows]))
        .catch((error)=> console.log(error));
    },[])
   
    return (
        <div className='container-fluid bg-dark text-white'>
            {/* <button onClick={handleClick}>Petroleum List</button> */}
    {datasOne && datasOne.map((data,key)=>{
      return data.map((eachData,key)=>{
        return (<div>
            <table className="table table-dark table-hover">
                <thead><tr>
                <th>Index</th>
                    <th>Country</th>
                    <th>Petroleum Fuel Name</th>
                    <th>Sales</th>
                </tr>
                   
                </thead>
                <tbody>
                    <tr key={key}>
                        <td>
                           {eachData.petroleum_id} 
                        </td>
                        <td>
                            {eachData.country}
                        </td>
                        <td>
                            {eachData.petroleum_product}
                        </td>
                        <td>
                            {eachData.sale}
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>)
         
      })
    })}
        </div>
    );
}

export default Body;