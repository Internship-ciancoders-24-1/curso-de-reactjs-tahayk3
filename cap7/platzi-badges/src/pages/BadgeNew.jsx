import React from "react";

import '../components/styles/BadgeNew.css';
import logo from '../images/logo.webp';

import Badge from '../components/Badge';
import BadgeForm from   '../components/BadgeForm';
import PageLoading from "../components/PageLoading";

import api from "../api";

class BadgeNew extends React.Component{
    state = { form:{
        loading: false,
        error: null,
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',

    } };

    handleChange = e=>{

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
    
        try {
          await api.badges.create(this.state.form);
          this.setState({ loading: false });
    
          this.props.history.push("/badges");
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'firstName'}
                                lastName={this.state.form.lastName || 'lastName'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'jobTitle'}
                                email={this.state.form.email || 'email'}
                                avatarUrl="data:image/jpeg;base64,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"
                            />
                        </div>
                        <div className="col-6">
                        <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew