function checkWindow(){
	var w = $(window).width();
	if(w >= 1000){
		$("#searchBar").attr("placeholder","Search for products...");
		$("#siteMap").html("\
			<a title='Go to privacy policy page' href='#''>privacy policy</a> | \
			<a title='Go to terms &amp; conditions page' href='#'>terms &amp; conditions</a> | \
			<a title='Go to about this site page' href='#'>about this site</a> | \
			<a title='Go to metrimart news page' href='#'>metrimart news</a> | \
			<a title='Go to investor relations page' href='#'>investor relations</a>\
		");
		$("#copyright").text("© 2016 Metrimart, Inc. Metrimart, the Circle M Design, and The M Spot are trademarks of Metrimart, Inc. All rights reserved.");
	}
	else {
		$("#searchBar").attr("placeholder","SEARCH");
		$("#siteMap").html("\
			<a title='Go to privacy policy page' href='#'>privacy policy</a> | \
			<a title='Go to terms &amp; conditions page' href='#'>terms &amp; conditions</a> | \
			<a title='Go to about page' href='#'>about</a>\
		");
		$("#copyright").text("Copyright 2016 Metrimart, Inc.");
	}
}

var images = [
	['Sphero Darkside Ollie Front','hhtk2.jpg'],
	['Sphero Darkside Ollie Angled','hhtk2_av1.jpg'],
	['Sphero Darkside Ollie Side','hhtk2_av2.jpg'],
	['Sphero Darkside Ollie Back','hhtk2_av3.jpg'],
	['Sphero Darkside Ollie Tires','hhtk2_av5.jpg']
];

$(document).ready(function(){
	checkWindow();
	$(window).resize(checkWindow);
	$(".showMore").click(function(){
		$(".moreInfo").slideToggle();
		var text = $(this).text();
		if(text === "Show More..."){
			$(this).text("Show Less...");
		}
		else {
			$(this).text("Show More...");
		}
	});
	$(".productImg").click(function(){
		var currentImg = $(this);
		var currentSrc = currentImg.attr('src').replace('Assets/Images/Product Images/','');
		for(i=0;i<images.length;i++){
			if(currentSrc == images[i][1]){
				var nextSrc = '';
				var nextAlt = '';
				if(i < (images.length - 1)){
					nextSrc = images[i+1][1];
					nextAlt = images[i+1][0];
				}
				else {
					nextSrc = images[0][1];
					nextAlt = images[0][0];
				}
				currentImg.attr({
					'src': 'Assets/Images/Product Images/'+nextSrc,
					'alt': nextAlt
				});
				break;
			}
		}
		
	});
});