import React, { useEffect } from 'react';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import BodyComponent from './components/BodyComponent';
import ArtCard from './components/ArtCard';
import data from './assets/mockData/index.json';
function App(){
  const clappedArr = new Array(data.data.length).fill(false);
  const [like, setLike] = React.useState([...clappedArr]);
  const [clapped, setClapped] = React.useState([...clappedArr]);
  const [indexClapped,setIndexClapped] = React.useState(-1);
  const useEffect=(() => {
    if(indexClapped === -1) return;
    if(clapped[indexClapped]){
      data.data[indexClapped].claps++;
    }
    else{
      data.data[indexClapped].claps--;
    }
  })();
  const likeBlog = (index) => {
    setLike(like.map((item,i) => i === index ? !item : item));
  }
  const clap = (clp) => {
    setClapped(clapped.map((item,i) => i === clp ? !item : item));
    setIndexClapped(clp); 
  }
  return (
    <body>
    <div>
      <NavComponent />
    </div>
       <BodyComponent>
        {data.data.map((item,i) =>  <ArtCard data={item} funcClap={clap} index={i} like={likeBlog} liked={like}/>)} 
      </BodyComponent>
      < FooterComponent />
    </body>
  );
}

export default App;
