import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.css';

function Usrs({name, age, isAdmin}){
  const [name, setName] = useState("Mike")

  const users = [
    {id:1, name: "John Doe", location: "Nairobi"}
  ]
}

const User = () => (
  <div className={styles.User}>

    function handleOnChange(e){
      console.log(e.target.value)
    }

    functtion handleSubmit(e){
      setUsername(e.target.username.value);
      setName(e.target.name.value);
      setLocation(e.target.location.value);
      setEmail(e.target.email.value);


    }
    
    {/*inClick onSubmit on Change*/}
    <form onSubmit={handleSubmit}>
      <input placeholder='username' id="username"/>
      <input placeholder='name' id="name" type='string'/>
      <input placeholder='location' id="location" type='string'/>
      <input placeholder='email' id="email" type='email'/>

      <button type='submit'>Click Me!</button>


      
    </form>
    <button onClick={handleClick}>Click Me!</button>
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
