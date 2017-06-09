import React, { Component }			from 'react';
import TextField 								from 'material-ui/TextField';
import Paper 										from 'material-ui/Paper';
import RaisedButton 						from 'material-ui/RaisedButton';
import ReactPDF from 'react-pdf';

import GenericService						from './../service/GenericService';


const styles = {
  height: 80,
  width: 900,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  button: {
    margin: 12,
  },
  smallButton: {
    margin: 4,
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
  table: {
  	height: 400,
	  width: 900,
	  margin: 20,
	  textAlign: 'center',
	  display: 'inline-block',
  }
};

export default class ViewUsers extends Component {

	constructor(props){
		super(props);
		this.state = {
			email : '',
			showPdf : false,
			userDataArray : [],
		}
	}

	componentDidMount(){
		this.loadUsersData();
	}

	loadUsersData(){
		GenericService.getAllUsers((response) =>{
			console.log("Response Date : " , response)
			if(response.success) {
				this.setState({
					userDataArray : response.data
				});
			}
		});
	}

	handleOnEmailChange = (event) => {
		this.setState({
			email : event.target.value
		});
	}

	handelOnSubmit = (event) => {

		GenericService.getUserdetailsPDF(this.state.email , (response) =>{
			console.log('Response ' , response);
		});

	}

	handeOnGenPDF(index , event){
		var email = this.state.userDataArray[index].email;
		console.log('Email : ' , email);
		GenericService.getUserdetailsPDF(email , (response) =>{
			console.log('Response ' , response);
		});

	}

	render(){
		const tableBody = this.state.userDataArray.map((user , index) =>
				<tr key={index.toString()}>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.mobile}</td>
					<td>{user.dob}</td>
					<td><RaisedButton 
						     	label="Generate PDF" 
						     	primary={true} 
						     	style={styles.smallButton}
						     	onClick={this.handeOnGenPDF.bind(this, index)}
					     	/></td>
				</tr>
		);

		return(
			<div style={{width: 'calc(100% - 230px)', float: 'right', display: 'inline-block', textAlign: 'center'}} >
				<div className='text-center'>
					<Paper style={styles} zDepth={2} >
							<TextField
								hintText="Email"
								floatingLabelText="Email"
								onChange={this.handleOnEmailChange}
								/>
								<RaisedButton 
						     	label="Generate PDF" 
						     	primary={true} 
						     	style={styles.button}
						     	onClick={this.handelOnSubmit}
					     	/>
					</Paper>

					<Paper style={styles.table} zDepth={2} >
					<br/>
						<table className="table table-hover">
					    <thead>
					      <tr>
					        <td>Name</td>
					        <td>Email</td>
					        <td>Mobile</td>
					        <td>DOB</td>
					        <td>Action</td>
					      </tr>
					    </thead>
					    <tbody>
					    		{tableBody}
					    </tbody>
					   </table>
					</Paper>
				</div>
			</div>
		)
	}
}