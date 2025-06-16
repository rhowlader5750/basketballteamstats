import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Teams from './components/teams/Teams';
import Positions from './components/positions/Positions';
import TeamData from './components/teamdata/TeamData';
import Search from './components/search/Search';


function App() {

  const [players, setPlayers] = useState();
  const getPlayers = async() =>{

    try{
      const response = await api.get('/v1/players')
      console.log(response.data);
      setPlayers(response.data);
      
      
    }catch(err){
      console.log(err)
    }
    
  }

  useEffect(()=>{
    getPlayers();

  },[])
   
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Layout/>} >
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/teams' element ={<Teams/>}></Route>
        <Route path='/positions' element ={<Positions/>}></Route>
        <Route path='/search' element ={<Search/>}></Route>
        <Route path="data" element={<TeamData />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
