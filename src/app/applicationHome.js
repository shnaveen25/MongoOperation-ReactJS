import React,{Component} 	from 'react';
import AppBar 				from 'material-ui/AppBar';
import {
	Drawer, 
	Divider, 
	Menu, 
	MenuItem
} 							from 'material-ui';

import AddUser 				from './addUser';
import ViewUsers			from './viewUsers';

const style = {
  height: 500,
  width: 500,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
};


export class ApplicationHome extends Component{

	constructor(props){
	 	super(props);
		console.log("Inside constructor of ApplicatonHome");
		this.state = {
			mainView: 'addUser',
			showMenu: false,
		};

		this.handelOnShowMenu = this.handelOnShowMenu.bind(this);
		this.handleOnViewChange = this.handleOnViewChange.bind(this);
	}

	handleOnViewChange(obj, val) {
	    console.log(obj, val);
	    this.setState({mainView: val});
	}

	handelOnShowMenu(event) {
		console.log('Showing Menu');
		this.setState({
			showMenu: true
		})
	}

	getMenu(){
		var menuItem = [];

		menuItem.push(<MenuItem key={1} primaryText="Add User" value="addUser" checked={this.state.mainView === "addUser"} style={{color: 'white'}}/>);

		menuItem.push(<MenuItem key={2} primaryText="View Users" value="viewUsers" checked={this.state.mainView === "viewUsers"} style={{color: 'white'}}/>);

		//menuItem.push(<MenuItem key={4} primaryText="Sign out" value="signout" checked={this.state.mainView === "signout"} style={{color: 'white'}}/>);

		return(
			<Menu
	            onChange={this.handleOnViewChange}
	            autoWidth={false}
	            style={{color: 'white', width: 175}}
	            >
	            {menuItem}
	        </Menu>
		)
	}

	mainView() {
	    console.log(this.state.mainview);
	    let view = null;
	   	if (this.state.mainView === 'addUser') {
	      view = (
	       		<AddUser />
	      );
	    } else if(this.state.mainView === 'viewUsers'){
	    	view = (
	    		<ViewUsers />
	    	)
	    } 
	    return view;
  	}

	render(){
		return(
			<div>
			<AppBar
	        title="Mongo Client"
	        showMenuIconButton={true}
	        onLeftIconButtonTouchTap= {this.handelOnShowMenu}
	        />
	        <Drawer
	          docked
	          style={{display: 'inline-block'}}
	          containerStyle={{position: 'static', height: 700, width: 220, backgroundColor: '#212121', color: 'white'}}
	          open={this.showMenu}
	          >
	          <MenuItem /*primaryText={SessionService.getUserName().toUpperCase()}*/ style={{color: 'white', width: 175, textAlign:'center'}}/>
	          <Divider />
	          {this.getMenu()}
	        </Drawer>

	        {this.mainView()}

	      </div>
		)
	}
}

export default ApplicationHome;