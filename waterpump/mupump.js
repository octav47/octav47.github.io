;(function(w) {
	w.__waterPump__ = function($) {
		$.getJSON(
			'http://tribunsky.com/waterpump/dist/parcel-manifest.json',
			function(manifest) {
				var indexjs = manifest['index.js']
				var style =
					manifest['../node_modules/bootstrap/dist/css/bootstrap.min.css']

				$.getScript('http://tribunsky.com/waterpump/dist' + indexjs)

				$('<link/>', {
					rel: 'stylesheet',
					type: 'text/css',
					href: 'http://tribunsky.com/waterpump/dist' + style,
				}).appendTo('head')
			}
		)
	}
})(window)
