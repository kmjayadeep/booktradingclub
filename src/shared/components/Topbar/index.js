import { h, Component } from 'preact';
import { Link } from 'preact-router'
import { connect } from 'unistore/preact';

import './Topbar.css';
class Topbar extends Component{
  state = {
    isOpen: false,
    dropdown: false
  }
  toggle = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropDown = ()=>{
    this.setState({
      dropdown: !this.state.dropdown
    })
  }
  render({ auth },{ isOpen, dropdown }){
    const showClass = isOpen ? 'show' : ''
    const showDropdown = dropdown ? 'show' : ''
    return (
      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
        <div class={`navbar-collapse collapse order-1 order-md-0 dual-collapse2 ${showClass} flex_1`}>
          <ul class="navbar-nav align-items-center">
            <li class="nav-item">
              <Link class="nav-link" href="/allbooks">All Books</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/users">Users</Link>
            </li>
          </ul>
        </div>
        <div class="order-0">
          <button class="navbar-toggler" type="button" onClick={this.toggle}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class={`navbar-brand booksharing_brand`} href="/">BookSharingApp</Link>
        </div>
        <div class={`navbar-collapse collapse order-2 dual-collapse2 ${showClass} flex_1`}>
          {auth.isAuth ?
            <ul class="navbar-nav justify-content-end align-items-center w-100">
              <li class="nav-item">
                <Link to="/mybooks" class="nav-link" href="/mybooks">My Books</Link>
              </li>
              <li class="nav-item dropdown d-none d-md-block">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={this.dropDown}>
                {auth.user.name}
                </a>
                <div class={`dropdown-menu ${showDropdown}`} aria-labelledby="navbarDropdown">
                  <Link href="/profile" class="dropdown-item">Profile</Link>
                  <Link href="/logout" class="dropdown-item">Logout</Link>
                </div>
              </li>
              <li class="nav-item d-block d-md-none">
                <Link to="/profile" class="nav-link" href="/profile">{auth.user.name}</Link>
              </li>
              <li class="nav-item d-block d-md-none">
                <Link to="/profile" class="nav-link" href="/logout">Logout</Link>
              </li>
            </ul>
          :
            <ul class="navbar-nav flex-md-row-reverse align-items-center w-100">
              <li class="nav-item">
                <Link class="nav-link" href="/login">Login</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" href="/signup">Signup</Link>
              </li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

export default connect('auth')(Topbar);