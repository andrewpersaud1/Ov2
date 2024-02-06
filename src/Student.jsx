//Props: read-only properties that are shared between components
//  a parent component can send data to a child component
// Component key=value


import PropTypes from 'prop-types';

function Student (props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "No"}</p>
        </div>
    )
}
//These are PropTypes and they allow you to check if the type of your prop
//is correct
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,

}

export default Student

// Here is code that represents what you would use in your app component
// to show the relationship
{/* <Student name="Spongebob" age={30} isStudent={true}/>
<Student name="Patrick" age={42} isStudent={false}/>
<Student name="Squidward" age={50} isStudent={false}/>
<Student name="Sandy" age={27} isStudent={true}/>
<Student/> */}