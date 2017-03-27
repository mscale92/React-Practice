
function addingOne(arrayOfNumbers){
	return arrayOfNumbers.map(function(numberFromArray){
		return numberFromArray + 1;
	});
	

}

console.log(addingOne([1,2,3])); 
