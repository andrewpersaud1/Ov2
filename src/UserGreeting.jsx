import PropTypes from 'prop-types';

function UserGreeting(props) {

    const Welcomemessage = <h2 className="Welcome-message">
                            Welcome {props.username}
                            </h2>

    const Loginprompt = <h2 className="Login-prompt">
                        Please log in to continue
                        </h2>



    return (props.isLoggedIn ? Welcomemessage : Loginprompt )
  
}

UserGreeting.propTypes = {
        isLoggedIn: PropTypes.bool,
        username: PropTypes.string,

}

UserGreeting.defaultProps= {
    isLoggedIn: false,
    username: "Guest"
}


export default UserGreeting;

//Example code to be put in app.jsx
// <UserGreeting isLoggedIn={true} username="Kenn"/>