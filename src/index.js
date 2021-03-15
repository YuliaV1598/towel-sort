
module.exports = function towelSort (matrix) {
	let res = [];
	if (matrix == null){
		return res;
	}
	for (let i = 1; i < matrix.length; i = i+2) {
		let arr1 = matrix[i].sort(function(a,b){return b - a});
	}
	for (let i = 0; i < matrix.length; i++) {
	  for (k = 0; k < matrix[i].length; k++) {
		res.push(matrix[i][k]);
	  }
	}
	return res;
}
