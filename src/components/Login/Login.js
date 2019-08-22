import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

        this.state = {
			email: '',
            password: '',
            rememberMe: false
		};
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleRememberMeChange = (e) => {
        this.setState({
            rememberMe: !this.state.rememberMe
        })
    }

    loginHandle = () => {
        console.log("dskljf",this.state)
        this.props.history.push("/map")
    }


	render() {
		return (
			<div className="login">
                <div className="login-sec d-flex">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="login-form ">
                                    <h2>Log In Your Account </h2>
                                    <form>
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                            />
                                            <span><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="password"
                                                className="form-control" 
                                                id="pwd" 
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handlePasswordChange}
                                            />
                                            <span><i className="fas fa-lock"></i></span>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input 
                                                    type="checkbox"
                                                    checked={this.state.rememberMe}
                                                    onChange={this.handleRememberMeChange}
                                                /> Remember me</label>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-success" onClick={()=>this.loginHandle()}>Log In</button></div>
                                    </form>
                                    <h3>Forget your password ?</h3>


                                    <p>No problem, click <Link to="/">here</Link> to reset your password.</p>
                                    <p>New user? Create an account <Link to="/signup">here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default Login;