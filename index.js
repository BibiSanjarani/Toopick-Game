//initialise DOM
var imgArr = [];
var score =0 ;
$ (init)

function init (){
	console.log("DOM loaded");
	starting ()
}
//function to start game
function starting() {

	document.getElementById('startButton').addEventListener("click", function(event){
		event.preventDefault();
		console.log("start button : working");
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
	getImgSrc()
	
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
  	
}

function getImgSrc(){

	$("img").click(function() {
		flipTile360()
		if (score <= 7 ){
			var imgSrc = $(this).attr("src");
			imgArr.push(imgSrc);

			if (imgArr.length === 2){
				compareSrc(imgArr[0],imgArr[1]);
				imgArr = []
			}
			
		}
	})
}
function compareSrc(imgSrc,imgSrc2){
	if (imgArr[0]===imgArr[1]){
		score ++ ;
		document.getElementById("score").innerHTML = +score;
		console.log("match");
	}else{
		imgSrc = null
		imgSrc2 = null
		console.log("no match");
	}
	
}


function flipTile360(){
	$('.container').each(function(i,name){
  		$(this).click(function(event){
    		$(event.target).css('transform','rotateY(360deg)')
  		})
	})
}

function flipTile (){
	$('.container').each(function(i,name){
  		this.click(function(event){
     	$(event.target).css('transform','rotateY(360deg)')
  		})
	})
}
function getTileCover(blankTile){
	var blankTile = ("./images/blankTile.jpg");
}
// function addTileCover(blankTile){
// 	

// 	setTimeout(function(){ 

// 		for (var i = 0; i < 16; i++){

// 			var numberBlankTile = document.getElementById("tile"+i);
// 			numberBlankTile.src = blankTile;
// 		}
// 	}, 5000);	
// }

// function looper(){
// 	while (score <=8){
		
// 	}
// }

// toggle if you click on the image it turns over

	//do if statement ; if match disable toggle
			//add one to score 
			// var score =0 
			// score ++
			
	//, if not match toggle back.
