function OrderTab(){
	this.init();
	var isNewOrder = false;
	var isListServiceForms = false;
	var dummyRecipies = null;
}
OrderTab.prototype.init = function(){
	var _this = this;
	_this.isNewOrder = getValueFromQueryParam('orderIsNew');
	_this.isListServiceForms = getValueFromQueryParam('listServiceForms');
	_this.dummyRecipies = ["Kesari", "Badam Alwa", "Chicken Biriyani", "Sambar"];
	_this.render();
	_this.renderEvents();
}
OrderTab.prototype.render = function(){
	var _this = this;
	var renderHtml = [];
	if(_this.isNewOrder == 'true' && _this.isListServiceForms == 'true')
	{
		$("#id_createOrder").attr('hidden', true);
		
		renderHtml += '<form>'
			+ '  <div class="form-group">'
			+ '    <label for="serviceFormName">Session Name</label>'
			+ '    <input type="text" class="form-control" id="sessionName" placeholder="Enter Session Name">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="serviceFormDateTime">Session Date and Time</label>'
			+ '    <input type="text" class="form-control" id="sessionDateTime" placeholder="Enter Session Date and Time">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="serviceFormNotes">Session Notes</label>'
			+ '    <textarea class="form-control" id="sessionNotes" rows="3" placeholder="Enter Any Additional Session Notes"></textarea>'
			+ '  </div>'
			+ '  <h5><u>Add Receipes to Service Form</u></h5>'
			+ '  <div class="form-group">'
			+ '    <div class="row">'
			+ '      <div class="col">'
			+ '        <label for="receipeCategory">Category</label>'
			+ '        <select class="form-control" id="id_receipeCategory_sf" name="receipeCategory"></select>'
			+ '      </div>'
			+ '      <div class="col">'
			+ '        <label for="receipeCount">No. Of People</label>'
			+ '        <input type="text" class="form-control" required id="id_receipeCount_sf" placeholder="Enter Count / No. Of People" name="receipeCount">'
			+ '      </div>'
			+ '      <div class="col mt-4">'
			+ '        <button class="btn btn-success mt-2 id_addReceipe_sf">Add</button>'
			+ '      </div>'
			+ '    </div>'
			+ '  </div>'
			//TODO : Add / Remove DOM rows plugin
			+ '  <button type="button" id="id_createServiceForm" class="btn btn-primary">Create Service Form</button>'
			+ '</form>';
	}
	else if(_this.isNewOrder == 'true')
	{
		$("#id_createOrder").attr('hidden', true);
		//getFileValue();
		renderHtml += '<form>'
			+ '  <div class="form-group">'
			+ '    <label for="clientName">Name</label>'
			+ '    <input type="text" class="form-control" id="clientName" placeholder="Enter Name">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="clientPhone">Phone Number</label>'
			+ '    <input type="text" class="form-control" id="clientPhone" placeholder="Enter Phone Number">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="clientAddress">Address</label>'
			+ '    <textarea class="form-control" id="clientAddress" rows="3" placeholder="Enter Address"></textarea>'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="eventName">Event Name</label>'
			+ '    <input type="text" class="form-control" id="eventName" placeholder="Enter Event Name">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="eventDate">Event Date</label>'
			+ '    <input type="text" class="form-control" id="eventDate" placeholder="Enter Event Date">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="eventVenue">Event Venue</label>'
			+ '    <input type="text" class="form-control" id="eventVenue" placeholder="Enter Event Venue">'
			+ '  </div>'
			+ '  <div class="form-group">'
			+ '    <label for="clientNotes">Notes</label>'
			+ '    <textarea class="form-control" id="clientNotes" rows="3" placeholder="Enter Any Additional Notes"></textarea>'
			+ '  </div>'
			/* + '  <div class="form-group">'
			+ '    <label for="serviceForms">Service Forms</label>'
			+ '    <div class="card w-75" id="serviceForms">'
			+ '      <div class="card-body">'
			+ '        <h5 class="card-title">Card title</h5>'
			+ '        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>'
			+ '        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'
			+ '        <a href="#" class="card-link">Card link</a>'
			+ '        <a href="#" class="card-link">Another link</a>'
			+ '      </div>'
			+ '    </div>'
			+ '  </div>' */
			+ '  <button type="button" id="id_listServiceForms" class="btn btn-primary">Save and Proceed To Service Form</button>'
			+ '</form>';
	}
	else
	{
		$("#id_createOrder").attr('hidden', false);
		var orderJson = [{
							"name": "Ganapathy Catering Services",
							"contactNo": "9876543210",
							"address": "No.1, KRG Nagar, 3rd st., Ganapathy, Cbe-6",
							"client": "Isha - Anand Wedding",
							"dateOfEvent": "31-01-2019 & 01-02-2019",
							"venue": "Codissia"
						},
						{
							"name": "Ganapathy Catering Services",
							"contactNo": "9876543210",
							"address": "No.1, KRG Nagar, 3rd st., Ganapathy, Cbe-6",
							"client": "Isha - Anand Wedding",
							"dateOfEvent": "31-01-2019 & 01-02-2019",
							"venue": "Codissia"
						},
						{
							"name": "Ganapathy Catering Services",
							"contactNo": "9876543210",
							"address": "No.1, KRG Nagar, 3rd st., Ganapathy, Cbe-6",
							"client": "Isha - Anand Wedding",
							"dateOfEvent": "31-01-2019 & 01-02-2019",
							"venue": "Codissia"
						},
						{
							"name": "Ganapathy Catering Services",
							"contactNo": "9876543210",
							"address": "No.1, KRG Nagar, 3rd st., Ganapathy, Cbe-6",
							"client": "Isha - Anand Wedding",
							"dateOfEvent": "31-01-2019 & 01-02-2019",
							"venue": "Codissia"
						},
						{
							"name": "Ganapathy Catering Services",
							"contactNo": "9876543210",
							"address": "No.1, KRG Nagar, 3rd st., Ganapathy, Cbe-6",
							"client": "Isha - Anand Wedding",
							"dateOfEvent": "31-01-2019 & 01-02-2019",
							"venue": "Codissia"
						}
						]
		for(var i=0; i< orderJson.length; i++){
			if(i%2 == 0){
				renderHtml += "<div class='row'>"
			}
			renderHtml += "<div class='card border-secondary mb-3 col-5 mx-4 cls_orderDetails' style='cursor:pointer'>"
								+ "<h6 class='card-header text-success bg-transparent border-secondary text-center cls_orderName'>"+ orderJson[i].name +"</h6>"
								+ "<div class='card-body text-secondary font-weight-bold'>"
							 		+ "<div class='row'>"
							   			+ "<div class='card-title cls_eventName col-6'>" + orderJson[i].client +"</div>"
							    		+ "<div class='card-text cls_eventDate col-6 text-right'>"+ orderJson[i].dateOfEvent +"</div>"
							    	+ "</div>"
							 	   	+ "<div class='row'>"
							    		+ "<div class='card-title cls_eventVenue col-6'>"+ orderJson[i].venue +"</div>"
							    		+ "<div class='card-text cls_contactNumber col-6 text-right'>"+ orderJson[i].contactNo +"</div>"
							    	+ "</div>"
							    	+ "<div class='row'>"
							   			+ "<div class='card-title cls_clientAddress col'>"+ orderJson[i].address +"</div>"
							    	+ "</div>"
							  	+ "</div>"
							  	+ "<div class='card-footer text-center bg-light border-secondary row p-0'>"
							  		+ "<label class='col-6 border-right border-secondary m-0 p-2' style='cursor:pointer'>Complete</label>"
							  		+ "<label class='col-6 m-0 p-2' style='cursor:pointer'>Delete</label>"
							  	+ "</div>"
							+ "</div>";
			if(i%2 != 0){
				renderHtml += "</div>"
			}
		}
	}
	$("#id_orderContent_tab").append(renderHtml);
};
OrderTab.prototype.renderEvents = function() {
	var _this = this;
	
	$(document).ready(function(){
		$(document).on("click", ".cls_orderDetails", function(){
			alert("Order Clicked");// Do ur code here
		});

		$(document).on("click", "#id_createOrder", function(){
			addQueryParamToUrlAndReload('orderIsNew', 'true');
		});
		
		$(document).on("click", "#id_listServiceForms", function(){
			addQueryParamToUrlAndReload('listServiceForms', 'true');
		});
		
		if(_this.isListServiceForms == "true") {
			addOptionsToSelect(_this.dummyRecipies, "id_receipeCategory_sf");
		}
	});
	
};