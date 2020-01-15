import React, { Component } from 'react';
import './customers.css';
import {Link } from 'react-router-dom'

class DisplayUsers extends React.Component{
  constructor(){
    super();

    
    this.state= { questions: [] } 
  }
  componentDidMount(){
   this.setState({
      questions: this.getItems()
   })
  

  }

  getItems(){
fetch('/user-questions')
.then(recordset => recordset.json())
.then(results => { console.log(results.recordset); this.setState({'questions': results.recordset}); });

  }

  render () {
    
    console.log(this.state.questions)
    return (
    <ul>
      {this.state.questions && this.state.questions.map(function(question, index){

         
          
        return(
          <div className ="jumbotron">
        <li> Question ID: {question.QuestionId}</li>
        <li> Question:{question.Question}</li> 
        <li> <button>Accepted</button> <button>Declined</button></li>


        <li><textarea rows="4" cols="170" id="TITLE"></textarea></li>
        <li> <button><Link>Submit</Link></button></li>
        
          </div>
          
        )
           
        })
      
         } 

     </ul>   
    );    
  }
}

export default DisplayUsers;