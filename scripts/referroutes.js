function getList(routeName) {
		var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
		var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";
		
		Parse.initialize(PARSE_APP, PARSE_JS);
		
		RouteList = Parse.Object.extend(routeName);
		var query = new Parse.Query(RouteList);
        query.ascending("StopNumber");
        query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				for(var i=0, len=results.length; i<len; i++) {
					var list = results[i]; 
                    s += " ";
  					s += list.get("StopName");                 
					s += ",";
				}
				s += "|";
				$("#list" + routeName).html(s);
			},
			error:function(error) {
				alert("Error with retrieving stop list for "+routeName);
			}
		});
	}