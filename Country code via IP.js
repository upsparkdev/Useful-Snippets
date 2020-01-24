 function getCountryByIp()
  {      
    var requestUrl = "http://ip-api.com/json";
    $.ajax({
      url: requestUrl,
      type: 'GET',
      success: function(json)
      {
        
        if (json.isp=="Google LLC")
          	return; // Google will always show US
        
       	$("#country").val( json.country);     
        // update phone number field
        var user_country = json.country.toLowerCase();
		 		jQuery.each( countrycodes, function( i, c_code_number) {
        if(c_code_number.ctry === user_country){
           $("#phone_number").val(c_code_number.code);      
        }
		});
		// end update phone number field
      },
      error: function(err)
      {
      }
    });
  }
