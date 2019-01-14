import  React from 'react';
import PropTypes from 'prop-types';

//textarea component
class Textarea extends React.Component {
  static defaultProps = {
    value: '',
    name: "email"

  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  state = {
    value: this.props.value
  };

  render () {
    const handleChange = event => {
      this.setState({value: event.target.value});
    }

    return (
      <textarea ref='email'
                name={this.props.name}
                defaultValue={this.state.value}
                onChange={this.handleChange}
                className="input-i"
                cols="30"
                rows="7"/>

    );
  }
}

export default Textarea;
