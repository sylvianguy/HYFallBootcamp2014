var warmFuzzies = {};

warmFuzzies.friends = [
	"andrea",
	"andrew",
	"ben",
	"dana",
	"deb",
	"emilia",
	"erika",
	"francine",
	"frank",
	"george",
	"ivailo",
	"jill",
	"julie",
	"kristine",
	"lindsay",
	"marlene",
	"matt",
	"michaelangelo",
	"moya",
	"nikin",
	"phil",
	"rachel",
	"sam",
	"shane",
	"stephanie",
	"sylvia",
	"thomas"];

warmFuzzies.init = function() {
	warmFuzzies.build(warmFuzzies.friends);
};

warmFuzzies.build = function(students) {
	warmFuzzies.friends.sort(function() {
		return 0.5 - Math.random();
	});
	$.each(students, function(i){
		var name = students[i];
		var image = "<img src=\'images/" + name + ".jpg'>";
		var link = "<a href='students/" + name + ".html'>";
		var title = "<h2>" + name + "</h2>";
		var container = "<li>" + link + title + image + "</a></li>";
		$('ul.friend').append(container);
	});
};

$(function() {
	warmFuzzies.init();
});

