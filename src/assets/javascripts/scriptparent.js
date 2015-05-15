function scriptparent() {
	var scripts = document.getElementsByTagName('script');
	return scripts[scripts.length - 1].parentNode;
};