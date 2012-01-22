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
		$("#english").html(LL.topic.english[LL.counter]);
		$("#translated").html(LL.topic.translated[LL.counter]);
		
		if (LL.topic.images[LL.counter] !== "") {
			$("#desc-img").html("<img src='../../images/" + LL.topic.images[LL.counter] + "' height='100px' width='100px'>");
		}
		
		if (LL.topic.description[LL.counter] !== "") {
			$("#desc-text").html(LL.topic.description[LL.counter]);
		}
	};
	
	window.LL=LL;
})();