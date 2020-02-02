import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className="contact-grid">
                    <Cell col={12}>
                    <div className='banner-text-contact'>
                        <h1>Contact Me</h1>
                        <hr/>
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '40px', fontWeight: 'bold', fontFamily: 'Quicksand', paddingTop:'40px', color:'white'}}>
                                    <i className='fas fa-phone-square-alt' aria-hidden='true'/>
                                    240-457-2278
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '40px', fontWeight: 'bold', fontFamily: 'Quicksand', color:'white'}}>
                                    <i className='fas fa-envelope-square' aria-hidden='true'/>
                                    carsonkaylor@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>

                        </div>
                    </div>
                    </Cell>
                    
                </Grid>
                
            </div>
        )
    }
}

export default Contact;