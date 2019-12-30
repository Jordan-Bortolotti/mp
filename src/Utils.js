class Utils {
	isEncodedURIComponent(uri) {
		return (decodeURI(uri) !== decodeURIComponent(uri));
	}
};

module.exports = Utils;