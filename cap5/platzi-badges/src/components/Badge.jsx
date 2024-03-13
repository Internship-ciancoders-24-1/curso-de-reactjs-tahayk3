import React from 'react'
import confLogo from '../images/logo.webp';
import "./styles/Badge.css";

class Badge extends React.Component {
    render() {

        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img
                    className='Badge__avatar' 
                    src ={confLogo} 
                    alt="Logo" />
                </div>

                <div className='Badge__section-name'>
                    <img src ={this.props.avatarUrl} width="5%" alt="Avatar" />
                    <h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>

                <div className='Badge__section-info'>
                    <h3> {this.props.jobTitle} </h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className='Badge__footer'>
                    #platziconf
                </div>


            </div>
        )
    }
}

export default Badge;
