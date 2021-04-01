import React, { Component } from 'react'
import Card from'./CardUI'; 

import img1 from'../assets/iitjee.jpeg';
import img2 from'../assets/neet.jpeg';
import img3 from'../assets/college.jpg'; 


class Cards extends Component{
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                   <div className="col-md-4"> 
                   <Card imgsrc={img1}
                     text='One to one Advice,  
                          24 hours Assitance,  
                          Logical Learning,
                          Mentors from IIT/NIT,
                          Study Material' 
                    
                   />
                   </div> 
                   <div className="col-md-4"> 
                   <Card imgsrc={img2}
                       text='Mentors From AIIMS,
                        Time Management, 

                      One to One Advice,

                        24X7 Assistance,

                      Study Material'
                    />
                   </div> 
                   <div className="col-md-4">
                   <Card imgsrc={img3} 
                       text='Mock Placement,

                       Talk to Placed IITians, 

                        Skill Development,

                     Personal Guidance,

                      Internship Oppurtunities'
                         />
                   </div>  
                </div>
            </div>
        );
    }
} 

export default Cards;