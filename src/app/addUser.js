import React, { Component} 			from 'react';
import Paper 										from 'material-ui/Paper';
import Divider 									from 'material-ui/Divider';
import TextField 								from 'material-ui/TextField';
import DatePicker 							from 'material-ui/DatePicker';
import RaisedButton 						from 'material-ui/RaisedButton';
import Upload 								from 'material-ui-upload/Upload';

import GenericService						from './../service/GenericService';

const styles = {
  height: 650,
  width: 900,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

export default class AddUser extends Component{

	constructor(props){
		super(props);
		this.state = {
			name : '',
			email: '',
			mobile: '',
			dob: '',
			pictures: '',
		}
	}

	handleOnNameChange = (event) => {
		this.setState({
			name : event.target.value
		});
		//console.log('Name : ' , this.state.name);
	}

	handleOnEmailChange = (event) => {
		this.setState({
			email : event.target.value
		});
	}

	handelOnMobileChange= (event) => {
		this.setState({
			mobile : event.target.value
		});
	}

	handelOnDobChange = (event, date) => {
		this.setState({
			dob : date
		});
	}

	onFileLoad = (event) => {
		 this.setState({ 
			pictures : event.target.files[0]
		});
		console.log("pic : " , this.state.pictures);
	}

	handelOnSubmit = (event) => {

		/*let formData = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile,
			photo: this.state.pictures
		} */

		let formData = new FormData();

		formData.append('name' , this.state.name);
		formData.append('email' , this.state.email);
		formData.append('dob' , this.state.dob);
		formData.append('photo' , this.state.pictures);
		formData.append('mobile', this.state.mobile)

		console.log('FormData : ' ,formData.photo);

		GenericService.addUser(formData , (response) =>{
			console.log('response' , response);
		});
	}

	render(){
		return(
			<div style={{width: 'calc(100% - 230px)', float: 'right', display: 'inline-block', textAlign: 'center'}} >
				<div className='text-center'>
					<Paper style={styles} zDepth={2} >
						<h3>Add User</h3>
						<Divider />

							<TextField 
								hintText="Name"
								floatingLabelText="Name"
								onChange={this.handleOnNameChange}
								/>
							<br />
							<TextField
								hintText="Email"
								floatingLabelText="Email"
								onChange={this.handleOnEmailChange}
								/>
							<br />
							<TextField
								hintText="Mobile"
								floatingLabelText="Mobile"
								onChange={this.handelOnMobileChange}
								/>
							<br />
							<br />
							<DatePicker 
								hintText="Date of Birth" 
								onChange={this.handelOnDobChange}
							/>
							 <RaisedButton
					      label="Choose an Image"
					      labelPosition="before"
					      style={styles.button}
					      containerElement="label"
					      onChange={this.onFileLoad}
					    	>
					      <input type="file" style={styles.exampleImageInput} />
					    </RaisedButton>
					    <br/>
					    
					    <br />
					    <RaisedButton 
					     	label="ADD" 
					     	primary={true} 
					     	style={styles.button}
					     	onClick={this.handelOnSubmit}
					     	/>

					</Paper>
				</div>
			</div>
		)
	}
}