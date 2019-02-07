function addQueryParamToUrlAndReload(param, value){
	var url = window.location.href;
	if (url.indexOf('?') > -1){
	   url += '&'+param+'='+value;
	}else{
	   url += '?'+param+'='+value;
	}
	window.location.href = url;
}

function getValueFromQueryParam(paramName)
{
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