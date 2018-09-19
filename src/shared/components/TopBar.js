import { h, Component } from 'preact';
import { Link } from 'preact-router'
import { connect } from 'unistore/preact';
class Topbar extends Component{
  state = {
    isOpen: false
  }
  toggle = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render({ isAuth, user },{ isOpen }){
    const showClass = isOpen ? 'show' : ''
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class={`navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 ${showClass}`}>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">All Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Users</a>
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <Link class="navbar-brand mx-auto" href="/">BookSharingApp</Link>
          <button class="navbar-toggler" type="button" onClick={this.toggle}>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class={`navbar-collapse collapse w-100 order-3 dual-collapse2 ${showClass}`}>
          {isAuth ?
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/profile" class="nav-link" href="/profile">{user.name}</Link>
              </li>
              <li class="nav-item">
                <Link to="/logout" class="nav-link" href="/logout">Logout</Link>
              </li>
            </ul>
          :
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/login" class="nav-link" href="/login" to="/login">Login</Link>
              </li>
              <li class="nav-item">
              <Link to="/login" class="nav-link" href="/signup" to="/signup">Signup</Link>
              </li>
            </ul>
          }
        </div>
      </nav>
    )
    // return (
    //   <Navbar color="dark" dark expand="md" fixed="top">
    //     <Link to="/" className="navbar-brand">BookSharingApp</Link>
    //     <NavbarToggler onClick={this.toggle} />
    //     <Collapse isOpen={this.state.isOpen} navbar>
    //       <Nav className="ml-auto" navbar>
    //        { isAuth || 
    //         <Fragment>
    //           <NavItem>
    //             <Link to="/login" className="nav-link">Login</Link>
    //           </NavItem>
    //           <NavItem>
    //             <Link to="/signup" className="nav-link">Signup</Link>
    //           </NavItem>
    //         </Fragment>
    //        }{ isAuth &&
    //         <UncontrolledDropdown nav inNavbar>
    //           <DropdownToggle nav caret>
    //             {user.name}
    //             </DropdownToggle>
    //           <DropdownMenu right>
    //             <Link to="/profile" className="dropdown-item">Profile</Link>
    //             <DropdownItem divider />
    //             <Link to="/logout" className="dropdown-item">Logout</Link>
    //           </DropdownMenu>
    //         </UncontrolledDropdown>
    //        }
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // )
  }
}

export default connect('isAuth,user')(Topbar);