import React, { useState } from "react";
import styles from "./Login.module.css";
import { getImageUrl } from "../../../utils";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export const Login = () => {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:5000/api/login', { username, password });
          localStorage.setItem('token', response.data.token);
          navigate('/landing');
      } catch (error) {
          console.error('Login failed:', error);
      }
  };

  return (
    <section>
        <div className={styles.container}>
            <img src={getImageUrl("assets/TML-Logo.png")} className="width-40 height-40" />
            <h2 className={styles.content}>Welcome to Fleet Express</h2>
      
            <h4 className={styles.title}>
                Collectively, the companies create a strategic supply chain and <br/> 
                logistics platform for the supply and distribution of goods and services <br />
                from source to the last mile.               
            </h4>
        <div className={styles.formControl}>
            <form onSubmit={handleSubmit} className={styles.formContent} >
          
                <input type="email" name='email' placeholder="Email Address" 
                  onChange={(e) => setValues({...values, email : e.target.value})}
                />
            
            
                <input type="password" name="password" placeholder="Password" 
                  onChange={(e) => setValues({...values, password : e.target.value})}
                />

              <div className={styles.formControl}>
                <button className={styles.buttonContent}>
                  Sign in
                </button>
                <button className={styles.buttonContent2}>
                  Forgot Password?
                </button>
              </div>
            </form>
        </div>

        
      </div>
    </section>
  );
};