import Header from './components/header';
import Tiles from './components/tiles';
import './App.css';
import { useState } from 'react';

const testData = [{
  id: '123',
  image: 'blue',
  playlist: false,
  album: {
    name: 'Despacito ft.',
    director: 'Luis Fonsi'
  }
},{
  id: '3',
  image: 'green',
  playlist: false,
  album: {
    name: 'Shape of You ',
    director: 'Ed Sheeran'
  }
},{
  id: '6',
  image: 'orange',
  playlist: false,
  album: {
    name: 'See You Again',
    director: 'Wiz Khalifa '
  }
},{
  id: '7',
  image: 'red',
  playlist: false,
  album: {
    name: 'Uptown Funk ft',
    director: 'Mark Ronson'
  }
},{
  id: '11',
  image: 'yellow',
  playlist: false,
  album: {
    name: 'Gangnam Style',
    director: 'PSY'
  }
},{
  id: '13',
  image: 'pink',
  playlist: false,
  album: {
    name: 'Sorry',
    director: 'Justin Bieber'
  }
},{
  id: '18',
  image: 'red',
  playlist: false,
  album: {
    name: 'Sugar',
    director: 'Maroon 5'
  }
},{
  id: '22',
  image: 'orange',
  playlist: false,
  album: {
    name: 'Roar',
    director: 'Katy Perry'
  }
},{
  id: '25',
  image: 'green',
  playlist: false,
  album: {
    name: 'Thinking Out Loud',
    director: 'Ed Sheeran '
  }
},{
  id: '27',
  image: 'blue',
  playlist: false,
  album: {
    name: 'Counting Stars',
    director: 'OneRepublic '
  }
}];

function App() {
  const [data, setData] = useState(testData);
  const [playlist, setPlaylist] = useState([]);

  const setPlaylistData = (list) => {
    setPlaylist((prevState) => {
      let modifiedData = [...prevState];
      modifiedData.push(list);
      return modifiedData
    })

    setData((prevState) => {
      let modifiedData = [...prevState];
      modifiedData.forEach((data)=>{
        if (data.id ===  list.id) {
          data.playlist = true
        }
      });
      return modifiedData
    })
  }
  return (
    <div>
      <Header playlist={playlist}/>
      <section className="app-recommendation-content">
        <p className="heading-text"> Music Recommendations </p>
        <div className="app-recommendation">
          <Tiles data={data} setPlaylistData={setPlaylistData} />
        </div>
      </section>
      <section className="app-latest-content">
        <p className="heading-text"> Latest  Releases </p>
        <div className="app-latest">
          <Tiles data={data} setPlaylistData={setPlaylistData} />
        </div>
      </section>
    </div>
  );
}

export default App;
