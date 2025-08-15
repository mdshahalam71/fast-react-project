 import React from 'react'
   const exploreStyle={
    border:"2px solid red",
    padding:'40px 100px',
    backgroundColor:"BlanchedAlmond",
    width:'500px',
    margin:'auto',
    marginTop:'20px'
   }
 const ExploreData = (props) => {
      
   return (
     <div style={exploreStyle}>
        <h1>Hello,Students</h1>
        <h2>Name : {props.name}</h2>
        <p>Age : {props.age}</p>
        <p>Profission : {props.profission}</p>
     </div>
   )
 }
 
 export default ExploreData