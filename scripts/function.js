	function getTable() {
		var query = new Parse.Query(routeGrab);
        query.ascending("StopNumber");
        query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				s += "<table>";
				for(var i=0, len=results.length; i<len; i++) {
					var time = results[i]; 
                    
                    if(i%2==0){s+="<tr style='background-color:#e4e6d0;'>";}
                    else{s+="<tr>";}
					s += "<th>"+time.get("StopName")+"</th>";
					var run = true;
					var n = 1;
					while(run)
					{
						var colname = "Run"+ n;
						n = n + 1;
						var stoptime = time.get(colname);
						if (stoptime == null)
						{
							run = false;
						}
						else
						{
							s+= "<td>"+stoptime+"</td>";
						}
					}
                    /*s += "<td>"+time2.get("Run1")+"</td>";
                    s += "<td>"+time2.get("Run2")+"</td>";
                    s += "<td>"+time2.get("Run3")+"</td>";
                    s += "<td>"+time2.get("Run4")+"</td>";
                    s += "<td>"+time2.get("Run5")+"</td>";
                    s += "<td>"+time2.get("Run6")+"</td>";   */                 
					s += "</tr>";
				}
				s += "</table>";
				$("#routesjs").html(s);
			},
			error:function(error) {
				alert("Error!");
			}
		});
	}
