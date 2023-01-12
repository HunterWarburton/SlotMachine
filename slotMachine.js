 
	  //List of all possible symbols, based on single letters, is file name of images
      const slotSymbols = ['A', 'D', 'G', 'T', 'H', 'K', 'L', 'M', '2', 'Y', 'U', 'R', 'O'];

		//CODE TO GENERATE THE SPECIFIC SYMBOL everytime a reel is made
      const getRandomSymbol = () => {
	  //let theSymbol = 'O';
	  /* OLD GENERATION, full random
	  theSymbol = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
	  */
	  //Generate a num between 1 and 100
	  const Shmango =	15; //'O', 	15%
	  const Bar =		10; //'R',  10%
	  const Matcha =	8; //'M',  	8%
	  const Ati =		10; //'A', 	10%
	  const Draken =	7; //'D', 	7%
	  const Gert =		7; //'G', 	7%
	  const Hanako =	6; //'H', 	6%
	  const Kyosha =	6; //'K', 	6% 69
	  const Lyra =		7; //'L', 	7%
	  const MatchaTwo =	6; //'2',	6%
	  const Monty =		7; //'Y', 	7%
	  const Urg =		7; //'U', 	7%
	  const Taka =		4; //'T',	4%
	  
	  const num = Math.floor(Math.random() * 100) + 1;
		switch (true) {
		case num <= Shmango:
			return 'O';
		break;
		case num <= Shmango+Bar:
			return 'R';
		break;
		case num <= Shmango+Bar+Matcha:
			return 'M';
		break;
		case num <= Shmango+Bar+Matcha+Ati:
			return 'A';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken:
			return 'D';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert:
			return 'G';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert+Hanako:
			return 'H';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert+Hanako+Kyosha:
			return 'K';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert+Hanako+Kyosha+Lyra:
			return 'L';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert+Hanako+Kyosha+Lyra+MatchaTwo:
			return '2';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert+Hanako+Kyosha+Lyra+MatchaTwo+Monty:
			return 'Y';
		break;
		case num <= Shmango+Bar+Matcha+Ati+Draken+Gert+Hanako+Kyosha+Lyra+MatchaTwo+Monty+Urg:
			return 'U';
		break;
		default:
			return 'T';
		}
	  
	  //returns a single letter
        //return theSymbol;
      }

	let symbols = [];
	let symbolsList = [];
	let symbolsTopBottom = [];//holder for top and bottom row symbols
	const slotHolder = document.querySelector('.slotHolder');

	window.addEventListener("resize", resizeit);
	
	
	function resizeit(){     // the element
		//If Width is smaller (cellphone) then use the full 100% width and base height on that
		console.log("window.innerWidth " + window.innerWidth);
		console.log("window.innerHeight " + window.innerHeight);
		var wWidth = Math.floor(window.innerWidth);
		var wHeight = Math.floor(window.innerHeight);
		console.log("wWidth " + wWidth);
		console.log("wHeight " + wHeight);
		//IF the width is smaller (cellphone)
		//Then full width is controlling size
		if (wWidth <= wHeight*1.2) {
			console.log("tiny width");
			slotHolder.style.width = wWidth *0.975 + 'px';
			slotHolder.style.height = wWidth * 5/6 *0.8 *0.975 + 'px';
		} else {
		console.log("its widescreen");
			//If Height is smaller (pc screen) then use full 90% height and base width on that
			slotHolder.style.height = wHeight * 0.8 + 'px';
			slotHolder.style.width = wHeight * 6/5 + 'px';
		}
    };

	resizeit();

		//make the symbols that make up a column
      const createColumn = (time) => {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let i = 0; i < 30+(time*2); i++) {
          const symbol = document.createElement('div');
		  symbolsList.push(symbol);
          symbol.id = getRandomSymbol();
          symbol.classList.add('symbol');
		  
		  //Slap an image on that symbol
		  const img = document.createElement('img');
			img.src = `images/${symbol.id}.png`;
			img.classList.add('slot-img');
			symbol.appendChild(img);
		  
		  //console.log(time);
		  //Make the animation of each column's symbol progressively slower
		  symbol.style.transition = `transform ${time}s cubic-bezier(.76,1.24,.95,1.04)`;
          symbol.style.transform = `translateY(-${time*400+1800}%)`; 
		  
		  column.appendChild(symbol);
        }
        return column;
      }

		//Create the part with reels
      const createSlotMachine = () => {
        const slotMachine = document.createElement('div');
        slotMachine.classList.add('slot-machine');
		//Add reels/Columns to the machine
        for (let i = 0; i < 5; i++) {
          slotMachine.appendChild(createColumn(i/2+1));
        }
		
        return slotMachine;
      }
	  
	  const createWinLineRectangle = (num) => {
		const winLineRect = document.createElement('div');
        winLineRect.classList.add('winLineRect');
		winLineRect.innerHTML = num;
			switch (num) {
				case 1:
					winLineRect.style.backgroundColor = "#00ff00";
				break;
				case 2:
					winLineRect.style.backgroundColor = "#ff00ff";
				break;
				case 3:
					winLineRect.style.backgroundColor = "#ff0000";
				break;
				case 4:
					winLineRect.style.backgroundColor = "#0000ff";
				break;
				case 5:
					winLineRect.style.backgroundColor = "#ffffff";
				break;
				case 6:
					winLineRect.style.backgroundColor = "#00ffff";
				break;
				case 7:
					winLineRect.style.backgroundColor = "#ffff00";
				break;
				case 8:
					winLineRect.style.backgroundColor = "#ffffff";
				break;
				case 9:
					winLineRect.style.backgroundColor = "#ffff00";
				break;
				case 10:
					winLineRect.style.backgroundColor = "#00ffff";
				break;
				case 11:
					winLineRect.style.backgroundColor = "#ffffff";
				break;
				case 12:
					winLineRect.style.backgroundColor = "#0000ff";
				break;
				case 13:
					winLineRect.style.backgroundColor = "#ff0000";
				break;
				case 14:
					winLineRect.style.backgroundColor = "#ff00ff";
				break;
				case 15:
					winLineRect.style.backgroundColor = "#00ff00";
				break;
			}
		return winLineRect;
	  }
	  
	  //This is the bars on either side of the reels
	  //this indicator holds several colored rectangles that number the win-lines
	  const createWinLineIndicator = () => {
		  const winLineIndicator = document.createElement('div');
        winLineIndicator.classList.add('winLineIndicator');
		winLineIndicator.style.zIndex = 50;
		//Make individual rectangles with numbers and put them in the indicator
		for (let i = 1; i <= 15; i++) {
			winLineIndicator.appendChild(createWinLineRectangle(i));	
		}
		return winLineIndicator;
	  }
	  
	  

		//Actually build the slot machine
		//first make a winline inidicator
		slotHolder.appendChild(createWinLineIndicator());
		//then make the slotmachine
		slotHolder.appendChild(createSlotMachine());
		//then make a duplicate winline indicator
		slotHolder.appendChild(createWinLineIndicator());
		//Add the win-Lines on top/Add the Win-Line png images
		let winLines = [];
		for (let i = 1; i <= 15; i++) {
			const winLine = document.createElement('img');
			winLine.src = `images/WinLines-${i}.png`;
			//console.log(`images/WinLines-`+i+`.png`);
			winLine.classList.add('winLine');
			slotHolder.appendChild(winLine);
			winLine.style.zIndex = 20+i;
			winLines.push(winLine);
		}
		
		
	//GAMESTATE
	//start the game with a fresh player in pre-play state
    let gameState = 'pre-play';
	
	function gameLoop () {
		switch (gameState) {
			case 'pre-play':
				for (let i = 1; i <= 15; i++) {
					winLines[i-1].style.visibility = 'hidden';
				}
			//In this state the winLines should all become visible over time, then all turn off
				//give each winLine an increasing duration of turning visible
				for (let i = 1; i <= 15; i++) {
					
					setTimeout(() => {
						winLines[i-1].style.visibility = 'visible';
					}, 1000*i);//After 1 second * winLine number, turn visible
				}
				//Now make them all turn invisible again and start the timer over again
				setTimeout(() => {
					for (let i = 1; i <= 15; i++) {
						winLines[i-1].style.visibility = 'hidden';
					}
					gameLoop();
				}, 17000);
				
			break;
			case 'active':
			
			break;
			case 'post-spin':
		
			break;
		}
	}
	gameLoop();//run initial gameLoop
	//setInterval(gameLoop, 1000/60);//1 second / 60 refreshes
	  
	  
	  
	  
      const playButton = document.getElementById('play-button');
	  playButton.classList.add('play-button');
	  playButton.style.zIndex = 99;
	  
	  
	  //CLICK THE BUTTON
	playButton.addEventListener('click', () => {
		symbolsList.length = [];
		const slotMachine = document.querySelector('.slot-machine');
		slotMachine.innerHTML = '';
		for (let i = 0; i < 5; i++) {
			slotMachine.appendChild(createColumn(i/2+1));
		}
  
		//Animate symbols moving
		setTimeout(() => {
			symbols = document.querySelectorAll('.symbol');
			symbols.forEach(symbol => symbol.style.transform = 'none');
		}, 001);//instantly start the movement of the symbols

		//Disable re-clicking
		playButton.disabled = true;
		setTimeout(() => {
			playButton.disabled = false;
		}, 3000);//3 seconds

		
		topandBottomRowColor();//Color some symbols
		checkSecondRow();
		doTheConfetti();
});
//END BUTTON

	
	function topandBottomRowColor() {
		const columns = document.querySelectorAll('.column');
		columns.forEach(column => {
			const firstChild = column.children[1];
			const thirdChild = column.children[3];
			symbolsTopBottom.push(firstChild);
			symbolsTopBottom.push(thirdChild);
		});
		//Wait 3 seconds then change color of top and bottom rows
		setTimeout(() => {
			symbolsTopBottom.forEach(symbol => {
				symbol.style.filter = 'hue-rotate(180deg)';
			});
		}, 3000);
		
	}
	
	
	const checkSecondRow = () => {
  const secondSymbols = document.querySelectorAll('.column > .symbol:nth-child(3)');
  const counts = {};
  for (const symbol of secondSymbols) {
    if (counts[symbol.innerHTML]) {
      counts[symbol.innerHTML]++;
    } else {
      counts[symbol.innerHTML] = 1;
    }
  }
  const symbolCount = document.querySelector('.symbol-count');
  let text = 'Second Row -';
  for (const [symbol, count] of Object.entries(counts)) {
    text += ` ${symbol}: ${count}`;
  }
  symbolCount.innerHTML = text;
}

	
	function doTheConfetti() {
	
		//Establish Confetti Zone
		const canvas = document.createElement('canvas');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.position = 'fixed';
		canvas.style.top = 0;
		canvas.style.left = 0;
		canvas.style.zIndex = 100;
		document.body.appendChild(canvas);
		const ctx = canvas.getContext('2d');
		const particles = [];
		//const particleCount = 200;
		const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
		
		/*for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: Math.random() * 10 - 5,
				vy: Math.random() * 10 - 5,
				radius: Math.random() * 5 + 2,
				color: colors[Math.floor(Math.random() * colors.length)],
			});
		}*/
		var particleCount = 0;
		function addParticle() {
		if (particleCount < 50) {
			particles.push({
				x: playButton.offsetLeft,
				y: Math.random() * canvas.height,
				vx: Math.random() * 20 - 10,
				vy: Math.random() * 20 - 10,
				radius: Math.random() * 5 + 2,
				color: colors[Math.floor(Math.random() * colors.length)],
				start: Date.now(),
			});
			particleCount++;
			if (particleCount < 25) {addParticle();}
		}
		}

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const currentTime = Date.now();
			particles.forEach((particle, index) => {
				particle.x += particle.vx;
				particle.y += particle.vy;
				if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
				if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
				ctx.fillStyle = particle.color;
				ctx.fill();
				//PARTICLE LIFESPAN
				if (currentTime - particle.start > 2000) {
					particles.splice(index, 1);
				}
			});
			requestAnimationFrame(draw);
		}
		addParticle();
		draw();
		setInterval(addParticle, 1);
		setTimeout(() => {
			document.body.removeChild(canvas);
		}, 3000);
	}//END  CONFETTI
