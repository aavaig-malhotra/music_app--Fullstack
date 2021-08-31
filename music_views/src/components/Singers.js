import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Song } from './Song';
import '../App.css';
export const Singers = () => {
  const [singers, setSinger] = useState([]);

  const [sname, setSingerName] = useState('');
  const getSongsBySinger = (singerName) => {
    setSingerName(singerName);
  };

  useEffect(() => {
    const promise = fetch(process.env.REACT_APP_SINGER_URL);
    promise.then((response) => {
      console.log('Response ', response);
      response
        .json()
        .then((singers) => {
          console.log('::::: Singers are ', singers);
          setSinger(singers['singers']);
        })
        .catch((err) => console.log('Invalid JSON ', err))
        .catch((err) => console.log('Error During Server Call ', err));
    });
  }, []);
  if (sname.length == 0) {
    return (
      <div className='row singer-row'>
        {singers.map((singer) => {
          return (
            <>
              <div className='card img1' style={{ width: '18rem' }}>
                <NavLink
                  className='nav-link singer-nav-link'
                  to={`/song/${singer.name}`}
                >
                  <img
                    onClick={() => {
                      getSongsBySinger(singer.name);
                    }}
                    src={singer.photo}
                    className='card-img-top image'
                    alt=''
                  />

                  <div className='card-body'>
                    <p className='card-text'>{singer.name}</p>
                  </div>
                </NavLink>
              </div>
            </>
          );
        })}
      </div>

      //{singers.map(singer=><span>{singer.name} <img src={singer.photo}/></span>)}
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: `/song/${sname}`,
          state: { name: sname },
        }}
      />
    );
  }
};
