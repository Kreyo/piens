import React from 'react';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', email: '', error: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, surname, email } = this.state;
        if (!name || !surname || !email) {
            this.setState({ error: 'Please fill in all fields!' });
            return;
        }

        fetch(`${process.env.REACT_APP_API_HOST}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
           body: JSON.stringify({ name, surname, email })
        })
            .then(() => {
                window.location.href='/';
            });
    }

    handleChange(event, field) {
        this.setState({[field]: event.target.value});
    }

    render() {
        return (
            <div className='container'>
                { this.state.error && <div className='alert alert-danger'>{ this.state.error }</div> }
                <form className='form-signin' onSubmit={this.handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal'>Add a user</h1>
                    <label htmlFor='inputName' className='sr-only'>Name</label>
                    <input type='text' id='inputName' className='form-control' placeholder='Enter name' required=''
                           autoFocus='' onChange={e => this.handleChange(e, 'name')}/>
                    <label htmlFor='inputSurname' className='sr-only'>Surname</label>
                    <input type='text' id='inputSurname' className='form-control' placeholder='Enter surname'
                           required='' onChange={e => this.handleChange(e, 'surname')}/>
                    <label htmlFor='inputEmail' className='sr-only'>Email</label>
                    <input required type='email' id='inputEmail' className='form-control' placeholder='Enter email'
                           onChange={e => this.handleChange(e, 'email')}/>
                    <br/>
                    <button onClick={this.handleSubmit} className='btn btn-lg btn-primary btn-block' type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;
