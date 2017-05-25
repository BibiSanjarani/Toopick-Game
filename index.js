//initialise DOM
$ (init)

function init (){
	console.log("DOM loaded");
	starting ()
}
//function to start game
function starting() {

	document.getElementById('startButton').addEventListener("click", function(event){
		event.preventDefault();
		console.log("start button : working")
		getRandomImages()
	});
}
// get images to appear on the grid
	//1. add event listener to tiles
	//2. on click of start add element img
	//3. add images to divs
	//4. add class to format images to tile size

function getRandomImages () {
	var imgName = [
		"./images/1181083833_eightbit.jpg",
		"./images/36978184_eightbit.jpg ",            
		"./images/eightbit-2.jpg",
		"./images/1710584842_eightbit.jpg",           
		"./images/487888228_eightbit-1.jpg",           
		"./images/eightbit-3.jpg",
		"./images/eightbit.jpg",
		"./images/eightbit-1.jpg"
		]

	var imgList = imgName.concat(imgName);
	randomShuffle(imgList)
	getImages(imgList)
	
}
function getImages (imgList){
	for (var i = 0; i < imgList.length; i++){
		var tileNumber = document.getElementById("tile"+i);
		tileNumber.src = imgList[i]		
	}
}
function randomShuffle(imgList){
    for (var i = imgList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgList[i];
        imgList[i] = imgList[j];
        imgList[j] = temp;
    }
    // console.log(imgList);
  	getImgSrc()
}
	
function getImgSrc(){
	// for (i=0; i < 16;i++){
	// 	// var imgSrc = document.getElementById("tile"+i).getAttribute("src");
	// 	// var tileNumber
	// 	// 
	// 	// 	console.log("imgSrc");

	// 	}
$("img").click(function(){
	$("").addClass("visible")
	for (i=0; i < 16;i++){
	var getImgSrc =var imgSrc = document.getElementById("tile"+i).getAttribute("src");

	console.log("tile working");

	}
});	
		
	


// toggle if you click on the image it turns over

	//do if statement ; if match disable toggle
			//add one to score 
			// var score =0 
			// score ++
			
	//, if not match toggle back.
