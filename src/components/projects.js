import React from 'react';
import {Tabs, Tab,Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    // Sets the content of each tab
    toggleCategories(){

        //React Tab
        if(this.state.activeTab === 0){
            return(
            <div className='projects-grid'>    
                <Card shadow={25} style={{width: '500px', margin: 'auto'}}>
                    <a href='https://carsonkaylor1.github.io/VibeMonk/#' rel='noopener noreferrer' target='_blank'><CardTitle style={{color: '000', top:'0', height: '270px', background: 'url(https://i.imgur.com/pNRPx9a.jpg) center / cover'}} ></CardTitle></a>
                    <CardText>
                    <h1 style={{fontSize:'24px', fontFamily:'Quicksand', marginBottom:'.5em', marginTop:'0'}}>VibeMonk</h1>
                    <div style={{fontFamily:'Quicksand'}}>
                    A website with the functionality to listen to music and add playlists to your Spotify account through the Spotify API.
                    </div> 
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/carsonkaylor1/VibeMonk'>
                            <Button colored style={{fontFamily:'Quicksand', marginLeft:'25%', width:'50%'}}>Github</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
            </div>
            )
        }

        //Games Tab
        else if(this.state.activeTab === 1){
            return(
            <div className='projects-grid'> 
                <Card shadow={25} style={{width: '500px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '270px', background: 'url(https://i.imgur.com/EufYrpT.jpg) center / cover'}}>
                    </CardTitle>
                    <CardText>
                        <h1 style={{fontSize:'24px', fontFamily:'Quicksand', marginBottom:'.5em', marginTop:'0'}}>Gladiate</h1>
                        <div style={{fontFamily:'Quicksand'}}>
                            A 2D gladiator wave-based fighting game.
                        </div>
                    </CardText>
                    <CardActions border>
                    <a href='https://github.com/carsonkaylor1/SummerGameProject' rel='noopener noreferrer' target='_blank'>
                        <Button colored style={{marginLeft:'25%', width:'50%'}}>Github</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
            </div>
            )
        }

        //Apps tab
        else if(this.state.activeTab === 2){
            return(
            <div className='projects-grid'> 
                <Card shadow={25} style={{width: '500px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored style={{marginLeft:'25%', width:'50%'}}>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }

    render(){
        return(
            <div className='category-tabs'>
                {/* Establishes the tabs, and sets the state when a tab is clicked on */}
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple> 
                    <Tab style={{color:'white', marginLeft: '25%', fontSize:'24px', fontFamily: 'Quicksand'}}>Websites</Tab>
                    <Tab style={{color:'white', margin:'auto', fontSize:'24px', fontFamily: 'Quicksand'}}>Games</Tab>
                    {/* <Tab style={{color:'white', marginRight:'25%', fontSize:'24px', fontFamily: 'Quicksand'}}>Apps</Tab> */}
                </Tabs>
                
                        <Grid style={{marginBottom:'200px'}}>
                            <Cell col={12}>
                                <div className='project-content'>{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>               
            </div>
        )
    }
}

export default Projects;