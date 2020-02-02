import React from 'react';
import { Cell, Grid } from 'react-mdl';


class AboutMe extends React.Component{
    render(){
        return(
            <div className='landing-header-main'>
              
                <Grid className='landing-grid'>
             
                    <Cell col={12}>               
                        <h1 className='name-header'>Carson Kaylor</h1>
                        <img src="https://i.imgur.com/NVgqpm9.jpg"
                        alt='avatar'
                        className='avatar-image'/>
                        <div className='banner-text'>
                            <h1>Front-End Web Developer</h1>
                            
                            <hr/>
                            <p>Whaddup friends! Thank you for visiting my site.
                            I am a freelance web developer at your service, here to serve YOU. Find out what I can do for you by <a href='./contact'>contacting</a> me.</p>
                            <div className='social'>
                                <a href='http://linkedin.com/in/carson-kaylor-2b4635161' rel='noopener noreferrer' target='_blank'>
                                    <i className='fab fa-linkedin' aria-hidden='true'></i>
                                </a>
                                <a href='http://facebook.com/carson.kaylor.5' rel='noopener noreferrer' target='_blank'>
                                    <i className='fab fa-facebook-square' aria-hidden='true'></i>
                                </a>
                                <a href='https://github.com/carsonkaylor1' rel='noopener noreferrer' target='_blank'>
                                    <i className='fab fa-github' aria-hidden='true'></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default AboutMe;