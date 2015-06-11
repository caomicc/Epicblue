//Parse related keys
var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";


$(document).ready(function() {
        Parse.initialize(PARSE_APP, PARSE_JS);
	DialRates = Parse.Object.extend("darRates");
	function getRATES() {
		var query = new Parse.Query(DialRates);
        query.ascending("fareNumber");
        query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				for(var i=0, len=results.length; i<len; i++) {
					var time2 = results[i]; 
                    s += "<table>";
                    if(i%2==0){s+="<tr>";}
                    else{s+="<tr style='background-color:#a7c5f3;'>";}
					s += "<th>"+time2.get("Fare")+"</th>";
                    s += "<td>"+time2.get("Cash")+"</td>";
					s += "</tr></table>";
				}
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
