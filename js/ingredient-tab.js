function IngredientTab(){
	this.ingredientCategories = ["MaligaiVibaram", "KaaiKanigal", "Extras", "Suppliments"];
	this.ingredientUnits = ["gms", "ml", "nos", "kattu", "kowli", "pocket"];
	this.init();
}
IngredientTab.prototype.init = function() {
	var _this = this;
	_this.render();
	_this.registerEvents();
};
IngredientTab.prototype.render = function() {
	var _this = this;
	addOptionsToSelect(_this.ingredientCategories, "id_selectIngredientCategory")
	addOptionsToSelect(_this.ingredientCategories, "id_ingredientCategory");
	addOptionsToSelect(_this.ingredientUnits, "id_ingredientUnit");

	var ingredientJson = {
								"MaligaiVibaram" : [{
									"id": 1,
									"name": "sugar",
									"tamilName": "சர்க்களை",
									"category": "MaligaiVibaram",
									"unitOfMeasure": "kilogram"
									},
									{
									"id": 2,
									"name" : "ghee",
									"tamilName": "ணெய்",
									"category": "MaligaiVibaram",
									"unitOfMeasure": "litre"
								}],
								"Extras" : [{
									"id": 3,
									"name": "sugar",
									"tamilName": "சர்க்களை",
									"category": "Extras",
									"unitOfMeasure": "kilogram"
									},
									{
									"id": 4,
									"name" : "ghee",
									"tamilName": "ணெய்",
									"category": "Extras",
									"unitOfMeasure": "litre"
								}]
							}
	var catagoryJson;
	var renderHtml = [];
	for (var i =0; i<_this.ingredientCategories.length; i++ ) {
		catagoryJson = ingredientJson[_this.ingredientCategories[i]];
		if(catagoryJson){
			renderHtml += "<div class='list-group col-11'>"
							+ "<a href='' class='list-group-item list-group-item-action cls_ingredientCateory active'>"
								+ _this.ingredientCategories[i]

						for(var j=0; j<catagoryJson.length ; j++){
							renderHtml += "<a href='' class='list-group-item list-group-item-action ingredient_"+ catagoryJson[j].id +"'>"
											+ "<label class='col-4'>" + catagoryJson[j].name +"</label>"
											+ "<label class='col-4'>" + catagoryJson[j].tamilName +"</label>"
											+ "<label class='btn btn-secondary btn-md mr-3 col-2 text-center cls_delete' idx=" + catagoryJson[j].id +">Delete</label>"
										+ "</a>"
						}
			renderHtml += "</a>"
					   + "</div>"
		}
	}
	$("#id_ingredientContent_tab").append(renderHtml);
};
IngredientTab.prototype.registerEvents = function() {
	var _this = this;
	$(document).ready(function(){
		$("#id_createIngredientForm").submit(function() {
			var length = _this.ingredientJsonArr&& _this.ingredientJsonArr.length ? _this.ingredientJsonArr.length : 0;
			var id = _this.ingredientJsonArr[length-1].id+1;

			var name = $("#id_name").val().trim();
			var tamilName = $("#id_tamilName").val().trim();
			var unit = $("#id_unit").val();
			var category = $("#id_category").val();

			var ingredientObj = {
					"id": id,
					"name": name,
					"tamilName": tamilName,
					"category": category, // Need to finalize the category
					"unitOfMeasure": unit
					};
			//File write operation
			_this.updateIngredientData(ingredientObj)
		});
		
		$(".cls_delete").click(function() {
	       var idx = $(this).attr("idx");
	       var isDelete = confirm("You wish to delete this ingredient?");
	       if (isDelete == true) {
	         $(".ingredient_"+idx).remove();
	       }
	    });
	});
}

IngredientTab.prototype.updateIngredientData = function(ingredientObj) {
 }