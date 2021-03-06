import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">REGISTER</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="login"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
                    </div>

                </div>

            </div>

            <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
            </div>
            
        );
    }
}