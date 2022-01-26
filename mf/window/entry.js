;(function(w) {
	w.__entry__ = function($) {
		$.getJSON(
			'http://tribunsky.com/mf/window/dist/parcel-manifest.json',
			function(manifest) {
				var indexjs = manifest['index.js']
				var style =
					manifest['../node_modules/bootstrap/dist/css/bootstrap.min.css']

				$.getScript('http://tribunsky.com/mf/window/dist' + indexjs)

				$('<link/>', {
					rel: 'stylesheet',
					type: 'text/css',
					href: 'http://tribunsky.com/mf/window/dist' + style,
				}).appendTo('head')
			}
		)
	}
})(window)
