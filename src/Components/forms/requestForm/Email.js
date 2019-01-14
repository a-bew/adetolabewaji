import  React from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';

//checkbox component
class Email extends React.Component {

  static defaultProps = {
    value: '',
    name: "email",
    id: "email",
    placeholder: "Your email..."
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: emailPropType.isRequired, // can also specify emailPropType if it is not required
    placeholder: PropTypes.string.isRequired
  }

  state = {
    value: this.props.value
  };

  render () {
    const handleChange = () => {
      this.setState({value: !this.state.value})
    }

    return (
      <span>
        <input type="email"
               defaultValue={this.state.value}
               onChange={this.handleChange}
               id={this.props.id}
               name={this.props.name}
               placeholder = {this.props.placeholder}
               className = "input_i" />
      </span>
    );
  }
}

export default Email;
