import React 											from 'react';
import {
	Router, 
	Route,
	hashHistory
} 																from 'react-router';
import injectTapEventPlugin 			from 'react-tap-event-plugin';
import AppBar 										from 'material-ui/AppBar';
import getMuiTheme 								from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider 					from 'material-ui/styles/MuiThemeProvider';

import ApplicationHome						from './../app/applicationHome';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#018ed5"
  },
  tableRow: {
    height: 24
  },
  tableRowColumn: {
    height: 24
  }
});


injectTapEventPlugin ();

export const Routes = () => {
	return(
	  <MuiThemeProvider muiTheme={muiTheme}>
	    <div>
	      
	        <ApplicationHome/>
	     		{/*Add Router Here*/}
	    </div>
	  </MuiThemeProvider>
	);
}
