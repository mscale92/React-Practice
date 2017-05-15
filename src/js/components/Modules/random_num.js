//Function that determines the random grid position!

module.exports = {
 gridPosition(){
 	var randomNumForPosition = Math.floor(Math.random() * 9);

 	return "pos" + randomNumForPosition;
 },

 colorOfDot(){
 	//The point of the dots page is to have a random dot color on the screen, what better way than a random
		//number generator! With values between 0-2, aka three possible values
		//Don't forget to trunc, rounds down to the nearest integer!
		var randomNumForColors = Math.floor(Math.random() * 3);
		var nameOfColor = "";
		var dotImgUrlString = "";

		//Here we set the color names! Our img urls are only different via the name of the color dot
		if(randomNumForColors == 0){
			nameOfColor = "red";
		}

		else if(randomNumForColors == 1){
			nameOfColor = "green";
		}

		else{
			nameOfColor = "blue";
		}

		dotImgUrlString = "/files/imgs/" + nameOfColor + "_dot.jpg";
		//console.log(dotImgUrlString, "img url string");
		return dotImgUrlString;
 }
  
}