import React, { useEffect } from 'react';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import BodyComponent from './components/BodyComponent';
import ArtCard from './components/ArtCard';
import axios from 'axios';
function App(){
  const [data,setData] = React.useState([]);
  const [like, setLike] = React.useState([]);
  const [clapped, setClapped] = React.useState([]);
  
  React.useEffect(() => {
     axios.get('http://localhost:8000/blog-posts')
     .then(res =>{
      res.data.sort((a,b)=> a.id-b.id);
      setData([...res.data]);
     })
     .catch((err)=>{
        console.log(err);
      });
      
},[clapped,like]);
 React.useEffect(() => {
  const likedArr = data.map(item=>item.liked);
  setLike([...likedArr]);

  const clappedArr = data.map(item=>false);
  setClapped([...clappedArr]);
    
  
  //console.log(clapped);
 },[data]);


  const likeBlog = (index) => {
    axios.put('http://localhost:8000/blog-posts/'+data[index].id,{liked:!data[index].liked,claps:data[index].claps})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)});
    setLike(like.map((item,i) => i === index ? !item : item));
  }
  const clap = (index) => {
    axios.put('http://localhost:8000/blog-posts/'+data[index].id,{liked:data[index].liked,claps:(clapped[index])?data[index].claps-1:data[index].claps+1})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)});
    console.log(clapped);
    setClapped(clapped.map((item,i) => i === index ? !item : item));
  }
  return (
    <div>
    <div>
      <NavComponent />
    </div>
       <BodyComponent>
       {data.map((item,i) =>  <ArtCard key={item.id} data={item} funcClap={clap} index={i} like={likeBlog} liked={like}/>)}
      </BodyComponent>
      < FooterComponent />
    
    </div>
  );
  

}

export default App;
