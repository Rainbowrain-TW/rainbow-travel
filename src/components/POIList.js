import { Link } from "react-router-dom";
import { useState,useEffect } from "react"
import POIDetail from './POIDetail.js';

function POIList() {
  const [data, setData] = useState([])

  useEffect(()=>{        
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then(res=>res.json())
    .then(result=>{
        const newData = result.data.XML_Head.Infos.Info;
        console.log('newData');
        console.log(newData);
        setData(newData)
    })
},[])

  return (
    <>
      <div className="content">
        <main>
          {
            (data.length == 0) ? <h2>Loading</h2> : ( data.map((v,i)=>( <Link to={v.Id}>{v.Name}</Link> )))
          }
        </main>
        <nav>
          <Link to="/">Home</Link>          
          <Link to="/about">About</Link>
        </nav>
        </div>
    </>
  );
}

export default POIList;