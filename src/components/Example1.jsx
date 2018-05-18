import React, { Component } from 'react';


class Example1 extends Component {
  render() {
    return (
      <div>
      	<img className="center" src={ require('../images/example1.png') } />
      	<p>
	      	Let’s pretend that we are using another website right now.
	      	<br />
			With this website, comments could be hosted and manipulated. This means that comments have the ability to be added onto, edited, deleted, and stored. It really depends on what the creator wants the users to be able to do while using his/her site. 
			<br />
			When creating the website, the programmer has to be careful with its HTML. Depending on how the programmer does it, there is a possibility of preventing hackers from abusing the comment section. Hackers can abuse comment sections by inserting their own JavaScript code. 
			<br />
			But wait! A programmer’s worries/concerns does not end here! As a website increasingly becomes more popular, more hackers would notice it. 
		</p>
      </div>
    );
  }
}

export default Example1;
