function Ingredient(){
	this.init();
}
Ingredient.prototype.init = function() {
	var _this = this;
	_this.render();
};
Ingredient.prototype.render = function render() {
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
}