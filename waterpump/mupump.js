;(function(w) {
	w.__waterPump__ = function($) {
		$.getJSON('./dist/parcel-manifest.json', function(manifest) {
			var indexjs = manifest['index.js']

			$.getScript('.' + indexjs)
		})
	}
})(window, j)
