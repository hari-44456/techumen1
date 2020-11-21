import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const RenderError = ({ error }) => (
	<div
		className='alert alert-warning alert-dismissible fade show'
		role='alert'>
		<strong>{error}</strong>
		<button
			type='button'
			className='close'
			data-dismiss='alert'
			aria-label='Close'>
			<span aria-hidden='true'>&times;</span>
		</button>
	</div>
);

const Index = () => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
  const[token,setToken]=useState(null);

  const [events,setEvents]=useState(null);



	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { username: email, password: password };

		axios
			.post('http://localhost:5000/auth/login', data)
			.then((res) => 
				setToken( res.data ))
			.catch((err) => 
				setError(err.response.data)
			);
	};

	useEffect(() => {
    if(token) {
      const headers={
        "auth-token":token
      }
      axios
        .get('http://localhost:5000/auth/details',{headers})
        .then((res) => 
          setEvents(res.data)
        )
        .catch((err) => console.log(err));
    }
  },[token,setToken]);

	return (
		<>
			<div className='container' id='custom'>
				<h1 style={{ textAlign: 'center' }}>Login</h1>
				{error !== '' ? <RenderError error={error} /> : ''}
        
				<Form onSubmit={handleSubmit} method='POST'>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter email'
							required
							name='email'
							className='input'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</Form.Group>

					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							required
							name='password'
							className='input'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
					Login
					</Button>
          	
				</Form>
        { events ? <RenderEvents  events={events} />:'' }
			</div>
		</>
	);
};


const RenderEvents=({ events })=>{
  return(
    <ul>
      {events.map(event=><li key={event._id} style={{display:'flex'}}>
        <p>{event._id} {event.Count}</p>
      </li>)}
    </ul>
  )
 
}
export default Index;