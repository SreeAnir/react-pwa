import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

export class Login extends Component {
    render() {
        return (<div>
            <div class="container">
                <div class="row">
                    <h2 className="text-center">Login</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        <br />
                        <p>Forgot Password <Link to="/forgot" >Click here</Link></p>
                    </form>
                </div>
            </div>
        </div>)
    }
}

export default Login; 