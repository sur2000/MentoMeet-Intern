import React from "react"; 
import'./card-style.css'; 
import { Button } from './Button' 

const Card = props =>{ 
    return(
        
        <div className='card text-center shadow'> 
         <div className='overflow'>
             <img src={props.imgsrc}alt='image 1'className='card-img-top'/>
         </div> 
          <div className='card-body text-dark'> 
          <p className='card.text'>{props.text}</p>
            
            </div>

            <div className='hero-btns'>
                
                <div className='btn1'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>See our Plans</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Try for Free</Button></div>
                </div>
          </div> 
        ); 
}
export default Card;