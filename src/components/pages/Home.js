import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Profile from './profile/Profile'
import About from './about/About'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import Education from './education/Education'
import Portfolio from './portfolios/Portfolio'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col s12 m3'>
              <Profile />
            </div>
            <div className='col s12 m9'>
              <h1>Test</h1>
              <About />
              <Skills />
              <Experience />
              <Education />
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
