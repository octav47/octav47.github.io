;(function(w) {
	w.__waterPump__ = function($) {
		$.getJSON(
			'http://tribunsky.com/waterpump/dist/parcel-manifest.json',
			function(manifest) {
				var indexjs = manifest['index.js']

				$.getScript('http://tribunsky.com/waterpump/dist' + indexjs)
			}
		)
	}
})(window)
