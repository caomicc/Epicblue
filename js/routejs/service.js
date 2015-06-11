//Parse related keys
var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";


$(document).ready(function() {
    Parse.initialize(PARSE_APP, PARSE_JS);
	AnnouncementVariable = Parse.Object.extend("ServiceAnnouncements");
	
	function getService() {
		var query = new Parse.Query(AnnouncementVariable);
		var count = 0;
        query.descending("createdAt").descending("intensity");
        query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				count=results.length;
				for(var i=0, len=results.length; i<len; i++) {
					var ann = results[i]; 
					var dateDisabled = ann.get("dateDisabled");
					if(new Date() >= dateDisabled){
					}
						else{
					var intents = ann.get("intensity");
					s += "<h4";
					if(intents == 3){
						s += " class='highintensity'";
						}
					 if(intents == 2){
						s += " class='modintensity'";
						}
					 if(intents == 1){
						s += " class='lowintensity'";
						}
					else{
						s += " class='nointensity'";
							}
					s += " id='topservice'>"+ann.get("Announcement")+"</h4>";
					s += "<div";
					if(intents == 3){
						s += " class='highintensitydesc'";
						}
					 if(intents == 2){
						s += " class='modintensitydesc'";
						}
					 if(intents == 1){
						s += " class='lowintensitydesc'";
						}
					else{
						s += " class='nointensitydesc'";
							}
					s += " id='test'><p>";
					var activity = ann.get("activeUntil");
					if (activity == null){
					s += ann.get("desc");
					}
					else{
					s += ann.get("desc") + "<br><br><i>Active Until: " + ann.get("activeUntil")+"</i>";}
					s += "</p></div>";
					}
					
				var intents = ann.get("intensity");
				var x = "<div id='bar'>";
					if(intents == 3){
						x += "<h3 class='highintensity'>Service Announcements ("+count+") ";
						}
					 if(intents == 2){
						x += "<h3 class='modintensity'>Service Announcements ("+count+") ";
						}
					 if(intents == 1){
						x += "<h3 class='lowintensity'>Service Announcements ("+count+") ";
						}
					else{
						x += "<h3 class=''nointensity'>Service Announcements ("+count+") ";}
				if (count > 0){
					x += "";
					}
					x += "</h3><div id='service'></div></div>";}
				$('#announcmentbar').html(x);

$('#bar').css({"background-color":"none", "position":"relative", "margin-top": "-2px","color": "white", /*"width": "100%",*/ "line-height": "40px", "margin":"0 auto", "text-align":"left"});

				$("#service").html(s);
				$("#bar").accordion({ header: "h3", collapsible: true, active: false, heightStyle: "content", icons: { "header": "ui-icon-alert", "activeHeader": "ui-icon-carat-1-n"}});
				$("#service").accordion( { header: "h4", collapsible: true, active: false, heightStyle: "content", icons: { "header": "ui-icon-carat-1-e", "activeHeader": "ui-icon-carat-1-n"}});
				
			},
			error:function(error) {
				alert("Error when getting announcements!!");
			}
		});
	}
	getService();


});
