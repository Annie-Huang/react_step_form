import React, {Component} from 'react';

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // Proceed to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        // This way of writing code is a bit strange
        const values = { firstName, lastName, email, occupation, city, bio };
        return (
            <div>
                
            </div>
        );
    }
}

export default UserForm;
