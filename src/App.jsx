import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './App.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <form onSubmit={handleLogin}>
          <h2>Login</h2>
            <div>
              <label>Username: </label>
              <input
                className='inputbox'
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className='icon'/>
            </div>
            <div>
              <label>Password: </label>
              <input
                className='inputbox'
                type="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className='icon'/>
            </div>
            <div className='last1'>
            <p>Remember me</p>
            <a href='#'>Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className='last2'>
            <p>Dont'n have an Account?</p>
            <a href='#'>Register</a>
            </div>
          </form>
        </div>
      ) : (
        <MarksEntry />
      )}
    </div>
  );
}


function MarksEntry() {
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
  });

  const [submittedMarks, setSubmittedMarks] = useState([]);

  const handleChange = (e) => {
    setMarks({
      ...marks,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = () => {
    const total = Object.values(marks).reduce((acc, mark) => acc + parseInt(mark || 0), 0);
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    
    
    if (Object.values(marks).every((mark) => mark >= 0 && mark <= 100)) {
      setSubmittedMarks([
        ...submittedMarks,
        {
          ...marks,
          total,
        },
      ]);
      setMarks({
        subject1: '',
        subject2: '',
        subject3: '',
        subject4: '',
        subject5: '',
      });
    } else {
      alert('Please enter valid marks between 0 and 100 for all subjects');
    }
  };

  return (
    <div>
      <h2>Enter Marks for 5 Subjects</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tamil: </label>
          <input
          className='inputbox'
            type="number"
            name="subject1"
            value={marks.subject1}
            onChange={handleChange}
            max="100"
            min="0"
            required
          />
        </div>
        <div>
          <label>English: </label>
          <input
          className='inputbox'
            type="number"
            name="subject2"
            value={marks.subject2}
            onChange={handleChange}
            max="100"
            min="0"
            required
          />
        </div>
        <div>
          <label>Maths: </label>
          <input
          className='inputbox'
            type="number"
            name="subject3"
            value={marks.subject3}
            onChange={handleChange}
            max="100"
            min="0"
            required
          />
        </div>
        <div>
          <label>Science: </label>
          <input
          className='inputbox'
            type="number"
            name="subject4"
            value={marks.subject4}
            onChange={handleChange}
            max="100"
            min="0"
            required
          />
        </div>
        <div>
          <label>Social: </label>
          <input
          className='inputbox'
            type="number"
            name="subject5"
            value={marks.subject5}
            onChange={handleChange}
            max="100"
            min="0"
            required
          />
        </div>
        <button type="submit">Submit Marks</button>
      </form>
      
      <h3>Entered Marks Table</h3>
      <table>
        <thead>
          <tr>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {submittedMarks.map((marks, index) => (
            <tr key={index}>
              <td>{marks.subject1}</td>
              <td>{marks.subject2}</td>
              <td>{marks.subject3}</td>
              <td>{marks.subject4}</td>
              <td>{marks.subject5}</td>
              <td>{marks.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Login;
