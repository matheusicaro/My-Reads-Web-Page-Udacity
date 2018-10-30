import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import DropDownMenu from 'material-ui/DropDownMenu';


import './Login.css'

import Form from './Form'

const Login = (props) => {

  const {errorAcess} = props;

  const create = (user) => {
    props.createUser(user)
  }

  const login = (user) => {
    props.logon(user)
  }

  return (
    <div className="slider">
      <div className="load">
        <div className="menu-login">
          <Form create={create} logon={login} errorAcess={errorAcess}></Form>
        </div>
      </div>
    </div >
  )
}

export default Login
