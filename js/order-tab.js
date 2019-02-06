function OrderTab(){
	this.init();
}
OrderTab.prototype.init = function(){
	var _this = this;
	_this.render();
	_this.renderEvents();
}
OrderTab.prototype.render = function(){
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
	var renderHtml = [];
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
	$("#id_orderContent_tab").append(renderHtml);
};
OrderTab.prototype.renderEvents = function() {
	$(document).on("click", ".cls_orderDetails", function(){
		alert("Order Clicked");
	});
};