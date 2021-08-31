import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
import { DashBoard } from './DashBoard';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';

import '../App.css';

export const Login = () => {
  // let Data = { mesaage: '' };
  let history = useHistory();
  const userid = useRef('');
  const password = useRef('');
  const [message, setMessage] = useState('');
  let [admin, setAdmin] = useState(false);

  const doLogin = () => {
    console.log(userid, password);
    let uid = userid.current.value;
    let pwd = password.current.value;
    const userObject = { userid: uid, password: pwd };
    console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
    const json = JSON.stringify(userObject);
    console.log('JSON is ', json, ' Object is ', userObject);
    const promise = doAjax(process.env.REACT_APP_LOGIN_URL, 'POST', json);
    promise
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log('Data Rec From Server ', data);
            setAdmin(data.isAdmin);
            setMessage(data.message);
          })
          .catch((err) => {
            console.log('Invalid JSON ', err);
          });
      })
      .catch((err) => {
        console.log('Error During Server Call ', err);
      });
  };

  if (message.startsWith('Welcome')) {
    // return <DashBoard msg={message} userAdmin={admin} />;
    // history.push('/dashboard');

    console.log(message, admin);
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: { msg: message, userAdmin: admin },
        }}
      />
    );
  } else {
    return (
      
      <div className='box'>
        <h1 className="login">
            Log in
          </h1>
          <h5 className="txt-everyone">
            <span className="txt-music">Music</span> for everyone!
          </h5>
        <div className="form-form">
          
        <h2 className="in" >{message}</h2>
        <div className='form-group'>
          <label>User ID</label>
          <input
            ref={userid}
            className='form-control form-logintxt '
            type='text'
            placeholder='User ID'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            ref={password}
            className='form-control form-logintxt'
            type='password'
            placeholder='Password'
          />
        </div>
        <div className='form-group'>
          <button onClick={doLogin} className='btn btn-primary btn-loginlogin'>
            Login
          </button>
          &nbsp;&nbsp;
          <button className='btn btn-secondary'>Reset</button>
          <button className='btn btn-secondary btn-register'>
            <Link to='/register' className='register-link'>
              Register
            </Link>
          </button>
        </div>
        </div>
        <div className="img-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="357.964" height="343.732" viewBox="0 0 757.964 743.732">
  <g id="Group_4" data-name="Group 4" transform="translate(-221 -78)">
    <path id="Path_31" data-name="Path 31" d="M312.471,78.134a32.036,32.036,0,0,0-32,32V788.562a32.036,32.036,0,0,0,32,32h297a32.037,32.037,0,0,0,32-32V110.134a32.036,32.036,0,0,0-32-32Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <path id="Path_32" data-name="Path 32" d="M621.676,235.116v-54.44a125.247,125.247,0,0,1-80.859-60.189h0a23.789,23.789,0,0,1-14.22,4.68H483.368A178.549,178.549,0,0,0,621.676,235.116Z" transform="translate(-0.018 -0.134)" fill="#fff"/>
    <path id="Path_33" data-name="Path 33" d="M621.676,177.556v-52.3a29.121,29.121,0,0,0-29.13-29.13h-41.97v5.05a23.917,23.917,0,0,1-7.4,17.329,122.3,122.3,0,0,0,78.5,59.049Z" transform="translate(-0.018 -0.134)" fill="#fff"/>
    <path id="Path_34" data-name="Path 34" d="M419.787,125.168H392.756a23.987,23.987,0,0,1-23.98-23.99v-5.05H329.4a29.128,29.128,0,0,0-29.13,29.132v648.2a29.079,29.079,0,0,0,29.13,29.11h263.15a28.362,28.362,0,0,0,3.59-.22,29.146,29.146,0,0,0,25.54-28.89V296.286C525.967,285.2,446.218,216.907,419.787,125.168Z" transform="translate(-0.018 -0.134)" fill="#fff"/>
    <path id="Path_35" data-name="Path 35" d="M480.088,125.168h-57.14c26.3,90.039,104.68,157.028,198.729,168.068v-55.02A181.668,181.668,0,0,1,480.087,125.168Z" transform="translate(-0.018 -0.134)" fill="#fff"/>
    <path id="Path_36" data-name="Path 36" d="M601.63,610.915h-270a5.006,5.006,0,0,1-5-5V538.94a5.006,5.006,0,0,1,5-5h270a5.006,5.006,0,0,1,5,5v66.976A5.006,5.006,0,0,1,601.63,610.915Zm-270-74.976a3,3,0,0,0-3,3v66.976a3,3,0,0,0,3,3h270a3,3,0,0,0,3-3V538.94a3,3,0,0,0-3-3Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <circle id="Ellipse_4" data-name="Ellipse 4" cx="21" cy="21" r="21" transform="translate(345.611 551.293)" fill="#3f3d56"/>
    <path id="Path_37" data-name="Path 37" d="M415.129,558.427a3.5,3.5,0,0,0,0,7h165a3.5,3.5,0,1,0,0-7Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <path id="Path_38" data-name="Path 38" d="M415.129,579.427a3.5,3.5,0,0,0,0,7h165a3.5,3.5,0,1,0,0-7Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <path id="Path_39" data-name="Path 39" d="M601.63,722.915h-270a5.006,5.006,0,0,1-5-5V650.94a5.006,5.006,0,0,1,5-5h270a5.006,5.006,0,0,1,5,5v66.976A5.006,5.006,0,0,1,601.63,722.915Zm-270-74.976a3,3,0,0,0-3,3v66.976a3,3,0,0,0,3,3h270a3,3,0,0,0,3-3V650.94a3,3,0,0,0-3-3Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <circle id="Ellipse_5" data-name="Ellipse 5" cx="21" cy="21" r="21" transform="translate(345.611 663.293)" fill="#3f3d56"/>
    <path id="Path_40" data-name="Path 40" d="M415.129,670.427a3.5,3.5,0,0,0,0,7h165a3.5,3.5,0,1,0,0-7Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <path id="Path_41" data-name="Path 41" d="M415.129,691.427a3.5,3.5,0,0,0,0,7h165a3.5,3.5,0,1,0,0-7Z" transform="translate(-0.018 -0.134)" fill="#e6e6e6"/>
    <path id="Path_42" data-name="Path 42" d="M460.947,471.93a94.96,94.96,0,0,1-95-95c0-.2,0-.408.012-.607.291-52.025,42.9-94.393,94.988-94.393a95,95,0,1,1,0,190Zm0-188a93.2,93.2,0,0,0-92.99,92.456c-.011.212-.01.383-.01.544a93.012,93.012,0,1,0,93-93Z" transform="translate(-0.018 0.07)" fill="#3f3d56"/>
    <path id="Path_43" data-name="Path 43" d="M503.97,381.529l-65.022-37.541a2,2,0,0,0-3,1.732V420.8a2,2,0,0,0,3,1.732l65.022-37.541a2,2,0,0,0,0-3.464l-65.022-37.541a2,2,0,0,0-3,1.732V420.8a2,2,0,0,0,3,1.732l65.022-37.541a2,2,0,0,0,0-3.464Z" transform="translate(-0.018 -6.721)" fill="#ff3535"/>
    <path id="Path_54" data-name="Path 54" d="M757.569,743.732H0v-2.181H757.964Z" transform="translate(221 78)" fill="#3f3d56"/>
    <g id="Group_1" data-name="Group 1" transform="translate(-869.284 495.958)">
      <circle id="Ellipse_3" data-name="Ellipse 3" cx="27.936" cy="27.936" r="27.936" transform="translate(1653.026 -107.758)" fill="#ffb8b8"/>
      <path id="Path_21" data-name="Path 21" d="M812.723,631a12.514,12.514,0,0,1,9.466-16.1,11.893,11.893,0,0,1,1.66-.2l29.427-47.229L826.4,541.915A10.728,10.728,0,1,1,841.32,526.5l37.113,36.6.075.091a9.719,9.719,0,0,1-.676,11.584L836.6,623.534a11.733,11.733,0,0,1,.307,1.19,12.514,12.514,0,0,1-11.232,14.918q-.533.047-1.06.047A12.553,12.553,0,0,1,812.723,631Z" transform="translate(866.433 -554.209)" fill="#ffb8b8"/>
      <path id="Path_22" data-name="Path 22" d="M589.772,539.948H575.827l-6.633-53.786,20.58,0Z" transform="translate(1045.18 -230.972)" fill="#ffb8b8"/>
      <path id="Path_23" data-name="Path 23" d="M812.885,719.943l-46.1,0V718.8a18.069,18.069,0,0,1,18.07-18.069h28.031Z" transform="translate(826.191 -396.88)" fill="#2f2e41"/>
      <path id="Path_24" data-name="Path 24" d="M674.777,526.174l-11.982,7.135-33.217-42.82,17.685-10.529Z" transform="translate(1098.774 -236.477)" fill="#ffb8b8"/>
      <path id="Path_25" data-name="Path 25" d="M848.632,729.873l-.582-.977a18.07,18.07,0,0,1,6.281-24.77l24.085-14.341,9.826,16.5Z" transform="translate(896.059 -406.599)" fill="#2f2e41"/>
      <path id="Path_26" data-name="Path 26" d="M780.531,810.423c-9.341-109.994-14.9-212.178,19.25-253.862l.264-.323,57.468,22.988.095.205c.194.422,19.306,42.463,14.848,70.741l14.175,65.206,46.219,77.391a5.12,5.12,0,0,1-2.333,7.311l-20.086,8.837a5.142,5.142,0,0,1-6.424-2.008L853.73,724.923l-28.4-62.883a1.706,1.706,0,0,0-3.252.522L806.338,810.535a5.109,5.109,0,0,1-5.089,4.577H785.633A5.153,5.153,0,0,1,780.531,810.423Z" transform="translate(832.083 -525.133)" fill="#2f2e41"/>
      <path id="Path_27" data-name="Path 27" d="M787.986,592.013l-.274-.131-.043-.3c-2.147-15.025.394-31.72,7.552-49.62a39.4,39.4,0,0,1,45.726-23.594h0a39.348,39.348,0,0,1,25.092,19.295,38.923,38.923,0,0,1,2.7,31.193c-9.024,26.388-20.73,51.078-20.848,51.324l-.245.515Z" transform="translate(844.072 -559.713)" fill="#ff3535"/>
      <path id="Path_28" data-name="Path 28" d="M765.634,647.248a12.776,12.776,0,0,1,9.16-13.935l53.739-103.171a10.3,10.3,0,1,1,17.522,10.817L791.046,643.411a12.419,12.419,0,0,1,.2,1.888,12.861,12.861,0,0,1-13.033,13.208h0a12.873,12.873,0,0,1-9.87-4.834,12.713,12.713,0,0,1-2.714-6.425Z" transform="translate(825.073 -552.635)" fill="#ffb8b8"/>
      <path id="Path_29" data-name="Path 29" d="M795.454,500.188h44.359V480.852c-9.736-3.868-19.264-7.158-25.023,0a19.336,19.336,0,0,0-19.336,19.336Z" transform="translate(851.636 -595.791)" fill="#2f2e41"/>
      <path id="Path_30" data-name="Path 30" d="M836.215,477.059c26.519,0,33.941,33.24,33.941,51.993,0,10.458-4.729,14.2-12.162,15.464l-2.625-14-6.147,14.6c-2.088.01-4.281-.03-6.555-.072l-2.084-4.292-4.648,4.215c-18.616.028-33.661,2.741-33.661-15.917C802.274,510.3,808.784,477.059,836.215,477.059Z" transform="translate(857.69 -595.41)" fill="#2f2e41"/>
    </g>
    <g id="Group_2" data-name="Group 2" transform="translate(684 38)">
      <path id="Path_53" data-name="Path 53" d="M820.737,295.13V269.263a2.333,2.333,0,0,0-2.333-2.333h-4.666a2.333,2.333,0,0,0-2.333,2.333V293.57a14.745,14.745,0,1,0,9.331,1.56Z" transform="translate(-688.018 71.866)" fill="#ff3535"/>
      <circle id="Ellipse_8" data-name="Ellipse 8" cx="6.998" cy="6.998" r="6.998" transform="translate(119.5 373.01)" fill="#fff"/>
    </g>
  </g>
</svg>
        </div>
      </div>
    );
  }
};