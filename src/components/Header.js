import React, {Component} from "react";


export class Header extends Component {
  facebook() {
    window.open("https://www.facebook.com/blossomcarenetwork.org");
  }
  twitter() {
    window.open("https://twitter.com/BlossomCareCO");
  }
  linkedin() {
    window.open("https://www.linkedin.com/company/3800360/");
  }
  youtube() {
    window.open("https://www.youtube.com/channel/UCA1mpGozH327Ca2NfSSYUEQ");
  }
  render() {

    return (

      <div id="documenter_sidebar">
        <img className="logo"  src="./image/CustomMentorLogo.png"/>
        <ul  className="nav" >
          <li><a href ="#signin"> Signin</a></li>
          <li><a href ="#about"> About</a></li>
          <li><a href ="#contact"> Contact</a></li>
        </ul>
        <div className="socialLinks">
          <i onClick={this.facebook} className="fa fa-facebook-official"></i>
          <i onClick={this.twitter} className="fa fa-twitter-square"></i>
          <i onClick={this.linkedin} className="fa fa-linkedin-square"></i>
          <i onClick={this.youtube} className="fa fa-youtube-square"></i>
        </div>

      </div>

    );
  };
}