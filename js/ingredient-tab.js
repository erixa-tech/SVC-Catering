﻿function IngredientTab(){
	this.ingredientUnits = ["kg", "gram", "ltr", "ml", "nos", "kattu", "kowli", "pocket"];
	this.init();
}
IngredientTab.prototype.init = function() {
	var _this = this;
	_this.render();
	_this.registerEvents();
};
IngredientTab.prototype.render = function() {
	var _this = this;
	addOptionsToSelect(ingredientCategories, "id_selectIngredientCategory")
	addOptionsToSelect(ingredientCategories, "id_ingredientCategory");
	addOptionsToSelect(_this.ingredientUnits, "id_ingredientUnit");

	_this.ingredientJson = {"Extras":[{"id":1,"name":"ஸ்வீட்டுக்கு ஸ்பெஷல் பசும்பால்(தேன்பால்)","unit":"ml"},{"id":2,"name":"அரோமா ஸ்பெஷல் பாக்கெட் பால்","unit":"ml"},{"id":3,"name":"அரோமா ஸ்பெஷல் பாக்கெட் தயிர்","unit":"ml"},{"id":4,"name":"20லி தண்ணீர் கேன் TAP'D Water (AKA aqua farms)","unit":"nos"},{"id":5,"name":"300மிலி குடிநீர் பாட்ல் TAP'D Water (AKA aqua farms)","unit":"nos"},{"id":6,"name":"சர்க்கரை இல்லாத பால்கோவா","unit":"gram"},{"id":7,"name":"ஸ்லீட்நைஸ் பால்கோவா","unit":"gram"},{"id":8,"name":"சிவசக்தி ஸ்பெஷல் நெய் (டின்)","unit":"nos"},{"id":9,"name":"விக்னேஷ் சில்லி மசாலா","unit":"gram"},{"id":10,"name":"ஸ்பெஷல் பால் பனீர்","unit":"gram"},{"id":11,"name":"சர்க்கரை இல்லாத பால்கோவா","unit":"gram"},{"id":12,"name":"மில்க்கிரீம்","unit":"gram"},{"id":13,"name":"வெண்ணெய்","unit":"gram"},{"id":14,"name":"மெது இட்லி மாவு","unit":"gram"},{"id":15,"name":"இளநீர் இட்லி மாவு","unit":"gram"},{"id":16,"name":"தட்டு இட்லி மாவு","unit":"gram"},{"id":17,"name":"ஸ்பெஷல் தோசை மாவு","unit":"gram"},{"id":18,"name":"ஸ்பெஷல் இடியாப்பம் மாவு","unit":"gram"},{"id":19,"name":"ஸ்பெஷல் ஆப்பம் மாவு","unit":"gram"},{"id":20,"name":"ஐஸ்பார் (50கிலோ அளவு)","unit":"nos"}],"KaaiKanigal":[{"id":21,"name":"தேங்காய் (வெள்ளைக்காய் பெரியது)","unit":"nos"},{"id":22,"name":"பட்டர் பீன்ஸ் விதைமட்டும்","unit":"gram"},{"id":23,"name":"பெரிய வெங்காயம் (பெரியது)","unit":"gram"},{"id":24,"name":"பேபிகார்ன் உறித்தது","unit":"gram"},{"id":25,"name":"சின்ன வெங்காயம் (பெரியது)","unit":"gram"},{"id":26,"name":"அமெரிக்கன் சுவீட் கார்ன்","unit":"gram"},{"id":27,"name":"குண்டு பச்சைமிளகாய்","unit":"gram"},{"id":28,"name":"வெற்றிலை","unit":"kowli"},{"id":29,"name":"முருங்கைக்காய்","unit":"gram"},{"id":30,"name":"பிஞ்சு கத்தரிக்காய்","unit":"gram"},{"id":31,"name":"அரசாணிக்காய்","unit":"gram"},{"id":32,"name":"பூசணிக்காய் (பெரிய சைஸ்)","unit":"gram"},{"id":33,"name":"கேரட்","unit":"gram"},{"id":34,"name":"பீன்ஸ்","unit":"gram"},{"id":35,"name":"முட்டைக்கோஸ்","unit":"gram"},{"id":36,"name":"பைனாப்பிள் பழம்","unit":"nos"},{"id":37,"name":"பச்சைப்பட்டாணிக்காய்","unit":"gram"},{"id":38,"name":"மாதுளம்பழம்","unit":"gram"},{"id":39,"name":"காளிபிளவர்","unit":"gram"},{"id":40,"name":"திராட்சைபழம் (பன்னீர்)","unit":"gram"},{"id":41,"name":"புடலங்காய்","unit":"gram"},{"id":42,"name":"வெள்ளை திராட்சை","unit":"gram"},{"id":43,"name":"வெண்டைக்காய்","unit":"gram"},{"id":44,"name":"அல்போன்ஷா மாம்பழம்","unit":"gram"},{"id":45,"name":"டர்னிப்","unit":"gram"},{"id":46,"name":"சப்போட்டா பழம்","unit":"gram"},{"id":47,"name":"நூல்கோஸ்","unit":"gram"},{"id":48,"name":"பீட்ரூட்","unit":"gram"},{"id":49,"name":"அவரைக்காய்","unit":"gram"},{"id":50,"name":"கொத்தவரங்காய்","unit":"gram"},{"id":51,"name":"அரைகீரை","unit":"gram"},{"id":52,"name":"வாழைக்காய்","unit":"nos"},{"id":53,"name":"வாழைப்பூ","unit":"nos"},{"id":54,"name":"மொட்டுக்காளான்","unit":"gram"},{"id":55,"name":"உருளைகிழங்கு","unit":"gram"},{"id":56,"name":"சேனைகிழங்கு (பாலக்காடு)","unit":"gram"},{"id":57,"name":"சிப்பிக்காளான்","unit":"gram"},{"id":58,"name":"கிளிமூக்கு மாங்காய்","unit":"gram"},{"id":59,"name":"முட்டை","unit":"nos"},{"id":60,"name":"ஆப்பிள் தக்காளி (பழமாக)","unit":"gram"},{"id":61,"name":"கோவக்காய்","unit":"gram"},{"id":62,"name":"இஞ்சி","unit":"gram"},{"id":63,"name":"மாங்காய் இஞ்சி","unit":"gram"},{"id":64,"name":"வெள்ளரிப்பிஞ்சு","unit":"gram"},{"id":65,"name":"குடமிளகாய் (பச்சை,மஞ்சள், சிவப்பு)","unit":"gram"},{"id":66,"name":"எலுமிச்சம்பழம் (பெரிய சைஸ்)","unit":"nos"},{"id":67,"name":"புதிய கருவேப்பிலை","unit":"gram"},{"id":68,"name":"புதிய மல்லித்தழை","unit":"kattu"},{"id":69,"name":"புதிய புதினாதழை","unit":"kattu"},{"id":70,"name":"கறி பலாக்காய் (பிஞ்சு)","unit":"gram"},{"id":71,"name":"ஸ்பிரிங் ஆனியன்","unit":"kattu"}],"Maligai":[{"id":71,"name":"மஞ்சத்தூள்","unit":"gram"},{"id":73,"name":"புளி","unit":"gram"},{"id":74,"name":"சக்தி மிளகாய்தூள்","unit":"gram"},{"id":75,"name":"துவரம்பருப்பு","unit":"gram"},{"id":76,"name":"சக்தி மல்லி தூள்","unit":"gram"},{"id":77,"name":"கடலைபருப்பு","unit":"gram"},{"id":78,"name":"சக்தி சாம்பார் தூள்","unit":"gram"},{"id":79,"name":"உடைத்த உளுந்து","unit":"gram"},{"id":80,"name":"சக்தி ரச தூள்","unit":"gram"},{"id":81,"name":"பாசிப்பருப்பு","unit":"gram"},{"id":82,"name":"சக்தி கறிமசால் தூள்","unit":"gram"},{"id":83,"name":"வடைபருப்பு","unit":"gram"},{"id":84,"name":"சக்தி மட்டன் மசாலாதூள்","unit":"gram"},{"id":85,"name":"பச்சைபயிறு","unit":"gram"},{"id":86,"name":"சக்தி சிக்கன் மசாலாதூள்","unit":"gram"},{"id":87,"name":"கருப்புசுண்டல்","unit":"gram"},{"id":88,"name":"சக்தி மீன்குழம்பு மசாலாதூள்","unit":"gram"},{"id":89,"name":"வெள்ளைசுண்டல்","unit":"gram"},{"id":90,"name":"சக்தி இட்லி பொடி","unit":"gram"},{"id":91,"name":"சைனாபூண்டு (பெரியபல்)","unit":"gram"},{"id":92,"name":"சக்தி பிரியாணி மசாலா","unit":"gram"},{"id":93,"name":"உரித்த நாட்டுப்பூண்டு","unit":"gram"},{"id":94,"name":"குருமிளகு தூள்","unit":"gram"},{"id":95,"name":"மொட்டு பொட்டுக்கடலை","unit":"gram"},{"id":96,"name":"சாட் மசாலா தூள்","unit":"gram"},{"id":97,"name":"வருத்தநிலக்கடலை","unit":"gram"},{"id":98,"name":"வெள்ளை மிளகு தூள்","unit":"gram"},{"id":99,"name":"கெட்டிஅவுல்","unit":"gram"},{"id":100,"name":"சீரக தூள்","unit":"gram"},{"id":101,"name":"சாப்பாடு அரிசி (மஹாராஜா)","unit":"gram"},{"id":102,"name":"கரம் மசாலா தூள்","unit":"gram"},{"id":103,"name":"PT பச்சரிசி","unit":"gram"},{"id":104,"name":"சென்னா மசாலா தூள்","unit":"gram"},{"id":105,"name":"இட்லி அரிசி (தோசைக்கு)","unit":"gram"},{"id":106,"name":"பெருங்காயதூள் (200 கிராம் டின்)","unit":"gram"},{"id":107,"name":"உருண்டை உளுந்து (வடைக்கு)","unit":"gram"},{"id":108,"name":"CA ஸ்டார் சில்லிமசாலா தூள்","unit":"gram"},{"id":109,"name":"பாசுமதி பிரியாணி அரிசி","unit":"gram"},{"id":110,"name":"கல்உப்பு","unit":"gram"},{"id":111,"name":"சீரகசம்பா பிரியாணிஅரிசி","unit":"gram"},{"id":112,"name":"பொடிஉப்பு","unit":"gram"},{"id":113,"name":"மயில்மார்க் சம்பாரவை","unit":"gram"},{"id":114,"name":"கடுகு","unit":"gram"},{"id":115,"name":"பட்டணரவை","unit":"gram"},{"id":116,"name":"மிளகு","unit":"gram"},{"id":117,"name":"பாயாச கோதிரவை","unit":"gram"},{"id":118,"name":"சீரகம்","unit":"gram"},{"id":119,"name":"நைலான் ஜல்லரிசி","unit":"gram"},{"id":120,"name":"வெந்தயம்","unit":"gram"},{"id":121,"name":"பிரியா அடைபிரதம்","unit":"gram"},{"id":122,"name":"கொத்து மல்லி","unit":"gram"},{"id":123,"name":"முழு முந்திரி(கேரளா)","unit":"gram"},{"id":124,"name":"உருண்டைவரமிளகாய்","unit":"gram"},{"id":125,"name":"பிளவு முந்திரி(கேரளா)","unit":"gram"},{"id":126,"name":"நீளவரமிளகாய்","unit":"gram"},{"id":127,"name":"திராட்சை","unit":"gram"},{"id":128,"name":"பட்டை","unit":"gram"},{"id":129,"name":"அஸ்கா சர்க்கரை","unit":"gram"},{"id":130,"name":"கிராம்பு","unit":"gram"},{"id":131,"name":"நர சுஸ் காபித்தூள்","unit":"gram"},{"id":132,"name":"ஏலக்காய்","unit":"gram"},{"id":133,"name":"கிரீன்லேபிள் காபித்தூள்","unit":"gram"},{"id":134,"name":"சோம்பு","unit":"gram"},{"id":135,"name":"சன்ரைஸ் காபித்தூள்","unit":"gram"},{"id":136,"name":"சுண்டவத்தல்","unit":"gram"},{"id":137,"name":"திரீரோசஸ் டீ தூள்","unit":"gram"},{"id":138,"name":"சாமை அரிசி","unit":"gram"},{"id":139,"name":"ரெட் சில்லி சாஸ் (பாட்டில்)","unit":"nos"},{"id":140,"name":"வரகு அரிசி","unit":"gram"},{"id":141,"name":"கிரீன் சில்லி சாஸ் (பாட்டில்)","unit":"nos"},{"id":142,"name":"குதிரைவாலிஅரிசி","unit":"gram"},{"id":143,"name":"தக்காளி சூப் மிக்ஸ்","unit":"gram"},{"id":144,"name":"தினை அரிசி","unit":"gram"},{"id":145,"name":"வெஜ் சூப் மிக்ஸ்","unit":"gram"},{"id":146,"name":"கம்புஅரிசி ரவை","unit":"gram"},{"id":147,"name":"கிசான் மேங்கோ (750மிலி)  (பாட்டில்)","unit":"nos"},{"id":148,"name":"கசகசா","unit":"gram"},{"id":149,"name":"கஸ்தூரி மேத்தி  (எவரெஸ்ட்)","unit":"gram"},{"id":150,"name":"வெள்ளை ரஸ்க் தூள்","unit":"gram"},{"id":151,"name":"மில்க்மெய்டு 400கிராம் டின்","unit":"nos"},{"id":152,"name":"அச்சுவெல்லம்","unit":"gram"},{"id":153,"name":"உருளைசிப்ஸ்","unit":"gram"},{"id":154,"name":"உருண்டைவெல்லம்","unit":"gram"},{"id":155,"name":"அரிசி வடகம்","unit":"gram"},{"id":156,"name":"பில்ஸ்பெரி கோதுமைமாவு","unit":"gram"},{"id":157,"name":"பாப்புலர் அப்பளம் (270கிராம்)","unit":"kattu"},{"id":158,"name":"மைதா மாவு(பன்னாரி)","unit":"gram"},{"id":159,"name":"சான் வெஜ் பிரட் (பெரிய சைஸ்)","unit":"nos"},{"id":160,"name":"கிழங்குமாவு","unit":"gram"},{"id":161,"name":"கடலைமாவு","unit":"gram"},{"id":162,"name":"அரிசிமாவு","unit":"gram"},{"id":163,"name":"கார்ன்பிளவர் மாவு","unit":"gram"},{"id":164,"name":"ராகி மாவு","unit":"gram"},{"id":165,"name":"கம்பு மாவு","unit":"gram"},{"id":166,"name":"சோள மாவு","unit":"gram"},{"id":167,"name":"பணங்கற்கண்டு","unit":"gram"},{"id":168,"name":"பாசிப்பருப்பு மாவு","unit":"gram"},{"id":169,"name":"அயிட்ரோஸ்","unit":"gram"},{"id":170,"name":"சாதா நூடுல்ஸ்","unit":"gram"},{"id":171,"name":"கம்பி மஞ்சி","unit":"nos"},{"id":172,"name":"நந்திமார்க் ஜிலேபி பருப்பு","unit":"gram"},{"id":173,"name":"அமுல்யா பால் பவுடர்","unit":"gram"},{"id":174,"name":"பாதாம்பருப்பு","unit":"gram"},{"id":175,"name":"பிஸ்தா பருப்பு","unit":"gram"},{"id":176,"name":"வெள்ளரி விதை","unit":"gram"},{"id":177,"name":"அத்திப்பழம்","unit":"gram"},{"id":178,"name":"செரிப்பழம்","unit":"gram"},{"id":179,"name":"கேசர்அங்கூரி (850கிராம் டின்)","unit":"nos"},{"id":180,"name":"கணபதி ஆயில் (டின்)","unit":"nos"},{"id":181,"name":"நல்லெண்ணெய்","unit":"ml"},{"id":182,"name":"தேங்காய் எண்ணெய்","unit":"ml"},{"id":183,"name":"விளக்கெண்ணெய்","unit":"ml"},{"id":184,"name":"டால்டா","unit":"gram"},{"id":185,"name":"ஐயப்பா நெய் (டின்)","unit":"nos"},{"id":186,"name":"பச்சை கற்பூரம்","unit":"gram"},{"id":187,"name":"ரெட் கலர்","unit":"gram"},{"id":188,"name":"லெமன் கலர்","unit":"gram"},{"id":189,"name":"பச்சை கலர்","unit":"gram"},{"id":190,"name":"சோடா உப்பு","unit":"gram"},{"id":191,"name":"ரோஸ் எசன்ஸ் (பாட்டில்)","unit":"nos"},{"id":192,"name":"பருப்பு ஒப்புட்டு","unit":"nos"},{"id":193,"name":"பைனாப்பிள் எசன்ஸ் (பாட்டில்)","unit":"nos"},{"id":194,"name":"பாதாம்மாஸ் பவுடர்","unit":"gram"},{"id":195,"name":"வினிகர் 750 மிலி (பாட்டில்)","unit":"nos"},{"id":196,"name":"ராஜம் சுக்குகாபி மிக்ஸ்","unit":"gram"},{"id":197,"name":"ஸ்பெஷல் தேன்","unit":"gram"},{"id":198,"name":"சேவரட் சேமியா","unit":"gram"},{"id":199,"name":"தக்காளி சாஸ் (பாட்டில்)","unit":"nos"},{"id":200,"name":"பேனி ரவை","unit":"gram"},{"id":201,"name":"சோயா சாஸ் (பாட்டில்)","unit":"nos"},{"id":202,"name":"கொள்ளு","unit":"gram"}],"Suppliments":[{"id":203,"name":"பெரிய பெட்டிக்கூடை","unit":"nos"},{"id":204,"name":"பெரிய தட்டக்கூடை","unit":"nos"},{"id":205,"name":"சீமாறு (ஈக்கமாறு)","unit":"nos"},{"id":206,"name":"அடுப்புக்கறி (தந்தூரி கறி) (டின்)","unit":"nos"},{"id":207,"name":"பிளாஷ்டிக்குடம்","unit":"nos"},{"id":208,"name":"பழைய பிளக்ஸ்","unit":"nos"},{"id":209,"name":"தலை வாழை இலை","unit":"nos"},{"id":210,"name":"சாப்பாட்டு இலை","unit":"nos"},{"id":211,"name":"ரவுண்டு இலை ( 12 இஞ்சு)","unit":"nos"},{"id":212,"name":"1 யூஸ் ஹாப் டீப் சுவீட்ட்ரே","unit":"nos"},{"id":213,"name":"கேரி பேக் (5 கிலோ அளவு)","unit":"nos"},{"id":214,"name":"முடுச்சு கவர் (10 கிலோ அளவு )","unit":"nos"},{"id":215,"name":"6 இஞ்ச் பேப்பர் பிளேட்","unit":"nos"},{"id":216,"name":"12 இஞ்ச் பாக்கு மட்டை","unit":"nos"},{"id":217,"name":"பட்டர் பேப்பர் (பீஸ்)","unit":"nos"},{"id":218,"name":"அலுமினி பாயில்பேபப்ர்","unit":"nos"},{"id":219,"name":"டஸ்ட்பின் கவர் ( 100கிலோ)","unit":"pocket"},{"id":220,"name":"டிஸ்யூ பேப்பர்","unit":"pocket"},{"id":221,"name":"கை கிளவுஸ்","unit":"pocket"},{"id":222,"name":"சர்வர் கேப்","unit":"pocket"},{"id":223,"name":"குளோப் ஜாமுன் கப் +ஸ்பூன்","unit":"nos"},{"id":224,"name":"சில்லர் கோட்டிங் ஸ்பூன்","unit":"nos"},{"id":225,"name":"சூப் கப் + ஸ்பூன்","unit":"nos"},{"id":226,"name":"அட்டை காபி கப் (110 மிலி )","unit":"nos"},{"id":227,"name":"அட்டை குடிநீர் கப் (210 மிலி)","unit":"nos"},{"id":228,"name":"50 நபர் பேப்பர் ரோல்","unit":"nos"},{"id":229,"name":"டீ வடி ஜல்லடை","unit":"nos"},{"id":230,"name":"பிளாஸ்டிக் ஐல்லடை","unit":"nos"},{"id":231,"name":"நியூஸ் பேப்பர்","unit":"gram"},{"id":232,"name":"பனியன் வேஸ்ட்","unit":"gram"},{"id":233,"name":"காடா துணி(லேஸ்)","unit":"meter"},{"id":234,"name":"வெள்ளைதுண்டு","unit":"nos"},{"id":235,"name":"கொசுவர்தி சுருள்","unit":"nos"},{"id":236,"name":"தீப்பெட்டி","unit":"nos"},{"id":237,"name":"சோப்பு பவுடர்","unit":"gram"},{"id":238,"name":"கிளீனிங் பவுடர்","unit":"gram"}]};
	var catagoryJson;
	var renderHtml = [];
	for (var i =0; i<ingredientCategories.length; i++ ) {
		var categoryName = ingredientCategories[i];
		catagoryJson = _this.ingredientJson[categoryName];
		if(catagoryJson){
			renderHtml += "<div class='list-group col-11'>"
							+ "<a class='list-group-item list-group-item-action cls_ingredientCateory active'>"
								+ ingredientCategories[i]

						for(var j=0; j<catagoryJson.length ; j++){
							renderHtml += "<a class='list-group-item list-group-item-action cls_ingredientCont ingredient_"+ catagoryJson[j].id +"'>"
											+ "<label class='col-4'>" + catagoryJson[j].name +"</label>"
											+ "<label class='col-4'>" + (catagoryJson[j].tamilName ?catagoryJson[j].tamilName : 'Name')  +"</label>"
											+ "<label class='btn btn-info btn-md mr-3 col-1 text-center cls_editIngredient' idx='" + catagoryJson[j].id +"' data-toggle='modal' data-target='#ingredientModal'>Edit</label>"
											+ "<label class='btn btn-secondary btn-md mr-3 col-1 text-center cls_deleteIngredient' idx='" + catagoryJson[j].id +"' name='" + catagoryJson[j].name +"'>Delete</label>"
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
					"category": category,
					"unitOfMeasure": unit
					};
			//File write operation
			_this.updateIngredientData(ingredientObj)
		});
		
		$(".cls_deleteIngredient").click(function() {
	       var idx = $(this).attr("idx");
	       var name = $(this).attr("name");
	       var isDelete = confirm("You wish to delete the ingredient "+name+" ?");
	       if (isDelete == true) {
	         $(".ingredient_"+idx).remove();
	       }
	    });
		
		$(".cls_editIngredient, .cls_createIngredient").click(function() {
			   if($(this).hasClass("cls_createIngredient")) {
				   $(".modal-title", modal).text("Create Ingredient");
		    	   $(".cls_ingredientId", modal).val("");
		    	   $(".cls_ingredientName", modal).val("");
		    	   $(".cls_ingredientTamilName", modal).val("");
		    	   $(".cls_ingredientCategory", modal).val("");
		    	   $(".cls_ingredientUnit", modal).val("");
			   }
			   else {
				   var idx = $(this).attr("idx");
			       var curIngredientObj = _this.getIngredientById(idx);
			       if(curIngredientObj && !$.isEmptyObject(curIngredientObj))
			       {
			    	   var id = curIngredientObj.id;
			    	   var name = curIngredientObj.name;
			    	   var tamilName = curIngredientObj.tamilName ? curIngredientObj.tamilName : "";
			    	   var categoryName = curIngredientObj.categoryName;
			    	   var unit = curIngredientObj.unit;
			    	   var modal = $("#ingredientModal");
			    	   $(".modal-title", modal).text("Edit Ingredient");
			    	   $(".cls_ingredientId", modal).val(id);
			    	   $(".cls_ingredientName", modal).val(name);
			    	   $(".cls_ingredientTamilName", modal).val(tamilName);
			    	   $(".cls_ingredientCategory", modal).val(categoryName);
			    	   $(".cls_ingredientUnit", modal).val(unit);
			       }
			   }
				   
		    });
	});
}

IngredientTab.prototype.updateIngredientData = function(ingredientObj) {
	//File operation to save the ingredient in appropreate ingredient category
}

IngredientTab.prototype.getIngredientById = function(id) {
	var _this = this;
	var toRet = null;
	$.each( _this.ingredientJson, function( categoryName, ingredientsArr ) {
		$.each(ingredientsArr, function( index, ingredientObj ) {
			  if((ingredientObj.id).toString() == id) {
				  var tempObj = ingredientObj;
				  tempObj.categoryName = categoryName;
				  toRet = tempObj;
				  return false;
		      }
		});
		if(toRet != null) {
			return false;
		}
			
	});
	return toRet;
}
