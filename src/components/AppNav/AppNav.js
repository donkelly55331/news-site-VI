import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';
import navItems from '../../config/Sections.json';
import UserContext from '../../contexts/userContext';


class AppNav extends Component {

  render() {
    return (
 
      <Navbar color="light">
        {navItems.map((navItem) =>
          <NavItem>
            <Link to={`/sections/${navItem.value}`} >
              { navItem.label }
            </Link>
          </NavItem>
        )}
          <div>
          {this.context ?
            <NavItem>
              <Link to="/add-article">Add an Article</Link>
            </NavItem>
            :
            null
          }
            <NavItem>
              <Link to="/LogoutPage">Logout</Link>
            </NavItem>
            <NavItem>
              <Link to="/Login">Login</Link>
            </NavItem>
          </div>
      </Navbar>
    )
  }
}

AppNav.contextType=UserContext

export default AppNav;


// Functional solution:
// function AppNav() {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <NavItem>
//           <Link to={`/sections/${navItem.value}`} >
//             {navItem.label}
//           </Link>
//         </NavItem>
//       )}
//       <NavItem>
//         <Link to="/add-article">Add an Article</Link>
//       </NavItem>
//     </Navbar>
//   );
// }
