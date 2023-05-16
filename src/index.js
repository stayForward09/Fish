import React from 'react';
import ReactDOM from 'react-dom';
import HomeOne from './HomeOne';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
			  <Route path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/> 
			  
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

