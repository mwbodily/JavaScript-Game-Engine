/*
This set of functions contains the locations and the dialog for each sprite in the game. The 
Generate NPC function initializes all the NPCs and places them in their proper locations.
*/
function guard1(x)
{
	this.dialog = "It gets boring guarding the town all day, but if we don't monsters attack.";
	this.locationX = 135;
	this.locationY = 35;
}

function guard2(x)
{
	this.dialog = "You've always been pretty good at fighting. You should join the city guards.";
	this.locationX = 450;
	this.locationY = 140;
}

function guard2(x)
{
	this.dialog = "You're going out, again? Alright, but don't get yourself killed.";
	this.locationX = 450;
	this.locationY = 140;
}

function apprentice(x)
{
	this.dialog = "*Yawn*, I hope the blacksmith doesn't find me here. If you see him, " + 
				"don't tell him where I am, okay?";
	this.locationX = 265;
	this.locationY = 185;
}

function shopkeeper(x)
{
	this.dialog = "Welcome to the shop. Would you like to buy something?";
	this.locationX = 265;
	this.locationY = 185;
}

/*
TODO: clean this up and put all three constructions in a loop using the data contained in the classes
to differentiate.
*/
function generateNPCs()
{
	var x = '';
	gmpl = document.getElementById("playScreen");
	g1 = new guard1(x);
	var guardv1 = document.createElement('div');
	guardv1.style.position = "absolute";
	guardv1.style.left = g1.locationX + "px";
	guardv1.style.top = g1.locationY + "px";
	guardv1.innerHTML = "<div style = 'border-radius:100%; border: 1px solid black; background-color:green;" + 
						"height:8px; width:8px'></div>";
	gmpl.insertBefore(guardv1, gmpl.firstChild);	
	
	g2 = new guard2(x);
	var guardv2 = document.createElement('div');
	guardv2.style.position = "absolute";
	guardv2.style.left = g2.locationX + "px";
	guardv2.style.top = g2.locationY + "px";
	guardv2.innerHTML = "<div style = 'border-radius:100%; border: 1px solid black; background-color:green;" + 
						"height:8px; width:8px'></div>";					
	gmpl.insertBefore(guardv2, gmpl.firstChild);
	
	a1 = new apprentice(x);
	var apprenticev = document.createElement('div');
	apprenticev.style.position = "absolute";
	apprenticev.style.left = a1.locationX + "px";
	apprenticev.style.top = a1.locationY + "px";
	apprenticev.innerHTML = "<div style = 'border-radius:100%; border: 1px solid black;" + 
						"background-color:yellow; height:8px; width:8px'></div>";					
	gmpl.insertBefore(apprenticev, gmpl.firstChild);
}

