(function() {
	var LL= LL || {};
	LL.counter= 0;
	LL.lang= "";
	LL.section= "";
	LL.topic= "";
	LL.listSize =0;
	
	LL.initLangSec = function (language, section) {
		LL.lang=window[language];
		LL.section= LL.lang[section];
		LL.initDisplay('words');
	};
	
	LL.initDisplay = function (topic) {
		LL.topic= LL.section[topic];
		LL.listSize= LL.topic.english.length;
		LL.counter=0;
		LL.show(0);
		//modifying the css-tabbed view
		$(".selected").addClass("unselected").removeClass("selected");
		$("#tab-" + topic).removeClass("unselected").addClass("selected");
	};
	
	LL.show = function (diff) {
		if (LL.counter+diff === 0){
			$("#prev").hide();
		} else {
			$("#prev").show();
		}
		
		if (LL.counter+diff === LL.listSize-1){
			$("#next").hide();
		} else {
			$("#next").show();
		}
		
		//updating the counter
		LL.counter = LL.counter + diff;
		$("#english").html("<span>" + LL.topic.english[LL.counter] +"</span>");
		$("#translated").html("<span>" + LL.topic.translated[LL.counter] +"</span>");
		
		if (LL.topic.images[LL.counter] !== "") {
			$("#desc-img").html("<img src='../../images/" + LL.topic.images[LL.counter] + "' height='70%' style='-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;'>");
		}
		
		if (LL.topic.description[LL.counter] !== "") {
			$("#desc-text").html("<span>" + LL.topic.description[LL.counter] + "</span>");
		}
	};
	
	window.LL=LL;
})();
