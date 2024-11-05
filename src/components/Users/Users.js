import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Users.module.css';

function Users({name, age, isAdmin}){
  const [email,setEmail] =useState("")
  const [location,setLocation] =useState("")
  const [uname,setUname] =useState("")
  const [username,setUsername] =useState("")


  const users = [
    {id:1, name:"John Doe", loction:"Nairobi"},
    {id:2, name:"Jane Doe", loction:"Kisumu"},
    {id:3, name:"Steve Jobs", loction:"Mombasa"}
  ]
  
  const userInfo = users.map((userObj)) => {

  }

  function handleClick(){
    alert("Button clicked")
  }

  return (
    <div className = {styles.Users}>

      <ul>
        {isAdmin ? <li>{name} {age}</li> : <li>Current User is not admin</li>}
      </ul>
    </div>
  )
  
}

const Users = () => (
  <div className={styles.Users}>
    Users Component
  </div>
);

Users.propTypes = {};

Users.defaultProps = {};

export default Users;
