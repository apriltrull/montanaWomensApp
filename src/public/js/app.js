
// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
//
// import xml2js from 'xml2js';
// // import striptags from 'striptags';
//
//
//
//
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
//
// infowindow = new google.maps.InfoWindow();
//    var service = new google.maps.places.PlacesService(map);
//    service.nearbySearch({
//      location: missoula,
//      radius: 5000,
//      type: ['pharmacy']
//    }, callback);
//  }
//
//
//     </div>
//
//     );
//   }
// }
//
//
// function Navbar(prop){
//
//   return(
//     <div className="navbar navbar-default">
//       <div className="navbar-header">
//        <div className='dropdown'>
//         <button className = 'btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle ='dropdown'
//         aria-haspopup='true' aria-expanded='false'>
//         Help Line
//         </button>
//       <div className='dropdownMenu' aria-labelledby='dropdownMenuButton'>
//         <a className ='dropdownItem' href='#'> Emergency call 911</a>
//         <a className ='dropdownItem' href='#'> Drug and Alcohol Abuse 1-(855)603-2445</a>
//         <a className ='dropdownItem' href='#'> Domestic Violence Hotline 1-(800)799-7233</a>
//        </div>
//       </div>
//       //  <ul className="navbar-nav">
//         //  <li className="active"><a href="#">Home</a></li>
//           //<li className="color"><a href="#">Emergency Hotline: 1-800-000-000</a></li>
//         //</ul>
//       </div>
//     </div>
//   );
// }
//
// function Header() {
//   return(
//     <div className="jumbotron">
//
//       <h1> Montana Women </h1>
//       <h3> Empowering Montana Women With the Resources They Need </h3>
//       <h4> "The Women's Swiss Army Knife!"</h4>
//
//     </div>
//   );
// }
//
// function Box(prop) {
//   var boxStyle = {
//     backgroundColor: prop.bgcolor,
//     display: "inline-block",
//     padding: "5px",
//     margin: "5px",
//     textAlign: "center",
//     fontSize: 20,
//     // color: "white"
//
//   };
//   return (
//     <div className= "col-lg-4" style={boxStyle}>
//       <h2><a href={prop.link}> {prop.title} </a></h2>
//       <p> {prop.description} </p>
//     </div>
//   );
// }
//
// function Row() {
//   render:function(){
//     var rowStyle={
//       WebkitFilter: 'drop-shadow(0px 0px 5px  #666)',
//       filter: 'drop-shadow(0px 0px 5px #666)'
//    };
//   return(
//   <div>
//     <ul className='row'>
//     <Box bgcolor="#8f3985" className="col-lg-4" title="Pharmacies" description="Find a pharmacy near you"/>
//     <Box bgcolor="#1B998B" link="/doctors.html" className="col-lg-4" title="Doctors/Clinics" description="Find a clinic/doctor to suit your needs" />
//     <Box bgcolor="#A44200" link="/counseling" className="col-lg-4" title="Counseling" description="Find the help you need." />
//     </ul>
//
//     <ul className='row'>
//     <Box bgcolor="#C9621e" link="/birthcontrol.html" title="Birth Control Methods" description="Explore different methods" />
//     <Box bgcolor="#D664BE" link="/resources.html" title="Resources" description="Connect with local women!" />
//     <Box bgcolor="#1B998B" link="/symptomchecker.html" title="Symptom Checker" description=" blahhhhhh" />
//     </ul>
//   </div>
//   );
//  }
// }
//
//
// function App() {
//   return(
//     <div>
//       <Navbar />
//       <Header/>
//       <Row />
//       <Gmap />
//     </div>
//   );
// }
//
//     ReactDOM.render(
//       <App />,
//       document.getElementById('container'));
//=======
//  function callback(results, status) {
//    if (status === google.maps.places.PlacesServiceStatus.OK) {
//      for (var i = 0; i < results.length; i++) {
//        createMarker(results[i]);
//      }
//    }
//  }
//  export default class GooglePlaces extends React.Component{
//
//    var Google_Places_API_key='AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE';
//
//    var BaseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&type=pharmacy';
//  getInitialState: function(){
//    return {
//      data:[]
//
//    }
//  },
//   componentDidMount:function(){
//     var _this=this;
//     this.serverRequest =
//
//  axios
//  .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&type=pharmacy&key')
//    .then(function (response) {
//      _this.setState({
//
//      console.log(response);
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//
//  }
// }
// >>>>>>> 8cae1d80200462d261597d55b41e1a5133e86c0c
