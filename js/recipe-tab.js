function RecipeTab(){
	this.init();
}
RecipeTab.prototype.init = function() {
	var _this = this;
	_this.render();
};
RecipeTab.prototype.render = function() {
	var recipeJson = [{  
						   "id":1,
						   "name":"samosa",
						   "tamilName":"சம ோசோ",
						   "Ingredients":[],
						   "itemCategory":"snack",
						   "headCount":100
						},
						{  
						   "id":2,
						   "name":" kajukathli ",
						   "tamilName":" கஜுகாத்லி ",
						   "Ingredients":[],
						   "itemCategory":"sweet",
						   "headCount":150
						}];
	var renderHtml = [];
	for (var i = 0; i< recipeJson.length; i++) {
				
		}
};