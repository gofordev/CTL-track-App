import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../images/logo.png'

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
            companyId: '',
			fullname: '',
			email: '',
            password: '',
            cPassword: ''
		};
    }

    handleCompanyIdChange = (e) => {
        this.setState({
            companyId: e.target.value
        })
    }

    handleFullNameChange = (e) => {
        this.setState({
            fullname: e.target.value
        })
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

    handleCPasswordChange = (e) => {
        this.setState({
            cPassword: e.target.value
        })
    }

    registerHandle = () => {
        console.log("registered!", this.state)
    }

	render() {
		return (
            <div className="signup">
                <div className="signup-sec d-flex">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="signup-form ">
                                    <h2>Register Your Account </h2>
                                    <form>
                                        <div className="form-group">
                                            <input 
                                                type="text"  
                                                className="form-control" 
                                                id="cid" 
                                                placeholder="Company ID"
                                                value={this.state.companyId}
                                                onChange={this.handleCompanyIdChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="text"  
                                                className="form-control" 
                                                id="name" 
                                                placeholder="Full Name"
                                                value={this.state.fullname}
                                                onChange={this.handleFullNameChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                            />
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
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="cpwd" 
                                                placeholder="Confirm Password"
                                                value={this.state.cPassword}
                                                onChange={this.handleCPasswordChange}
                                            />
                                        </div>
                                        <button className="btn btn-primary float-right" onClick={()=>this.registerHandle()}>Register</button> <br/><br/>
                                        <p>Already have an account, click <Link to="/login">here</Link> to Sign In</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Signup;
