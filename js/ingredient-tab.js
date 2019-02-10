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

	_this.ingredientJsonArr = [{
							"id": 1,
							"name": "sugar",
							"tamilName": "சர்க்கரை",
							"category": "provisions",
							"unitOfMeasure": "kilogram"
							},
							{
							"id": 2,
							"name" : "ghee",
							"tamilName": "நெய்",
							"category": "provisions",
							"unitOfMeasure": "litre"
						}]
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