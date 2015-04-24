var page = require('webpage').create();

page.viewportSize = { width: 1024, height: 768 };

page.open('http://www.alangibson.me.uk', function(status) {

	console.log('Status: ' + status);

	if (status == 'success') {

		page.render('alangibson.me.uk.png');

		var title = page.evaluate(function() {
			return document.title;
		});

		console.log('Page title:\t' + title);

		var posts = page.evaluate(function() {
			return [].map.call(document.querySelectorAll('h2.post-title'), function(post_title) {
				return post_title.innerText;
			});
		});

		//var posts = page.evaluate(function() {
		//	return [].map.call(document.querySelectorAll('h2.post-title a'), function(post_title) {
		//		return post_title.href;
		//	});
		//});

		if (posts == null || posts.length == 0) {

			console.log('No posts found!');

		} else {

			console.log('Found ' + posts.length + ' posts:');

			for (var i=0; i<posts.length; i++) {
				console.log('\t' + posts[i]);
			}

		}

	}

	phantom.exit();
});
