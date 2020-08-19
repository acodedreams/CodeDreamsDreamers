import React from 'react';

import Profile from '../../assets/images/profile-personal.svg';

import { FiUser, FiMail } from 'react-icons/fi'

import './style.css';

function Landing() {
  return (

    <div className="pageLanding">
      <div className="logoContainer">
        <img src="" alt="Logo Code Dreams" />
      </div>
      <div id="content" className="container">
        <div className="actionCall">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum scelerisque a egestas libero sit ultrices</h2>
        </div>
        <div className="mainContainer">
          <div className="formContainer">
            <h4>Faça parte da comunidade!</h4>
            <form action="">
              <div className="inputWithIcon">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu Nome"
                />
                <FiUser className="icon"/>
              </div>
              <div className="inputWithIcon">
                <input  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail" />
                  <FiMail className="icon"/>
              </div>
              
              <button type="submit">Participar</button>
            </form>
          </div>
          <div className="imageContainer">
            <img src={Profile} alt="Code Dreams Dreamers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;