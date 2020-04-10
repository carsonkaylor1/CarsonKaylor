import React from 'react';
import './App.css';
import LandingPage from './components/landingpage'
import AboutMe from './components/aboutme';
import Main from './components/main';
import Projects from './components/projects'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const particleOptions ={
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000
          
        }
      }
    }
  }

class App extends React.Component{
  render(){
    return(
      <Router>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
          <Particles className='particle-effect'
              params={particleOptions}
            />
      <div className="demo-big-content" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}>
    <Layout>
        <Header title=' ' id='header-bar' scroll>
          <div className='header-links'>
            <Navigation>
                <Link to="" style={{fontSize: '18px'}}>Home</Link>
                <Link to="/aboutme" style={{fontSize: '18px'}}>About Me</Link>
                <Link to="/projects" style={{fontSize: '18px'}}>Projects</Link>
                <Link to="/contact" style={{fontSize: '18px'}}>Contact</Link>
            </Navigation>
            </div>
        </Header>
        <Drawer title='Carson Kaylor' className='drawer-text'>
            <Navigation>
                <Link to="">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
</div>
</Router>
    )
  }
}

export default App;
