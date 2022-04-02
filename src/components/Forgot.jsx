import React ,{Component} from 'react';
import {
    Link
} from "react-router-dom";

export class Forgot extends Component{
    render(){
        return (<div>
          <div class="container">
                <div class="row">
                    <h2 className="text-center">Forgot Password</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                 
                        </div>
                         
                        <button type="submit" class="btn btn-primary btn-block">Forgot password</button>
                        <br />
                        <p>Have an account ?? <Link to="/login" >Click here to Login</Link> 
                       Register ?? <Link to="/register" >Click here to Login</Link></p>
                    </form>
                </div>
            </div>
        </div>)
    }
}

export default Forgot ; 