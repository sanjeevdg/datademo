import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [persons, setPersons] = useState([]);

useEffect(() => {

axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        setPersons(persons);
      });

}, []);


  return (
    <>
<div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:30}}>
<h1>Persons on the list</h1>

</div>
<p align='center'>Some helpful help text</p>
    <div className="container">

    <div className="accordion" id="myAccordion">
   
    {
          persons.map(person =>

    <div className="accordion-item" key={person.id}>
        <h2 className="accordion-header" id="headingOne">
            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={'#'+person.username}>
            <span className="badge bg-dark">{person.id}</span>&nbsp;&nbsp; {person.name}
            </button>									
        </h2>
        <div id={person.username} className="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div className="card-body">
                <div className="card-text">

                    <div className="float-none">

        <table class="table">
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>{person.name}</td>
            </tr> 
            <tr>
                <th scope="row">Address</th>
                <td>{person.address.street}, {person.address.suite}, {person.address.city}, {person.address.zipcode}</td>
            </tr> 
            <tr>
                <th scope="row">Email</th>
                <td>{person.email}</td>
            </tr> 
            <tr>
                <th scope="row">Phone</th>
                <td>{person.phone}</td>
            </tr> 
            <tr>
                <th scope="row">Website</th>
                <td><a href={'http://'+person.website}>{person.website}</a></td>
            </tr> 
            <tr>
                <th scope="row">Company</th>
                <td>{person.company.name}, {person.company.catchPhrase}, {person.company.bs}</td>
            </tr>     
        </tbody>
        </table>

                    </div>                   
        </div>
            </div>
        </div>
    </div>
 )
        }
    </div>
    </div>
    </>
  );
}

export default App;
