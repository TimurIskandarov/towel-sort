
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let arr = [];
  for(let i = 0; i < matrix.length; i++) {
    i % 2 ? matrix[i].reverse().reduce((a,b) => arr.push(b), 0) : matrix[i].reduce((a,b) => arr.push(b), 0);
  }
  return arr;
}
