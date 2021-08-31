import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Singers } from './Singers';
import { Song } from './Song';
import { useHistory, Link } from 'react-router-dom';
import SongList from './SongList';
import AddSong from './AddSong';

export const DashBoard = (props) => {
  let history = useHistory();
  const [singers, setSinger] = useState([]);

  const handleClick = () => {
    history.push('/');
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

  return (
    <>
      <header className='navbar navbar-custom navbar-dark sticky-top  flex-md-nowrap p-0 shadow'>
        <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 menu' href='#'>
          Menu
        </a>
        <button
          className='navbar-toggler position-absolute d-md-none collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarMenu'
          aria-controls='sidebarMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <input
          className='form-control form-control-dark w-100'
          type='text'
          placeholder='Search'
          aria-label='Search'
        />
        <div className='navbar-nav'>
          <div className='nav-item text-nowrap'>
            <a className='nav-link px-3' href='#' onClick={handleClick}>
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className='container-fluid'>
        <div className='row'>
          <nav
            id='sidebarMenu'
            className='col-md-3 col-lg-2 d-md-block menu-bg-color sidebar collapse'
          >
            <div className='position-sticky pt-3'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link active'
                    aria-current='page'
                    to='/singers'
                  >
                    <span data-feather='home'></span>
                    Singers
                  </NavLink>
                </li>

                {singers.map((singer) => (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to={`/song/${singer.name}`}>
                      <span data-feather='file'></span>
                      {singer.name} Songs
                    </NavLink>
                  </li>
                ))}
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/songList'>
                    <span data-feather='file'></span>
                    All Songs
                  </NavLink>
                </li>
                {props.location.state.userAdmin && (
                  <>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/addSong'>
                        <span data-feather='file'></span>
                        Add a Song
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/delete'>
                        <span data-feather='file'></span>
                        Delete a Song
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>

          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2'>{props.location.state.msg}</h1>
            </div>

            <Switch>
              <Route path='/dashboard' exact component={Singers} />
              <Route path='/singers' component={Singers} />
              <Route path='/songs/:singerName' component={Song} />
              <Route path='/songList' component={SongList} />
              <Route path='/addsong' component={AddSong} />
              <Route render={() => <h1>404 Page Not Found</h1>} />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};
