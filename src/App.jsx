import { useState } from 'react'
import { useEffect } from 'react'
import DogCard from "./components/DogCard";
import BanList from "./components/BanList";
import './App.css'
const API_KEY = import.meta.env.VITE_API_ACCESS_KEY;
function App() {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState([]);
  const fetchDog = async () => {
    let dogData;
    do {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1', {headers: {
        'x-api-key': API_KEY
      }})
      const data = await response.json();
      dogData = data[0];  
      console.log(dogData);
        // setDog(dogData);
    } while (dogData && banList.includes(dogData.breeds[0].name));
    setDog(dogData);
    console.log(dogData);
  }
  useEffect(() => {
    fetchDog();
  }, []);  
  const handleBan = (breed) => {
    setBanList([...banList, breed]);
  }
  const handleUnban = (breed) => {  
    setBanList(banList.filter(b => b !== breed));
  }

  return (
    <div className="container">
      <div className="content">
        <h1>🐶 Random Dog Finder</h1>
        {dog && <DogCard dog={dog} onBan={handleBan} />}
        <button className="fetch-btn" onClick={fetchDog}>Get Another Dog</button>
      </div>
      <BanList banList={banList} onUnban={handleUnban} />
    </div>


  )
}

export default App
