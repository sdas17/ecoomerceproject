import React from 'react';
import UseDumy from '../hooks/UseDumy';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log('componentDidmount');
    
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <UseDumy.Consumer>
          {
            (data)=>(<h2>{data.firstName}</h2>)
          }
        </UseDumy.Consumer>
        <UserClass name={'Vasu (class)'} location={'Badvel class'}/>

      </div>
    );
  }
}

export default About;
