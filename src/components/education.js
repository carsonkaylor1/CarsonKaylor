import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends React.Component{
    render(){
        return(
            <Grid>
                <Cell col={4} className='left-desc-cell'>
                        <p style={{fontSize:'20px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}className='right-desc-cell'>
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p><i>{this.props.schoolLocation}</i></p>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;