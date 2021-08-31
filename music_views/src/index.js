import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { DashBoard } from './components/DashBoard';
import { Singers } from './components/Singers';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import DeleteSong from './components/DeleteSong';
import { Song } from './components/Song';

ReactDOM.render(
  <BrowserRouter>
    <App />

    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/addSong' component={AddSong} />
      <Route path='/songList' component={SongList} />
      <Route path='/dashboard' render={(props) => <DashBoard {...props} />} />
      <Route path='/delete' component={DeleteSong} />
      <Route path='/song/:singerName' render={(props) => <Song {...props} />} />
      <Route path='/singers' component={Singers} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
