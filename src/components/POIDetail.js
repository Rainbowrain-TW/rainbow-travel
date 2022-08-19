import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';

//function POIDetail({ Name, Toldescribe: FullDesc, Description: Desc, Tel, Add, Picture1: picUrl, Picdescribe1: picDesc }) {
function POIDetail() {

  const nav = useNavigate();
  const {id} = useParams();
  const [data, setData] = useState({});
  const {Name, Toldescribe: FullDesc, Description: Desc, Tel, Add, Picture1: picUrl, Picdescribe1: picDesc } = data;

  useEffect(()=>{
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then(res=>res.json())
    .then(result=>{
        const newData = result.data.XML_Head.Infos.Info.filter( v => v.Id == id)[0];
        console.log('newData');
        console.log(newData);
        setData(newData)
    })
  },[])

  return (
    <>
      <div className="content poi-item">
        <nav>          
          <button onClick={()=>{nav('/poi')}}>Show List</button>
        </nav>
        <main>          
          <h3>{ Object.keys(data).length === 0 ? "Loading ..." : Name}</h3>
          <div className="desc">{Desc}</div>
          <div className="tel">{Tel}</div>
          <div className="add">{Add}</div>
          <div className="pic">
            <h4>{picDesc}</h4>
            <img src={picUrl} alt={Name} />
          </div>
          <div className="fulldesc">{FullDesc}</div>
        </main>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/poi">awsome place</Link>
        </nav>
      </div>
    </>
  );
}

export default POIDetail;