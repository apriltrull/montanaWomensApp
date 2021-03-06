import React from 'react';
import Flexbox from 'flexbox-react';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';

    var headerStyle = {
       textAlign: "center"
     }

     var pStyle = {
     fontSize: "20px",
     padding: "5px",
     textAlign:"center"
   }

   var fontStyle = {
     fontSize: "18px",
     padding: "5px",
     textAlign:"center"
   }

     var webStyle = {
       textAlign:"center",
       fontSize: '1.5em'
     }

     var phStyle = {
       textAlign:"center"
     }

     var borderTop = {
       borderTopStyle:'solid',
       borderColor:'#a44200',
       borderWidth: '1px'
     }

     var borderBottom = {
       borderBottomStyle: 'solid',
       borderColor: '#a44200',
       borderWidth: '1px',
       fontSize: "18px",
       padding: "5px",
       textAlign:"center",
     }

     var topBottom= {
       borderTopStyle: 'solid',
       borderBottomStyle: 'solid',
       borderColor: '#a44200',
       borderWidth: '1px'
     }

      class List extends React.Component {

      render (){
       return (
         <div className="col counsel">
          <h1 style={headerStyle}> {this.props.title} </h1>
          <p  style={pStyle}> {this.props.description} </p>
          <a href='#'><h5 style={webStyle}> {this.props.website} </h5></a>
          <h6 style={borderBottom}> {this.props.number} </h6>
         </div>
       );

     }
   }

      class Rows extends React.Component {
        render (){
        return (
          <div style={topBottom}>
            <Flexbox justifyContent="center">
              <div className="col-md-6">
                <ul>
                  <List title="The Women's Club" description="A community fitness center for women. More than a gym. A community of women who inspire one another and walk out the door confident and rejuvenated." website="www.thewomensclub.com"/>
                  <List title="The Women's Center at U of M" description="We are a student-run, consensus based organization dedicated to raising awareness of women's, gender, and sexuality issues. We provide a current list of organizations and professionals that serve and assist women in Western Montana, as well as a safe place to meet people interested in discussing and actively responding to pertinent issues in our community. Our mission is to actively represent 21st century feminism as a dynamic discipline concerned with all issues of gender and inequality.  We are serious about advancing our agenda of tolerance, education and equality, but we love to have fun while we do it." website="www.facebook.com/umwomensresourcecenter"/>
                  <List title="WORD - Women's Opportunity & Resource Development, Inc." description= "WORD creates opportunities, programs and policies that inspire and support women’s development, leadership and choice, for the benefit of our entire community." website="womensopportunityandresourcedevelopment.wordpress.com/about"/>
                  <List title="Montana Women Vote" description="Montana Women Vote is a coalition of non-profit organizations dedicated to educating and mobilizing low-income women and their allies to participate in the democratic process as informed voters, policy advocates, and community leaders."  website="www.montanawomenvote.org/about-mwv/history-and-mission/" number='406-543-3747'/>
                  <List title="Women's Voices for the Earth" description="Women’s Voices for the Earth amplifies women’s voices to eliminate the toxic chemicals that harm our health and communities."  website="www.womensvoices.org"/>
                  <List title="YWCA Missoula" description="YWCA Missoula is dedicated to eliminating racism, empowering women and promoting peace, justice, freedom and dignity for all. The YWCA opens doors to opportunity and self-sufﬁciency for women and families facing poverty, violence and discrimination."  website="ywcaofmissoula.org" number= "24 crisis: 1-800-483-7858"/>
                  <List title="Montana Coalition Against Domestic & Sexual Violence" description="(MCADSV) is a statewide coalition of individuals and organizations working together to end domestic and sexual violence through advocacy, public education, public policy, and program development. Our mission is to support and facilitate networking among our member organizations while advocating for social change in Montana."  website="mcadsv.com" number="National Domestic Violence Hotline:1-800-799-7233 National Sexual Assault Hotline: 1-800-656-4673"/>
                  <List title="Powerhouse Montana" description="PowerHouse Montana is a new initiative of the Women’s Foundation of Montana with two goals in mind: (1) connecting Montana women with the resources, mentors and opportunities they need to create thriving businesses and thriving lives, (2) increasing the number of Montana women in leadership by providing a go-to source for organizations and companies looking for their next CEO or board chair." website="www.powerhousemt.org" number="406-461-7695"/>
                  <List title="League of Women Voters" description="The League of Women Voters is a nonpartisan political organization encouraging informed and active participation in government. It influences public policy through education and advocacy." website="lwvmt.org"/>
                </ul>
              </div>
            </Flexbox>
          </div>
        );
      }
   }

 export default class Resources extends React.Component {

    render () {

      return (
        <div>
        <Jumbotron style={{backgroundImage:"url('./css/img/resource.png')", backgroundPosition: "center"}}>
          <JumbotronCol style={{width:'40%'}}>
            <div style={{height: '400px'}}>
              <img style={{paddingTop: '100px', paddingLeft:'100px', paddingBottom:'80px'}} src="css/img/health-symbol-sm.png" />
            </div>
          </JumbotronCol>

           <JumbotronCol  style={{width: '60%'}}>
            <div style={{height: '400px', paddingTop: '125px', paddingBottom:'20px'}}>
             <h1 style={{fontSize:'5em', paddingRight:'165px'}}>Resources</h1>
             <h3>Connect with local women in your area! </h3>
             </div>
          </JumbotronCol>
        </Jumbotron>
          <Rows/>
       </div>
      );
    }
  }
