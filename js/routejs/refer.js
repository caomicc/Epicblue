
	function getTable(routeName) {
		var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
		var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";
		
		Parse.initialize(PARSE_APP, PARSE_JS);
		
		routeGrab = Parse.Object.extend(routeName);

		var query = new Parse.Query(routeGrab);
        query.ascending("StopNumber");
        query.find({
			success:function(results) {
				var runcounter = 0;
				if(results.length > 0)
				{			
					for(var resultAttribute in results[0].attributes)
					{
						var regex = /^Run/;
						if (regex.test(resultAttribute))
						{
							runcounter++;
						}
					}
				}
				console.dir(results);
				var s = "";
				s += "<table id='route' class='table table-striped table-condensed table-bordered'>";
				for(var i=0, len=results.length; i<len; i++) {
					var time = results[i]; 
                    
                    if(i%2===0){s+="<tr id='route'>";}
                    else{s+="<tr id='route'>";}
					s += "<th id='route'>"+time.get("StopName")+"</th>";
					var run = true;
					var n = 1;
					while(run)
					{
						var colname = "Run"+ n;
						n = n + 1;
						var stoptime = time.get(colname);
						if (stoptime === null)
						{
							run = false;
						}
						else if (n > runcounter)
						{
							s+= "<td id='route'>"+stoptime+"</td>";
							run = false;
						}
						else
						{
							s+= "<td id='route'>"+stoptime+"</td>";
						}
					}
                    /*s += "<td>"+time2.get("Run1")+"</td>";
                    s += "<td>"+time2.get("Run2")+"</td>";
                    s += "<td>"+time2.get("Run3")+"</td>";
                    s += "<td>"+time2.get("Run4")+"</td>";
                    s += "<td>"+time2.get("Run5")+"</td>";
                    s += "<td>"+time2.get("Run6")+"</td>"; */                
					s += "</tr>";
				}
				s += "</table>";
							


				$("#routesjs" + routeName).html(s);
			},
			error:function(error) {
				alert("Error when retrieving schedule for "+routeName);
			}
		});
	}
	
	function getLegend(routeName) {
		var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
		var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";
		
		Parse.initialize(PARSE_APP, PARSE_JS);
		
		legendGrab = Parse.Object.extend("Legend");
		var query = new Parse.Query(legendGrab);
            console.log(query[0]);
        query.ascending("Num");
        query.find({
			success:function(results) {
				console.dir(results);
				var s = "<h3 id='legend'>Legend</h3><p id='legend'>";
				for(var i=0, len=results.length; i<len; i++) {
					var legenditem = results[i]; 
  					s += legenditem.get(routeName);                 
					s += "</p>";
				}
				$("#legend").html(s);
			},
			error:function(error) {
				alert("Error when retrieving legend for "+routeName);
			}
		});
	}
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
				var s = "<h3 id='stoplist'>Stops</h3>";
				for(var i=0, len=results.length; i<len; i++) {
					var list = results[i]; 
					s += "<p id='stoplist'>";
  					s += list.get("StopName");                 
					s += "</p>";
				}
				$("#list" + routeName).html(s);
			},
			error:function(error) {
				alert("Error when retrieving stop list for "+routeName);
			}
		});
	}