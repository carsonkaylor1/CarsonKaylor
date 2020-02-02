import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Jobs extends React.Component{
    render(){
        return(
            <Grid>
                <Cell col={4} className='left-desc-cell'>
                        <p style={{fontSize:'20px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}className='right-desc-cell'>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <p><i>{this.props.jobLocation}</i></p>
                    <p>{this.props.jobDescription}</p>                   
                </Cell>
            </Grid>
        )
    }
}

export default Jobs;