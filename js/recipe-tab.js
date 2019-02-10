function RecipeTab(){
	this.recipeCategory = ["Sweet", "HomeSweet", "Kaaram", "Idly", "Dhosa", "Chattni", "Sambar", "Kulambu", "Gravy",
		                  "Rotty", "Biriyani", "Pachadi", "Saadam", "Oorugaai", "Baanam", "Snacks", "Baanam"];
	this.init();
}
RecipeTab.prototype.init = function() {
	var _this = this;
	_this.render();
};
RecipeTab.prototype.render = function() {
	var _this = this;
	addOptionsToSelect(_this.recipeCategory, "id_selectRecipeCategory");
	addOptionsToSelect(_this.recipeCategory, "id_recipeCategory");

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
};