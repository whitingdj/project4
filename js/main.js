lightbox.option({
	      'wrapAround': true,
	      'alwaysShowNavOnTouchDevices': true
	    })


(function() {
			var $imgs = $('.container img');
			var $search = $('#filter-search');
			var cache = [];

			$imgs.each(function() {
				cache.push({
					element: this,
					text: this.alt.trim().toLowerCase()
				});
			});

			function filter() {
				var question = this.value.trim().toLowerCase();

				cache.forEach(function(img) {
					var index = 0;
					if (question){
						index = img.text.indexOf(question);
					}

					img.element.style.display = index === -1 ? 'none' : '';
				});
			}

			if ('oninput' in $search[0]) {
				$search.on('input', filter);
			} else {
				$search.on('keyup', filter);
			}
		}());