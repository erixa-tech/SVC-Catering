function OrderTab(){
	this.init();
}
OrderTab.prototype.init = function(){
	var _this = this;
	var isNewOrder = getValueFromQueryParam('orderIsNew');
	_this.render(isNewOrder);
	_this.renderEvents();
}
OrderTab.prototype.render = function(isNewOrder){
	var renderHtml = [];
	if(isNewOrder == 'true')
	{
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
			+ '  <div class="form-group">'
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
			+ '  </div>'
			+ '  <button type="submit" class="btn btn-primary">Submit</button>'
			+ '</form>';
	}
	else
	{
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
	$(document).on("click", ".cls_orderDetails", function(){
		alert("Order Clicked");
	});

	$(document).on("click", "#id_createOrder", function(){
		addQueryParamToUrlAndReload('orderIsNew', 'true');
	});
};