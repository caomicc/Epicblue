//Parse related keys
var PARSE_APP = "I9mIo7TG44kG7YnNlaeEpKy4iXaJnMcz0MvWdheE";
var PARSE_JS = "l9NuLOzsgBxTbbQnFbx0bfUqtgnPEn3JEi1e7M8H";

$(document).ready(function() {
	new ServiceAnnouncements(PARSE_APP, PARSE_JS).parse();
	$('#announcmentbar #bar').css({"background-color":"none", "position":"relative", "margin-top": "-2px","color": "white", "width": "100%", "line-height": "40px", "margin":"0 auto", "text-align":"left"});
});

/**
* ServiceAnnouncements Utility Class
* Parse appKey and appData to display current service announcements
*/
function ServiceAnnouncements(appKey, appData)
{
	// Initialize the Parse object and define private variables
	Parse.initialize(appKey, appData);
	var annObj = Parse.Object.extend("ServiceAnnouncements");
    // Intensity Array = [0 => no, 1 => low, 2 => mod, 3 => high];
	var classIntensity = ["no", "low", "mod", "high"];
	var defaultServiceText = $("#announcmentbar #service").html();

	// public function: parse
	this.parse = function() {
		// Query the parsed object and sort by "createdAt" and "intensity"
		var query = new Parse.Query(annObj);
		query.descending("createdAt").descending("intensity");
        
        query.find({
        	success: function(results) {
        		var highestIntensity = 0;
        		var currentTime = new Date();

        		// Iterate through the service announcements
        		for (var i = 0; i < results.length; i++) {
        			// Announcement object data result
        			var announcement = results[i].attributes;

        			// Skip the announcement if it is disabled!
        			if (currentTime >= announcement.dateDisabled) {
        				continue;
        			}

        			// Add the announcement to our HTML block
        			addServiceAnnouncement({
        				level: announcement.intensity,
        				title: announcement.Announcement,
        				until: announcement.activeUntil,
        				description: announcement.desc
        			});

        			// Track the highest announcement intensity for the overall block color
        			highestIntensity = (highestIntensity < announcement.intensity) ? announcement.intensity : highestIntensity;
        		}

        		// Update the Service Announcement block title with the amount of announcements and level of intensity
        		updateServiceAnnouncementTitle(results.length, highestIntensity);
                
                // jQuery according code
				$("#announcmentbar #bar").accordion({ header: "h3", collapsible: true, active: false, heightStyle: "content", icons: { "header": "ui-icon-alert white", "activeHeader": "ui-icon-carat-1-n white"}});
				$("#announcmentbar #service").accordion( { header: "h4", collapsible: true, active: false, heightStyle: "content", icons: { "header": "ui-icon-carat-1-e", "activeHeader": "ui-icon-carat-1-n"}});
        	},

        	error: function(results) {
        		console.log(results);
        	}
        });
	};

	// private function: addServiceAnnouncement(Object annOptions) {}
	var addServiceAnnouncement = function(annOptions) {
		var serviceAnnouncementHtml = $("#announcmentbar #service");
		var currentHtml = serviceAnnouncementHtml.html();

		// In case the intensity and description are undefined, set some default values
		var intensityLevel = (classIntensity[annOptions.level] === undefined) ? "no" : classIntensity[annOptions.level];
		var descriptionText = (annOptions.description === undefined) ? "There are no service announcements" : annOptions.description;

		// Service announcement HTML
		var title = "<h4 class=\"" + intensityLevel + "intensity\">" + annOptions.title + "</h4>";
		var description = "<div class=\"" + intensityLevel + "intensitydesc\">" + descriptionText + "</div>";

		// Remove the loading HTML on first entry
		if (currentHtml === defaultServiceText) {
			currentHtml = "";
		}

		serviceAnnouncementHtml.html(currentHtml + title + description);
	}

    // private function: updateServiceAnnouncementTitle(int numberOfAnnouncements, int highestIntensity) {}
	var updateServiceAnnouncementTitle = function(numberOfAnnouncements, highestIntensity) {
		// In case the intensity is undefined, set a default value
		var intensityLevel = (classIntensity[highestIntensity] === undefined) ? "no" : classIntensity[highestIntensity];

		// Only update the Service Announcement Title if there is atleast 1 announcement available
		if (numberOfAnnouncements > 0) {
			$("#announcmentbar h3").html("Service Announcements (" + numberOfAnnouncements +")");
			$("#announcmentbar h3").addClass(intensityLevel + "intensity");
		}
	}
}