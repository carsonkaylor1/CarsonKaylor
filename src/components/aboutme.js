import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Jobs from './jobs';

const job1desc = 'Became experienced with writing bug reports, writing test cases, and running test cases\nGained experience exposing bugs through various testing tools such as TestRail, Jira, and Admin tools\nDeveloped a great understanding of the project lifecycle and how to work with a team underthe Agile framework'
const job2desc = 'Worked closely with developers to develop a healthcare web application using Java\nTested application through unit testing, acceptance testing, and acceptability testing\nBecame very familiar with using GitHub for version control'

class AboutMe extends React.Component{
    constructor(props){
        super(props);
        this.splitStringFunction = this.splitStringFunction.bind(this);
    }
    render(){
        return(
            <div className='aboutme-body'>
                <Grid className='aboutme-grid'>
                    
                    <Cell col={4} className='left-grid'>
                    <div style={{textAlign:'center'}}>
                        <h1>Carson Kaylor</h1>
                        <img src='https://i.imgur.com/5Tk7wYt.jpg'
                        alt='cocky'
                        className='cocky'/>
                        <p>I have always possessed a passion for working hard and helping others. Growing up I lived on a farm, where I learned what it took to get a job done and get it done right. Over the years I have applied this mentallity to many other aspects of my life.<br/><br/>
                        After pursuing a job in the gaming industry, I decided that my skills could be better used elsewhere. That was when I decided to start making websites. Since then I have been working everyday to improve my web development skills and become the best developer that I can be.<br/><br/>On the weekends you'll find me on the soccer field, on the ski slope, or out camping. There is nothing better to me than fresh air and freedom.</p>
                    </div>
                    </Cell>
                    
                    <Cell col={8} className='right-grid'>
                            <h1>Education</h1>
                            <Education 
                            startYear='2015' 
                            endYear='2019' 
                            schoolName='University of South Carolina'
                            schoolLocation='Columbia, South Carolina'
                            schoolDescription='Graduated with a Bachelor of Science in Computer Science with a focus in Game Development'/>

                            <hr style={{borderTop:'3px solid #3385ff'}}/>

                            <h1>Jobs</h1>
                            <Jobs 
                            startYear='July 2019'
                            endYear='December 2019'
                            jobName='QA Tester I at Big Huge Games'
                            jobLocation='Timonium, Maryland'
                            jobDescription={this.splitStringFunction(job1desc)}
                            />
                            <Jobs 
                            startYear='May 2018'
                            endYear='August 2018'
                            jobName='Development Team Intern at FEI Systems'
                            jobLocation='Columbia, Maryland'
                            jobDescription={this.splitStringFunction(job2desc)}
                            />



                    </Cell>
                </Grid>
                
            </div>
        )
    }

    splitStringFunction(text){
        let newText = text.split ('\n').map ((item, i) => <p>{item}</p>);
        return newText;
    }
}

export default AboutMe;