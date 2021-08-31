import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { doAjax } from '../utils/ajax';

function DeleteSong() {
  const [songs, setSongs] = useState([]);
  const history = useHistory();

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

  const deleteSongClicked = (song) => {
    console.log(song._id);
    const promise = doAjax(
      `http://localhost:1234/deletesong/${song.name}`,
      'DELETE'
    );

    promise
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log('Data received from server ', data);
            setSongs(data.songs);
          })
          .catch((err) => {
            console.log('Invalid Json', err);
          });
      })
      .catch((err) => console.log('Error during server call', err));
  };

  return (
    <>
      <div style={{ paddingRight: '10px' }}>
        <h1
          style={{
            boxShadow: '0 2px 10px 2px rgba(230,230,230,0.08)',
            padding: '10px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          All Songs
        </h1>
        <h3
          style={{
            boxShadow: '0 2px 10px 2px rgba(230,230,230,0.08)',
            padding: '10px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Choose a Song to Delete
        </h3>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Song Name</th>
              <th scope='col'>Artist</th>
              <th scope='col'></th>
            </tr>
          </thead>
          {songs.length > 0 &&
            songs.map((song, idx) => (
              <>
                <tbody>
                  <tr>
                    <th scope='row'>{idx + 1}</th>
                    <td>{song.name}</td>
                    <td>{song.artistName}</td>
                    <td>
                      <button
                        type='button'
                        class='btn btn-danger'
                        onClick={() => deleteSongClicked(song)}
                      >
                        Delete Song
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
        </table>
      </div>
    </>
  );
}

export default DeleteSong;
