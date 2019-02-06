function IngredientTab(){
	this.init();
}
IngredientTab.prototype.init = function() {
	var _this = this;
	_this.render();
	_this.registerEvents();
};
IngredientTab.prototype.render = function render() {
	var ingredientJson = [{
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
IngredientTab.prototype.registerEvents = function render() {
	$(document).ready(function(){
		$("#id_createIngredientForm").submit(function() {
			//Generate Ingredient Object dynamically and push to ingredient file
			var ingredientObj = {
					"id": 3,
					"name": "sugar",
					"tamilName": "சர்க்கரை",
					"category": "provisions",
					"unitOfMeasure": "kilogram"
					};
		});
	});
}
