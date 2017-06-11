import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gmap from './gmap';




// class App extends React.Component {
//
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       categories: []
// //     };
// //   }
// //
// //
// // componentDidMount() {
// //   axios.get('http://localhost:3003/api/info')
// //     .then(res => {
// //       const data = res.data;
// //       var newData = striptags(data, [], '\n' );
// //       this.setState({categories:newData});
// //     });
// //   }
//
// render() {
//
//   return (
//
//     <div>
//       <h1>DATA LOOKS LIKE:</h1>
//
//     </div>
//
//     );
//   }
// }


function Navbar(prop){

  return(
    <div className="navbar navbar-default">
      <div className="navbar-header">
        <ul className="navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li className="color"><a href="#">Emergency Hotline: 1-800-000-000</a></li>
        </ul>
      </div>
    </div>
  );
}

function Header() {
  return(
    <div className="jumbotron">

      <h1> Montana Women </h1>
      <h3> Empowering Montana Women With the Resources They Need </h3>
      <h4> "The Women's Swiss Army Knife!"</h4>

    </div>
  );
}

function Box(prop) {
  var boxStyle = {
    backgroundColor: prop.bgcolor,
    display: "inline-block",
    padding: "5px",
    margin: "5px",
    textAlign: "center",
    fontSize: "20",
    // color: "white"

  };
  return (
    <div className= "col-lg-4" style={boxStyle}>
      <h2><a href={prop.link}> {prop.title} </a></h2>
      <p> {prop.description} </p>
    </div>
  );
}

function Row() {
  return(
  <div>
    <ul className='row'>
    <Box bgcolor="#8f3985" className="col-lg-4" title="Pharmacies" description="Find a pharmacy near you"/>
    <Box bgcolor="#1B998B" link="/doctors.html" className="col-lg-4" title="Doctors/Clinics" description="Find a clinic/doctor to suit your needs" />
    <Box bgcolor="#A44200" link="/counseling" className="col-lg-4" title="Counseling" description="Find the help you need." />
    </ul>

    <ul className='row'>
    <Box bgcolor="#C9621e" link="/birthcontrol.html" title="Birth Control Methods" description="Explore different methods" />
    <Box bgcolor="#D664BE" link="/resources.html" title="Resources" description="Connect with local women!" />
    <Box bgcolor="#1B998B" link="/symptomchecker.html" title="Symptom Checker" description=" blahhhhhh" />
    </ul>
  </div>
  );
}


function App() {
  return(
    <div>
      <Navbar />
      <Header/>
      <Row />
      <Gmap />
    </div>
  );
}

    ReactDOM.render(
      <App />,
      document.getElementById('container'));
