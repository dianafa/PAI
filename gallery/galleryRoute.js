var xml = require('xml');

var GalleryRoute = {
	handle: function(req, res, next) {
		var obj = {};

		if (req.params.page == 3) {
			obj = {
				imageTag:
					[
						{ Image: 'http://loremflickr.com/200/200?dsesfef' },
						{ Image: 'http://loremflickr.com/200/200?fsfes' }
					]
				};
		} else {
			obj = {
				imageTag:
					[
						{ Image: 'http://loremflickr.com/200/200?fsfefee' },
						{ Image: 'http://loremflickr.com/200/200?ffeed' },
						{ Image: 'http://loremflickr.com/200/200?fesfffefefe' }
					]
				};
		}

		res.header('Content-Type', 'text/xml');
		res.send(xml(obj));
	}
};

module.exports = GalleryRoute;
