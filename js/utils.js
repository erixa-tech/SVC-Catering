function addQueryParamToUrlAndReload(param, value){
	var url = window.location.href;
	if(url.lastIndexOf('#') == (url.length-1))
	{
		url = url.substring(0, url.length-1)
	}
	if (url.indexOf('?') > -1){
	   url += '&'+param+'='+value;
	}else{
	   url += '?'+param+'='+value;
	}
	window.location.href = url;
}

function getValueFromQueryParam(paramName){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars[paramName];
}

function addOptionsToSelect(optionsArray, parentId){
	if(optionsArray && optionsArray.length > 0) {
		var select = document.getElementById(parentId);
		for(var i=0; i<optionsArray.length; i++) {
			var option = document.createElement("option");
			option.text = optionsArray[i];
			select.add(option);
	    }
	}
}

function addOptionsToSelectViaElem(optionsArray, elem){
	if(optionsArray && optionsArray.length > 0) {
		for(var i=0; i<optionsArray.length; i++) {
			var option = document.createElement("option");
			option.text = optionsArray[i];
			elem.add(option);
	    }
	}
}

function cloneDOM(elemToClone, parentElem){
	parentElem.append(elemToClone.clone());
}

function getFileValue(){
	/*jQuery.get('js/Extras.txt').done(function(txt){
		console.log("txt", txt);
	});*/
	
	$.ajax({
        headers: { "Accept": "application/json"},
        type: 'GET',
        url: 'data/Extras.txt',
        crossDomain: true,
        beforeSend: function(xhr){
            xhr.withCredentials = true;
      },
        success: function(data, textStatus, request){
            console.log("123" + data);
        }
	});

}

/*function loadFile(file, elem){

	$.ajax({
      crossOrigin: false,
      url: file,
      success: function(data) {
        alert("asd");	
      }
    });

	var headers = new Headers();
	headers.append("Access-Control-Allow-Origin", "*");
	headers.append("Access-Control-Allow-Credentials", true);
	headers.append("Access-Control-Allow-Methods", "GET");
	$.ajax({
      type: "GET",
	  xhrFields: {
        withCredentials: true
      },
      dataType: 'json',
	  headers: {"Access-Control-Allow-Origin": "*"},
      url: file,
      success: function(data) {
        elem.html(data);
      },
      error: function(data) {
      	console.log(data);
      }
    });

	var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
}*/