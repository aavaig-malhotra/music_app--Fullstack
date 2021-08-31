import React, { useEffect, useState } from 'react';
import { doAjax } from '../utils/ajax';
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../App.css';

function SongList() {
  const [songs, setSongs] = useState([]);
  const [songUrl, setSongUrl] = useState('');

  const audioStyle = {
    width: '100%',
    position: 'fixed',
    // height: '300px',
    bottom: 0,
    border: 'none',
    borderRadius: '0px',
  };

  useEffect(() => {
    const songsCall = async () => {
      console.log('Url is : ', 'http://localhost:1234/allsongs');

      const url = `http://localhost:1234/allsongs`;

      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log(res);

      const data = await res.json();

      setSongs(data);
      console.log(data);
    };

    songsCall();
  }, []);

  const sortAscending = () => {
    if (songs.length > 0) {
      songs.sort((a, b) => {
        console.log(a.name < b.name);
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      setSongs(songs);
    }
  };
  const sortDescending = () => {};

  return (
    <>
      <h1 className='songListTitle'>All Songs</h1>

      <div className='songList-container'>
        {songs.length > 0 &&
          songs.map((song) => (
            <div className='allign' style={{ width: '18rem', margin: '10px' }}>
              <div
                className='card songs'
                style={{ width: '100%', height: '100%' }}
                key={song}
              >
                <img src={song.imageurl} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{song.name}</h5>
                  <h6 className=''>{song.artistName}</h6>

                  <a
                    className='btn btn-primary'
                    onClick={() => {
                      setSongUrl(song.url);
                    }}
                  >
                    Play
                  </a>
                </div>
              </div>
            </div>
          ))}
        {songUrl && (
          // <audio controls style={audioStyle}>
          //   <source src={songUrl} type='audio/mp4'></source>
          // </audio>
          // <ReactAudioPlayer
          //   src={songUrl}
          //   autoPlay
          //   controls
          //   style={{ borderRadius: '0px', backgroundColor: 'white' }}
          // />
          <AudioPlayer
            autoPlay
            src={songUrl}
            onPlay={(e) => console.log('onPlay')}
            style={{
              position: 'fixed',
              bottom: 0,
            }}
            // other props here
          />
        )}
      </div>
    </>
  );
}

export default SongList;
