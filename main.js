var guidelineСircle1;
var clickCircle1;

function init() {
	console.info("initialized"); //console.log,info,error,warn,debug
	
	
	// !!!!!canvas для рисования!!!!!!!! //
		
	var canvas = document.getElementById("draw");
	var c = canvas.getContext("2d");
	
	var DRAW_CENTER_X = 300;
	var DRAW_CENTER_Y = 300;
	
	c.translate(DRAW_CENTER_X, DRAW_CENTER_Y);

	//при нажатии мышки
	initMouseInteraction();
	
	//создаем imageData с кисточкой
	function createBrush(r, g, b) {
		var imageDataWithBrush = c.createImageData(4, 4);
		
		function colorPixel(i, j) {
			var ind = 4 * (4 * i + j);
			imageDataWithBrush.data[ind] = r;
			imageDataWithBrush.data[ind + 1] = g;
			imageDataWithBrush.data[ind + 2] = b;
			imageDataWithBrush.data[ind + 3] = 255;
		}
		
		                  colorPixel(0, 1); colorPixel(0, 2);
		colorPixel(1, 0); colorPixel(1, 1); colorPixel(1, 2); colorPixel(1, 3);
		colorPixel(2, 0); colorPixel(2, 1); colorPixel(2, 2); colorPixel(2, 3);
		                  colorPixel(3, 1); colorPixel(3, 2);
						  
	    //convert imageData to image
		var canvas = document.createElement("canvas");
		canvas.width = 4;
		canvas.height = 4;
		var ctx = canvas.getContext("2d");
		ctx.putImageData(imageDataWithBrush, 0, 0);
		
		var img = new Image();
		img.src = canvas.toDataURL();
		
		return img;
	}
	
	currentBrushImg = createBrush(37, 38, 67); //при нажатии на кнопки выбора цвета нужно писать currentBrush = createBrush(цвет)
	ereaserImageData = c.createImageData(6, 6);
	
	
	
	
	
	// !!!!!canvas кнопочки!!!!!!!! //
		
	var stage = new createjs.Stage("controls");
	stage.enableMouseOver(10);
	
	createjs.Ticker.addEventListener("tick", stage);
	createjs.Ticker.timeingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.framerate = 30;
	
	// фон без и с направляющими
	
	var rect = new createjs.Shape();
	rect.graphics
		.beginFill("#DDD")
		.drawRect(0, 0, 1100, 600);
	stage.addChild(rect);	
	
	var backgroundWithGuides = new createjs.Bitmap("guides.png");	
	
	
	//кнопка для направляющих
	
	var guidelines = false;
	
	var guideButton = new createjs.Bitmap("guide.png");
	var guideButton2 = new createjs.Bitmap("guide2.png");
	guideButton.x = 50;
	guideButton2.x = 50;
	guideButton.y = 50;
	guideButton2.y = 50;
	
	var rectGuideButton = new createjs.Shape();
	rectGuideButton.graphics.beginFill("#620019").drawRect(0, 0, 150, 50);
	rectGuideButton.x = 50;
	rectGuideButton.y = 50;
	stage.addChild(rectGuideButton);
	stage.addChild(guideButton);
	
	
	var clickGuideButton = function(e) {	
		if (guidelines){       		
			stage.removeChild(guideButton2);
			stage.removeChild(backgroundWithGuides);
            guidelines = false;           
        } else {
			stage.addChild(guideButton2);
			stage.addChild(backgroundWithGuides);
			guidelines = true;
        }          
	};
	
	rectGuideButton.addEventListener("click", clickGuideButton);
	
	//создание окружностей-направляющих
	
	var circle1 = new createjs.Shape();
	var circle2 = new createjs.Shape();
	var circle3 = new createjs.Shape();
	var circle4 = new createjs.Shape();
	var circle5 = new createjs.Shape();
	var circle6 = new createjs.Shape();
	
	creatingCircles(circle1, circle2, circle3, circle4, circle5, circle6);
	
	//кнопка для круга №1
	guidelineСircle1 = false;
	console.log(guidelineСircle1); 
	var circle1Button = new createjs.Bitmap("circle01.png");
		var circle1Button1 = new createjs.Bitmap("circle11.png");
		circle1Button.x = 50;
		circle1Button1.x = 50;
		circle1Button.y = 125;
		circle1Button1.y = 125;
		
		var rectCircle1Button = new createjs.Shape();
		rectCircle1Button.graphics.beginFill("#620019").drawCircle(25, 25, 25);
		rectCircle1Button.x = 50;
		rectCircle1Button.y = 125;
		stage.addChild(rectCircle1Button);
		stage.addChild(circle1Button);
		
		
		clickCircle1 = function(e) {	
			if (guidelineСircle1){       		
				stage.removeChild(circle1Button1);
				stage.removeChild(circle1);
				guidelineСircle1 = false;   
			} else {
				stage.addChild(circle1Button1);
				stage.addChild(circle1);
				guidelineСircle1 = true;
			}    		
		};
		
		rectCircle1Button.addEventListener("click", clickCircle1);
	
	//кнопка для круга 2
	var guidelineСircle2 = false;	
	var circle2Button = new createjs.Bitmap("circle02.png");
	var circle2Button2 = new createjs.Bitmap("circle22.png");
	circle2Button.x = 115;
	circle2Button2.x = 115;
	circle2Button.y = 125;
	circle2Button2.y = 125;
	
	var rectCircle2Button = new createjs.Shape();
	rectCircle2Button.graphics.beginFill("#620019").drawCircle(25, 25, 25);
	rectCircle2Button.x = 115;
	rectCircle2Button.y = 125;
	stage.addChild(rectCircle2Button);
	stage.addChild(circle2Button);
	
	
	var clickCircle2 = function(e) {	
		if (guidelineСircle2){       		
			stage.removeChild(circle2Button2);
			stage.removeChild(circle2);
            guidelineСircle2 = false;           
        } else {
			stage.addChild(circle2Button2);
			stage.addChild(circle2);
			guidelineСircle2 = true;
        }          
	};
	
	rectCircle2Button.addEventListener("click", clickCircle2);		
	
	//кнопка для круга №3
	var guidelineСircle3 = false;
	var circle3Button = new createjs.Bitmap("circle03.png");
	var circle3Button3 = new createjs.Bitmap("circle33.png");
	circle3Button.x = 180;
	circle3Button3.x = 180;
	circle3Button.y = 125;
	circle3Button3.y = 125;
	
	var rectCircle3Button = new createjs.Shape();
	rectCircle3Button.graphics.beginFill("#620019").drawCircle(25, 25, 25);
	rectCircle3Button.x = 180;
	rectCircle3Button.y = 125;
	stage.addChild(rectCircle3Button);
	stage.addChild(circle3Button);
	
	
	var clickCircle3 = function(e) {	
		if (guidelineСircle3){       		
			stage.removeChild(circle3Button3);
			stage.removeChild(circle3);
            guidelineСircle3 = false;           
        } else {
			stage.addChild(circle3Button3);
			stage.addChild(circle3);
			guidelineСircle3 = true;
        }          
	};
	
	rectCircle3Button.addEventListener("click", clickCircle3);
	
	//кнопка для круга 4
	var guidelineСircle4 = false;
	var circle4Button = new createjs.Bitmap("circle04.png");
	var circle4Button4 = new createjs.Bitmap("circle44.png");
	circle4Button.x = 50;
	circle4Button4.x = 50;
	circle4Button.y = 185;
	circle4Button4.y = 185;
	
	var rectCircle4Button = new createjs.Shape();
	rectCircle4Button.graphics.beginFill("#620019").drawCircle(25, 25, 25);
	rectCircle4Button.x = 50;
	rectCircle4Button.y = 185;
	stage.addChild(rectCircle4Button);
	stage.addChild(circle4Button);
	
	
	var clickCircle4 = function(e) {	
		if (guidelineСircle4){       		
			stage.removeChild(circle4Button4);
			stage.removeChild(circle4);
            guidelineСircle4 = false;           
        } else {
			stage.addChild(circle4Button4);
			stage.addChild(circle4);
			guidelineСircle4 = true;
        }          
	};
	
	rectCircle4Button.addEventListener("click", clickCircle4);
	
	//кнопка для круга №5
	var guidelineСircle5 = false;
	var circle5Button = new createjs.Bitmap("circle05.png");
	var circle5Button5 = new createjs.Bitmap("circle55.png");
	circle5Button.x = 115;
	circle5Button5.x = 115;
	circle5Button.y = 185;
	circle5Button5.y = 185;
	
	var rectCircle5Button = new createjs.Shape();
	rectCircle5Button.graphics.beginFill("#620019").drawCircle(25, 25, 25);
	rectCircle5Button.x = 115;
	rectCircle5Button.y = 185;
	stage.addChild(rectCircle5Button);
	stage.addChild(circle5Button);
	
	
	var clickCircle5 = function(e) {	
		if (guidelineСircle5){       		
			stage.removeChild(circle5Button5);
			stage.removeChild(circle5);
            guidelineСircle5 = false;           
        } else {
			stage.addChild(circle5Button5);
			stage.addChild(circle5);
			guidelineСircle5 = true;
        }          
	};
	
	rectCircle5Button.addEventListener("click", clickCircle5);

	//кнопка для круга 6
	var guidelineСircle6 = false;
	var circle6Button = new createjs.Bitmap("circle06.png");
	var circle6Button6 = new createjs.Bitmap("circle66.png");
	circle6Button.x = 180;
	circle6Button6.x = 180;
	circle6Button.y = 185;
	circle6Button6.y = 185;
	
	var rectCircle6Button = new createjs.Shape();
	rectCircle6Button.graphics.beginFill("#620019").drawCircle(25, 25, 25);
	rectCircle6Button.x = 180;
	rectCircle6Button.y = 185;
	stage.addChild(rectCircle6Button);
	stage.addChild(circle6Button);
	
	
	var clickCircle6 = function(e) {	
		if (guidelineСircle6){       		
			stage.removeChild(circle6Button6);
			stage.removeChild(circle6);
            guidelineСircle6 = false;           
        } else {
			stage.addChild(circle6Button6);
			stage.addChild(circle6);
			guidelineСircle6 = true;
        }          
	};
	
	rectCircle6Button.addEventListener("click", clickCircle6);
	
	
	//кнопка для бордового цвета
		
	var vinous = true;
	
	var vinousButton = new createjs.Bitmap("button_color_vinous02.png");
	vinousButton.x = 50;
	vinousButton.y = 260;
	
	var rectVinousButton = new createjs.Shape();
	rectVinousButton.graphics.beginFill("#620019").drawRect(0, 0, 50, 50);
	rectVinousButton.x = 50;
	rectVinousButton.y = 260;
	stage.addChild(rectVinousButton);
	
	var clickVinous = function(e) {	
			if (vinous) {
		stage.addChild(vinousButton);
		stage.removeChild(blueButton);
		stage.removeChild(greenButton);
		stage.removeChild(blackButton);
		stage.removeChild(eraserButton2);
		vinous = false;	
		blue = true;
		green = true;
		black = true;
		eraser = false;	
		currentBrushImg = createBrush(98, 0, 25);		
		
		circle1.graphics
			.beginStroke("#620019")
			.drawCircle(0, 0, 50);	
		
		circle2.graphics
			.beginStroke("#620019")
			.drawCircle(0, 0, 65);

		circle3.graphics
			.beginStroke("#620019")
			.drawCircle(0, 0, 180);	

		circle4.graphics
			.beginStroke("#620019")
			.drawCircle(0, 0, 200);		
			
		circle5.graphics
			.beginStroke("#620019")
			.drawCircle(0, 0, 270);	

		circle6.graphics
			.beginStroke("#620019")
			.drawCircle(0, 0, 300);	
	}	
	};
		
	rectVinousButton.addEventListener("click", clickVinous);	
	
		//кнопка для синего цвета
		
	var blue = false;
	
	var blueButton = new createjs.Bitmap("button_color_blue02.png");
	blueButton.x = 100;
	blueButton.y = 260;
	
	
	var rectBlueButton = new createjs.Shape();
	rectBlueButton.graphics.beginFill("#252643").drawRect(0, 0, 50, 50);
	rectBlueButton.x = 100;
	rectBlueButton.y = 260;
	stage.addChild(rectBlueButton);
	stage.addChild(blueButton);
	
	var clickBlue = function(e) {	
			if (blue) {
		stage.addChild(blueButton);
		stage.removeChild(vinousButton);
		stage.removeChild(greenButton);
		stage.removeChild(blackButton);
		stage.removeChild(eraserButton2);
		blue = false;
		vinous = true;		
		green = true;
		black = true;
		eraser = false;	
		currentBrushImg = createBrush(37, 38, 67);	
			
		circle1.graphics
			.beginStroke("#252643")
			.drawCircle(0, 0, 50);	
		
		circle2.graphics
			.beginStroke("#252643")
			.drawCircle(0, 0, 65);

		circle3.graphics
			.beginStroke("#252643")
			.drawCircle(0, 0, 180);	

		circle4.graphics
			.beginStroke("#252643")
			.drawCircle(0, 0, 200);		
			
		circle5.graphics
			.beginStroke("#252643")
			.drawCircle(0, 0, 270);	

		circle6.graphics
			.beginStroke("#252643")
			.drawCircle(0, 0, 300);		
	}	
	};	
	rectBlueButton.addEventListener("click", clickBlue);
	
		//кнопка для зеленого цвета
		
	var green = true;
	
	var greenButton = new createjs.Bitmap("button_color_green02.png");
	greenButton.x = 150;
	greenButton.y = 260;
	
	var rectGreenButton = new createjs.Shape();
	rectGreenButton.graphics.beginFill("#004644").drawRect(0, 0, 50, 50);
	rectGreenButton.x = 150;
	rectGreenButton.y = 260;
	stage.addChild(rectGreenButton);
	
	var clickGreen = function(e) {	
			if (green) {
		stage.addChild(greenButton);
		stage.removeChild(vinousButton);
		stage.removeChild(blueButton);
		stage.removeChild(blackButton);
		stage.removeChild(eraserButton2);
		green = false;
		blue = true;		
		vinous = true;	
		black = true;		
		eraser = false;	
		currentBrushImg = createBrush(0, 70, 68);	
		
		circle1.graphics
			.beginStroke("#004644")
			.drawCircle(0, 0, 50);	
		
		circle2.graphics
			.beginStroke("#004644")
			.drawCircle(0, 0, 65);

		circle3.graphics
			.beginStroke("#004644")
			.drawCircle(0, 0, 180);	

		circle4.graphics
			.beginStroke("#004644")
			.drawCircle(0, 0, 200);		
			
		circle5.graphics
			.beginStroke("#004644")
			.drawCircle(0, 0, 270);	

		circle6.graphics
			.beginStroke("#004644")
			.drawCircle(0, 0, 300);			
	}	
	};	
	rectGreenButton.addEventListener("click", clickGreen);

			//кнопка для черного цвета
		
	var black = true;
	
	var blackButton = new createjs.Bitmap("button_color_black02.png");
	blackButton.x = 200;
	blackButton.y = 260;
	
	
	var rectBlackButton = new createjs.Shape();
	rectBlackButton.graphics.beginFill("#000000").drawRect(0, 0, 50, 50);
	rectBlackButton.x = 200;
	rectBlackButton.y = 260;
	stage.addChild(rectBlackButton);
	
	var clickBlack = function(e) {	
		if (black) {
			stage.addChild(blackButton);
			stage.removeChild(vinousButton);
			stage.removeChild(blueButton);
			stage.removeChild(greenButton);
			stage.removeChild(eraserButton2);
			black = false;
			blue = true;		
			vinous = true;		
			green = true;	
			eraser = false;	
			currentBrushImg = createBrush(0, 0, 0);	
			
			circle1.graphics
				.beginStroke("#000000")
				.drawCircle(0, 0, 50);	
			
			circle2.graphics
				.beginStroke("#000000")
				.drawCircle(0, 0, 65);

			circle3.graphics
				.beginStroke("#000000")
				.drawCircle(0, 0, 180);	

			circle4.graphics
				.beginStroke("#000000")
				.drawCircle(0, 0, 200);		
				
			circle5.graphics
				.beginStroke("#000000")
				.drawCircle(0, 0, 270);	

			circle6.graphics
				.beginStroke("#000000")
				.drawCircle(0, 0, 300);		
		}	
	};	
	rectBlackButton.addEventListener("click", clickBlack);
	
			//кнопка для ластика
		
	var eraser = false;
	
	var eraserButton = new createjs.Bitmap("eraser.png");
	var eraserButton2 = new createjs.Bitmap("eraser2.png");
	
	eraserButton.x = 50;
	eraserButton2.x = 50;
	eraserButton.y = 340;
	eraserButton2.y = 340;
	
	var rectEraserButton = new createjs.Shape();
	rectEraserButton.graphics.beginFill("#DDD").drawRect(0, 0, 50, 50);
	rectEraserButton.x = 50;
	rectEraserButton.y = 340;
	stage.addChild(rectEraserButton);
	stage.addChild(eraserButton);
	
	var clickEraser = function(e) {	
		if (eraser) {
			return;		
		} else {	
			stage.removeChild(vinousButton);
			stage.removeChild(blueButton);
			stage.removeChild(greenButton);
			stage.removeChild(blackButton);
			vinous = true;	
			blue = true;
			green = true;
			black = true;
			eraser = true;	
			stage.addChild(eraserButton2);
		}
	};	
	rectEraserButton.addEventListener("click", clickEraser);
	
			//кнопка для сохранения
	
	var saveButton = new createjs.Bitmap("save.png");
	saveButton.x = 1030;
	saveButton.y = 530;
		
	var rectSaveButton = new createjs.Shape();
	rectSaveButton.graphics.beginFill("#DDD").drawRect(0, 0, 50, 50);
	rectSaveButton.x = 1030;
	rectSaveButton.y = 530;
	stage.addChild(rectSaveButton);
	stage.addChild(saveButton);
	
	var clickSave = function(e) {		
		var canvas2 = document.createElement("canvas");
		canvas2.width = 600;
		canvas2.height = 600;
		var ctx2 = canvas2.getContext("2d");
		ctx2.translate(DRAW_CENTER_X, DRAW_CENTER_Y);
		
		var id = c.getImageData(0, 0, 600, 600); //TODO 
		ctx2.putImageData(id, 0, 0);
		if (vinous == false)
			ctx2.strokeStyle = "#620019";
		if (blue == false)
			ctx2.strokeStyle = "#252643";
		if (green == false)
			ctx2.strokeStyle = "#004644";
		if (black == false)
			ctx2.strokeStyle = "#000000";
		ctx2.lineWidth = 4;
		

			console.log(guidelineСircle1);
		if (guidelineСircle1 == true) {
			console.log("рисуй!!!!");
			ctx2.beginPath();
			ctx2.arc(0, 0, 50, 0, 2*Math.PI ); 		
			ctx2.stroke();
			ctx2.closePath();
		}	
		if (guidelineСircle2 == true) {
			//console.log("рисуй111!!!!");
			ctx2.beginPath();
			ctx2.arc(0, 0, 65, 0, 2*Math.PI ); 		
			ctx2.stroke();	
			ctx2.closePath();
		}	
		if (guidelineСircle3 == true) {
			ctx2.beginPath();
			ctx2.arc(0, 0, 180, 0, 2*Math.PI ); 		
			ctx2.stroke();	
			ctx2.closePath();
		}	
		if (guidelineСircle4 == true) {
			ctx2.beginPath();
			ctx2.arc(0, 0, 200, 0, 2*Math.PI ); 		
			ctx2.stroke();	
			ctx2.closePath();
		}	
		if (guidelineСircle5 == true) {
			ctx2.beginPath();
			ctx2.arc(0, 0, 270, 0, 2*Math.PI ); 		
			ctx2.stroke();	
			ctx2.closePath();
		}	
		if (guidelineСircle6 == true) {
			ctx2.beginPath();
			ctx2.arc(0, 0, 300, 0, 2*Math.PI ); 		
			ctx2.stroke();	
			ctx2.closePath();
		}
		
		window.open(canvas2.toDataURL());
			
		
	};	
	rectSaveButton.addEventListener("click", clickSave);
	
	
	
	//все, что свзязано с рисованием на canvas
	
	function initMouseInteraction() {
		// получить координаты мышки
		var mouseCoords = {
			// X-координата
			getX: function(e) {
				var rect = canvas.getBoundingClientRect();
				return e.clientX - rect.left - 300;
			   
			},
			// Y-координата
			getY: function(e) {
				var rect = canvas.getBoundingClientRect();
				return e.clientY - rect.top - 300;		
			}
		};
			
		var prevCoordX = null;
		var prevCoordY = null;
		
		function drawPoint(x, y) {
			for (var i = 0; i < 12; i++) {
				c.save();
				c.rotate(Math.PI / 6 * i);
				c.drawImage(currentBrushImg, x - currentBrushImg.width / 2, y - currentBrushImg.width / 2); //TODO direct draw pixels
				//c.putImageData(currentBrush, DRAW_CENTER_X + x, DRAW_CENTER_Y + y); //x - brushImg.width / 2, y - brushImg.width / 2);
				c.restore();
			}
		}
		
		function removePoint(x, y) {
			var a = Math.PI/6;
			var a11 = Math.cos(a);
			var a12 = Math.sin(a);
			var a21 = -Math.sin(a);
			var a22 = Math.cos(a);
			
			for (var i = 0; i < 12; i++) {
				var xx = a11 * x + a12 * y;
				var yy = a21 * x + a22 * y;
				x = xx;
				y = yy;
				
				c.putImageData(ereaserImageData, DRAW_CENTER_X + x, DRAW_CENTER_Y + y);
			}
		}
		
		var mousedownListener = function(e) {	
			if (e.button != 0) //если нажата именно левая кнопка
				return;
			
			prevCoordX = mouseCoords.getX(e);
			prevCoordY = mouseCoords.getY(e);
			if (eraser) {
				removePoint(prevCoordX, prevCoordY);
			} else 	
				drawPoint(prevCoordX, prevCoordY);
		};
				
		var mousemoveListener = function(e) {
			var leftPressed = e.buttons % 2 == 1;
			
			if (!leftPressed)
				return;
				
			//при вождении мышкой, кисть оставляет след
			var nextCoordX = mouseCoords.getX(e);
			var nextCoordY = mouseCoords.getY(e);
			
			if (prevCoordX != null && (Math.abs(prevCoordX - nextCoordX) > 1 || Math.abs(prevCoordY - nextCoordY) > 1) /*&& pressed == 0*/ ) {
				var dx = nextCoordX - prevCoordX;
				var dy = nextCoordY - prevCoordY;
				
				var dist = Math.sqrt(dx * dx + dy * dy);
				var countP = Math.round(dist / 2); //шаг примерно по два пикселя
				var stepX = dx / countP;
				var stepY = dy / countP;
				
				var nowCoordX = prevCoordX;
				var nowCoordY = prevCoordY;
				//console.log('countP', countP);
				for (var j = 1; j <= countP - 1; j++) {																
					nowCoordX += stepX;
					nowCoordY += stepY;	
					if (eraser)
						removePoint(nowCoordX, nowCoordY);
					else 	
						drawPoint(nowCoordX, nowCoordY);
				}
			};	
			if (eraser)
				removePoint(nextCoordX, nextCoordY);
			else 	
				drawPoint(nextCoordX, nextCoordY);
			
			prevCoordX = nextCoordX;
			prevCoordY = nextCoordY;
		}
		canvas.addEventListener("mousedown", mousedownListener, true);
		canvas.addEventListener("mousemove", mousemoveListener, true);
	}
	
	function creatingCircles(circle1, circle2, circle3, circle4, circle5, circle6) {
			// круг №1
		circle1.graphics
			.setStrokeStyle(4)
			.beginStroke("#252643")
			.drawCircle(0, 0, 50);		
		circle1.x = 680;
		circle1.y = 300;
		
		
			// круг №2
		circle2.graphics
			.setStrokeStyle(3.5)
			.beginStroke("#252643")
			.drawCircle(0, 0, 65);		
		circle2.x = 680;
		circle2.y = 300;
		
			// круг №3
		circle3.graphics
			.setStrokeStyle(4)
			.beginStroke("#252643")
			.drawCircle(0, 0, 180);		
		circle3.x = 680;
		circle3.y = 300;
		
		
			// круг №4
		circle4.graphics
			.setStrokeStyle(4)
			.beginStroke("#252643")
			.drawCircle(0, 0, 200);		
		circle4.x = 680;
		circle4.y = 300;
		
			// круг №5
		circle5.graphics
			.setStrokeStyle(4)
			.beginStroke("#252643")
			.drawCircle(0, 0, 270);		
		circle5.x = 680;
		circle5.y = 300;
		
		
			// круг №6
		circle6.graphics
			.setStrokeStyle(4)
			.beginStroke("#252643")
			.drawCircle(0, 0, 300);		
		circle6.x = 680;
		circle6.y = 300;
	
	};
}