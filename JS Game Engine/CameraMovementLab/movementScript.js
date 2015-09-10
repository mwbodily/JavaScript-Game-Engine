window.onload = init;
character = '';
visibleDistance = 50;

function init()
{
	character = document.getElementById("player");
	character.style.left = "180px";
	character.style.top = "550px";

	document.onkeydown = keyListener;
	generateScenery();
}

function Tree(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 25;
	this.topEdge = y;
	this.bottomEdge = y + 25;
}

function generateScenery()
{
	//console.log("Drawing stuff...");
	treesA = [250,535,375,535,705,535];
	var trees = new Array();
	var j = 0;
	gmpl = document.getElementById("playScreen");
	
	var vantageL = parseInt(character.style.left) - (visibleDistance / 2);
	var vantageR = parseInt(character.style.left) + (visibleDistance);
	var elem;
	var elemName;
	for(var i = 0; i < treesA.length; i += 2)
	{
		if(treesA[i] >= vantageL && treesA[i] <= vantageR) 
		{		
			var temp = document.createElement('div');
			temp.style.position = "absolute";
			temp.style.left = treesA[i] + 'px';
			temp.style.top = treesA[i + 1] + 'px';
			temp.style.zIndex = "0";

			temp.innerHTML = "<img src = 'tree.png' id = 'tree" + i + "'/>";
		
			trees[j] = new Tree(treesA[i],treesA[i + 1]);
			j++;

			gmpl.insertBefore(temp, gmpl.fistChild);
		}
		else //if it is not supposed to be on the screen, remove it.
		{
			console.log("In else for tree" + i + " at " + parseInt(character.style.left));
			elemName = "tree" + i;
			elem = document.getElementById(elemName);
			
			if(elem != null)
			//if(elem.parentNode)
			{
		//		console.log("I should be removing tree" + i);
				elem.par2entNode.remove(elem);
			}
		}
	}
	
}

function keyListener(e)
{
	//37 = left 
	//38 = up
	//39 = right
	//40 = down
	//73 = i
	//32 = space bar
	//alert(e.keyCode);

		if(e.keyCode == 39 || e.keyCode == 65)
		{
			move(3);
		}
		else if(e.keyCode == 37 || e.keyCode == 68)
		{
			move(-3);
		}
}

function move(LRDirection)
{
	character.style.left = parseInt(character.style.left) + LRDirection + 'px';
	adjustVantage();
}

function adjustVantage()
{
	console.log("Adjust the vantage point");
	generateScenery();
}