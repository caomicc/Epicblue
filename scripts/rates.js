//Parse related keys
var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";


$(document).ready(function() {
        Parse.initialize(PARSE_APP, PARSE_JS);
	RatesV = Parse.Object.extend("Rates");
	function getRATES() {
		var query = new Parse.Query(RatesV);
        query.ascending("fareNumber");
        query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				s += "<table class='table table-striped table-condensed table-bordered'>";
				for(var i=0, len=results.length; i<len; i++) {
					var time2 = results[i]; 
                    
                    if(i%2==0){s+="<tr>";}
                    else{s+="<tr>";}
					s += "<th>"+time2.get("Fare")+"</th>";
                    s += "<td>"+time2.get("Cash")+"</td>";
                    s += "<td>"+time2.get("CharlieCard")+"</td>";
					s += "</tr>";
				}
				s += "</table>";
				$("#rates").html(s);
			},
			error:function(error) {
				alert("Error when getting notes!");
			}
		});
	}
	//call getNotes immediately
	getRATES();

});
