import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log('componentDidmount');
    const data = fetch("")
    
  }

  render() {

    console.log(this.props);
    const {name,location}=this.props
    
    
    return (
      <div>
        <h1>About Class Component</h1>
         <span>{name} || {location}</span>
      </div>
    );
  }
}

export default UserClass;
