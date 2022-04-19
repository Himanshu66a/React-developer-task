import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Display from './Display';
import './display.css'
import Local from 'localbase';




const pageini = 1;
function Event() {
const [User, setUser] = useState([])
const [page, setpage] = useState(pageini)

const client_id='MjQ1OTk2ODB8MTYzNzczNDkzNy45MDAwMjE';

let db = new Local('db');


const handleScroll = (e) => {
  const scrollHeight = e.target.documentElement.scrollHeight;
  const currentHeight = Math.ceil(
    e.target.documentElement.scrollTop + window.innerHeight
  );
  if (currentHeight + 1 >= scrollHeight) {
    console.log('bottom');
    setpage(page+1);
  }
};

const saveDataTolb= (data)=>{

  data.map( (ele)=>{
    Local.setItem('user', {
    id:ele.id,
    type:ele.type,
    title:ele.title
  })})

  }

  useEffect(() => {
    const getUsers = async () => {
      const users = await axios.get(`https://api.seatgeek.com/2/events?client_id=${client_id}&page=${page}&per_page=20`);
      console.log(users.data.events)
      setUser([...User,...users.data.events]);
      saveDataTolb(users.data.events)
    };
    getUsers();

    window.addEventListener("scroll", handleScroll);
  },[page])


 
  
  
  return (
    <>
    <div className="flex">
      {
        User.map((ele)=>{
          return( 
           <Display info={ele}  />
          )
        })
      }
    </div>
    </>
  )
}

export default Event