import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../images/logo.png'

class Reset extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayReset = this.displayReset.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayReset(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayReset}>
					<h2>Reset your password</h2>

                    <div className="logo">
                        <img src ={Logo} />
                    </div>
					<div className="email">
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="New Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="password1" />
					</div>

					<input type="submit" value="Reset" />
				</form>
                <p>click <Link to="/login">here</Link> to back</p>
				
			</div>
		);
	}
}

export default Reset;
