function volwesCount (str) {
	return (str.match(/[aoieyu]/gi) || []).length;
}