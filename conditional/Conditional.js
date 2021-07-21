import React from 'react';

function LoginButton(props) {
   return (
      <button onClick={props.onClick}>
         Login
      </button>
   );
}

function LogoutButton(props) {
   return (
      <button onClick={props.onClick}>
         Logout
      </button>
   );
}

function UserGreeting(props) {
   return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
   return <h1>Please sign up.</h1>;
}

function Greeting(props) {
   const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn == true) {
      return <UserGreeting />;
   }
   return <GuestGreeting />;
}

class IfElse extends React.Component {
    constructor() {
        super();
        this.state = {
            "isLoggedIn" : true
        }
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
    
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

class AndOperator extends React.Component {
    render() {
        const unReadMessages = this.props.unReadMessage;
        return (
        <div>
           <h1>Hello!</h1>
           {unReadMessages.length > 0 &&
           <h2>
              You have {unReadMessages.length} unread messages.
           </h2>
           }
        </div>
        );
    }
}

class ConditionalOperator extends React.Component {
    constructor(){
        super();
        this.state={
           isLoggined:false
        }
    }
    render() {
        const isLoggined = this.state.isLoggined;
        return (
        <div>
            {
                isLoggined ? ("Welcome") : ("Please Loggined")
            }
        </div>
        );
    }  
}

class Preventing extends React.Component {
    constructor(){
        super();
        this.state={
           isLoggined:true
        }
     }
     render() {
        const isLoggined = this.state.isLoggined;
        if(isLoggined){
            return null;
        }
        return (
           <h3>false</h3>
           // false 也有相同作用
        );
     }
  
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>If-Else</h1>
                <IfElse />
                <hr />
                <h1>Preventing</h1>
                <Preventing />
                <hr />
                <h1>"&&" Operator</h1>
                <AndOperator unReadMessage = "Hello" />
                <hr />
                <h1>Conditional Operator</h1>
                <ConditionalOperator />
            </div>
        );
    }
}

export default App;