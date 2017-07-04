import $ from 'jquery';

//const host = 'http://localhost:8080'
const host = 'https://userinfoserver.herokuapp.com'

class GenericService {

	constructor(props){
		this.super(props);
	}

	static addUser(formData , callback){
		$.ajax({
          url : `${host}/user/adduser`,
          data : formData,
          processData: false,
          contentType: false,
          type: 'POST',
          success: callback
      });
	}

  static getUserdetailsPDF(email , callback){
    /*$.ajax({
          url : `${host}/user/generatePDF?email=${email}`,
          processData: false,
          contentType: false,
          type: 'GET',
          success: function(response){
            window.open(response);
          }
      });*/

      window.open(`${host}/user/generatePDF?email=${email}`);
  }

  static getAllUsers(callback){
    $.ajax({
          url : `${host}/user/getallusers`,
          processData: false,
          contentType: false,
          type: 'GET',
          success: callback
      });
  }

}

export default GenericService;
