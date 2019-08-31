

// google analytics
(function(window, document, undefined) {

	if (typeof window._gaId === 'undefined') {
		return
	}
	if (typeof window._gaDomain === 'undefined') {
		return
	}

	var doNotTrack = window.doNotTrack || false;
	if (doNotTrack) {
		return
	}

	// Originial
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', _gaId, _gaDomain);
    ga('send', 'pageview');


})(window, document);


// disqus comments
(function(window, document, undefined) {

	if (typeof window.disqus_shortname === 'undefined') {
		return
	}

	if (window.location.hostname == 'localhost') {
		return
	}

	var disqus_thread = document.getElementById('disqus_thread');
	if (!disqus) {
		return
	}

	var dsq = document.createElement('script');
	dsq.type = 'text/javascript';
	dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);


})(window, document);