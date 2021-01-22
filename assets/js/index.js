function onCopy(value) {
	navigator.clipboard.writeText(value).then(
		function () {
			var x = document.getElementById("snackbar");
			x.className = "show";
			setTimeout(function () {
				x.className = x.className.replace("show", "");
			}, 1000);
		},
		function (err) {
			console.error("Async: Could not copy text: ", err);
		}
	);
}
