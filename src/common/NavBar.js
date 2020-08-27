import React from 'react';
import { Nav, Icon } from 'rsuite';
import { Link } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';

const styles = {
  marginBottom: 50
};


const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
      <Link to="/">
        <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
          Home
      </Nav.Item>
      </Link>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  render() {
    const { active } = this.state.active;
    return (
      <div>
        <CustomNav appearance="tabs" active={active} onSelect={this.handleSelect} />
      </div>
    );
  }
}


export default NavBar;
