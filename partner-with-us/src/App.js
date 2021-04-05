import React from 'react';
import './App.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import img1 from'./assets/google.jpg';
import img2 from'./assets/Amazon.jpg';
import img3 from'./assets/facebook.jpg';
import img4 from'./assets/airbnb.jpg'; 
import img5 from'./assets/ccc.jpeg'; 
 

const App = () => {
  return (
    <React.Fragment> 
     <img src={img5} class=" mt-4" 
       height="220px" 
       width="1300px"
     />
    <div className="row mt-4 ml-5 mr-5">
    <div className="col-sm  mr-3">
    <div class="card">
  <img src={img1} class="card-img-top mt-3" 
    height="120px" 
  />
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>
    <div className="col-sm mr-3">
    <div class="card" >
  <img src={img2} class="card-img-top mt-3"  
   height="120px" 
   />
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div> 
    <div className="col-sm mr-3">
    <div class="card">
  <img src={img3} class="card-img-top mt-3" 
     height="120px"
  />
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card">
  <img src={img4} class="card-img-top mt-3" alt="..." 
     height="120px"
  />
  <div class="card-body">
   
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
  </div>
    </div>
   </div> 
   
   <a href="#" class="btn btn-primary mt-5 ml-3 btn btn-warning">Partner With Us</a>


    </React.Fragment>
  );
}

export default App;
