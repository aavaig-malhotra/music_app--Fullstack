import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doAjax } from '../utils/ajax';

function AddSong() {
  const history = useHistory();
  const songName = useRef('');
  const songUrl = useRef('');
  const artistName = useRef('');
  const imageUrl = useRef('');

  const addSong = () => {
    console.log(songName.current.value);
    console.log(songUrl.current.value);
    console.log(artistName.current.value);
    console.log(imageUrl.current.value);

    const songN = songName.current.value;
    const songU = songUrl.current.value;
    const artistN = artistName.current.value;
    const imageU = imageUrl.current.value;

    const songObject = {
      name: songN,
      url: songU,
      artistName: artistN,
      imageurl: imageU,
    };
    console.log('URL is :', process.env.REACT_APP_ADD_SONG_URL);

    const json = JSON.stringify(songObject);
    const promise = doAjax(process.env.REACT_APP_ADD_SONG_URL, 'POST', json);

    promise
      .then((response) => {
        response
          .json()
          .then((data) => console.log('Data received from server ', data))
          .catch((err) => {
            console.log('Invalid Json', err);
          });
      })
      .catch((err) => console.log('Error during server call', err));
    console.log('song added');
    // setTimeout(() => {
    //   // history.push('/dashboard');
    //   history.goBack();
    // }, 2000);
  };

  return (
    <>
      <h2 className="addsongh2">Add A Song</h2>
      <div className='add-song'>
      <div className="align-addsong">
      <div class='row g-3 align-items-center form-group'>
        
        <div class='col-auto'>
          <label for='inputPassword6' class='col-form-label'>
            Song Name
          </label>
        </div>
        <div class='col-5'>
          <input
            ref={songName}
            className='form-control form-addsong'
            type='text'
            placeholder='Type Song Name Here'
          />
        </div>
      </div>

      <div class='row g-3 align-items-center form-group'>
        <div class='col-auto'>
          <label for='inputPassword6' class='col-form-label'>
            Artist Name
          </label>
        </div>
        <div class='col-5'>
          <input
            ref={artistName}
            className='form-control form-addsong'
            type='text'
            placeholder='Type Artist Name Here'
          />
        </div>
      </div>

      <div class='row g-3 align-items-center form-group'>
        <div class='col-auto'>
          <label for='inputPassword6' class='col-form-label'>
            Song Url     
          </label>
        </div>
        <div class='col-5'>
          <input
            ref={songUrl}
            className='form-control form-addsong form-addsongurl'
            type='text'
            placeholder='Type Song Url Here'
          />
        </div>
      </div>

      <div class='row g-3 align-items-center form-group'>
        <div class='col-auto'>
          <label for='inputPassword6' class='col-form-label'>
            Image Url
          </label>
        </div>
        <div class='col-5'>
          <input
            ref={imageUrl}
            className='form-control form-addsong form-addimgurl'
            type='text'
            placeholder='Type Image Url Here'
          />
        </div>
      </div>
      <div className='form-group'>
        <button className='btn btn-primary btn-addsong' onClick={addSong}>
          Add Song
        </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default AddSong;
