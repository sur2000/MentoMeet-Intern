import React, { Component } from 'react' 
import './CSS/todo.css' 
import axios from 'axios'; 

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: "", 
            price: "", 
            nameofpdf: "",
            description: "",
            
        
}
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    categoryhandler = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    pricehandler = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    nameofpdfhandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    descriptionhandler = (event) => {
        this.setState({
            brief: event.target.value
        })
    } 
    
    
    handleSubmit = (event) => {
        alert(`${this.state.title} ${this.state.brief}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            category: "", 
            price: "", 
            nameofpdf: "",
            description: "",

        })
     event.preventDefault() 
     
        
    } 
    state = {
 
        // Initially, no file is selected
        selectedFile: null
      };
      
      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      };
      
      // On file upload (click the upload button)
      onFileUpload = () => {
      
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      
        if (this.state.selectedFile) {
           
          return (
            <div>
              <h2>File Details:</h2>
               
  <p>File Name: {this.state.selectedFile.name}</p>
   
               
  <p>File Type: {this.state.selectedFile.type}</p>
   
               
  <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
   
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h5>Choose before Pressing the Upload button</h5>
            </div>
          );
        }
      }; 
    

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Notes Upload</h1>
                    
                    <label>Category :</label> <select onChange={this.genderhandler} defaultValue="Select Category">
                        <option defaultValue>Select Category</option>
                        <option value="iit jee">IIT JEE</option>
                        <option value="neet">NEET</option> 
                        <option value="carrer">Career</option>
                    </select><br /> 
                    <label>Price :</label> <select onChange={this.positionhandler} defaultValue="Select Price">
                        <option defaultValue>Select Price</option>
                        <option value="free">Free</option>
                        <option value="premium">Premium</option>
                    </select><br /> 
                    <label>Name of PDF :</label> <input type="text" value={this.state.title} onChange={this.nameofpdfhandler} placeholder="title..." /><br />
                    <label>Description :</label> <input type="text" value={this.state.brief} onChange={this.descriptionhandler} placeholder="brief..." /><br />
                    
                    <input type="file" onChange={this.onFileChange} />
                      <button onClick={this.onFileUpload}>
                       Upload!
                     </button>
                     {this.fileData()} 

                    <input type="submit" value="Submit" /> 

                </form>

            </div>
            
        )
    } 

    }

export default Form