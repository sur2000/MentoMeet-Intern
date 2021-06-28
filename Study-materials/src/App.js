import React from 'react';
import './App.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img2 from'./assets/I.jpg'; 
import img1 from'./assets/D.jpg'; 
import img3 from'./assets/image.jpg'; 
 

function App() {
  return (
    <div className="App mt-5">
     <h1 > STUDY MATERIALS </h1> 
     
<div className="btn-group">
  <button type="button" class="btn btn-info">Categories</button>
  <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    
    
  </ul>
</div> 

<div className="card-group mt-5">
  <div className="card text-dark border-warning" >
    <img src={img1} className="card-img-top" />
    <div className="card-body">
    
    <table class="table table-hover">
  <thead>
    <tr class="table-info">
      <th scope="col"><img src={img3} height="30" width="40" class="rounded float-start"/> </th>
      <th scope="col">NAME</th> 
      <th scope="col">PDF</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table">
      <th scope="row">1</th>
      <td>Mark Otto</td> 
      <td>  <a href="#" class="btn btn-outline-info">Download</a> </td>
    </tr>
    <tr class="table-info">
      <th scope="row">2</th>
      <td>Jacob</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>

      </tr>
    <tr class="table">
      <th scope="row">3</th>
      <td>Larry</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
    </tr> 
    <tr class="table-info">
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
    </tr> 
    <tr class="table" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    <tr class="table-info" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    <tr class="table" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    
  </tbody> 
</table> 

    </div>
  </div>
  <div className="card text-dark border-warning" >
    <img src={img2} className="card-img-top"  />
    <div className="card-body">
    <table class="table table-hover">
  <thead>
    <tr class="table-info">
      <th scope="col"> <img src={img3} height="30" width="40" class="rounded float-start"/> </th>
      <th scope="col">NAME</th> 
      <th scope="col">PDF</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table" >
      <th scope="row">1</th>
      <td>Mark Otto</td> 
      <td>  <a href="#" class="btn btn-outline-info">Download</a> </td>
    </tr>
    <tr class="table-info" >
      <th scope="row">2</th>
      <td>Jacob</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>

      </tr>
    <tr class="table" >
      <th scope="row">3</th>
      <td>Larry</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    <tr class="table-info" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    <tr class="table" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    <tr class="table-info" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr> 
    <tr class="table" >
      <th scope="row">4</th>
      <td>Shri</td> 
      <td> <a href="#" class="btn btn-outline-info">Download</a> </td>
      
    </tr>
  </tbody>
</table> 
      
    </div>
  </div> 

  </div>


    </div>
  );
}

export default App;
