window.onload = init;
character = '';
townBuildingsLocations = '';
townVFenceLocations = '';
townHFenceLocations = '';
treeLocations = '';
houses = '';
trees = '';
mountains = '';
shore = '';
water = '';

player = '';
foe = '';
battleField = '';
intown = '';
inventoryUp = '';
inBattle = '';

blkSmith = '';
mayor = '';
shop = '';

armorArray = '';
g1 = '';
inBuilding = '';
/*
TODO:
	add a menu (not just buttons) to the battle pane
	make two battle panes, for forest and plains
	add battle animations for battle sequences
	make the fiend grow according to it's power
	add people to talk to (villagers)
	add quests (received from villages/mayor)
	add an overarching story line
	add attack types (user hits attack, asks element (fire, water, etc.)
	add science to attacks (water then lightning = 2x damage, etc.)
	add a character sprite(?)
	add items the user can carry around
	add clouds drifting across the sky (just a possibility)
	add night and day elements with more powerful enemies at night
	add paths
	optimize the code
	make it so that going inside a building changes your screen to the inside of the building.
	add party members
	add in ranged weapons, somehow.
	make the inventory look nicer.
	make experience points a thing. add experience points (don't just level up every battle)
	make the weapons and armor less powerful
	make hit boxes for the fences and mountains
	allow healing during battle.
	have what the shop keeper says change depending on the price of the healing items (normal)
		"You know, we should be able to get supplies for cheaper than this. Half of this stuff is just harvested in the woods to 
		the south. But Lord Lsuma taxes everything so heavily that I can barely afford to keep this shop open."
		"The tax collector hasn't been here today- yet- to take a share of my stock - so I'll sell it to you cheap, I'd rather you used 
		it than he did." (super cheap)
		"Taxes have been increased today, again. So for now, it looks like this is as low as I can go." (expensive)
		"..." (crazy expensive)
	make it so running away doesn't always work.
	add more player and fiend stats.
	make it so that the probability of success is displayed on each menu item 
		healing: 100%
		running: 85% * (playerSpeed/fiendSpeed).
		attack: 90% * (playerSpeed / fiendSpeed).
		items: 100% (all the time).
	add the smokebomb item
	add a witch's cabin in the woods.
	change the player's POV.
*/

/*
Initialization function, gets everything started and is called on page load.
*/
function init()
{
	alert("Welcome! You are the little guy in the upper left corner! Everyone else is circles, for now.");
	alert("To move, use the arrow keys, to talk to NPC's press space bar. To see your stats and inventory, hit 'i'");
	alert("Your attack is the damage you do, and this and your HP are randomly generated each run. You level up each fight!");
	intown = false;
	inBuilding = false;
	houses = new Array();
	trees = new Array();
	character = document.getElementById("character");
	generatePlayer();
	character.style.left = "140px";
	character.style.top = "15px";
	
	inventoryUp = false;
	inBattle = false;
	
	townBuildingsLocations = [180, 30, 230, 30, 280, 30, 330, 30, 380, 30, 30, 30, 80,30,430, 30,
							  30, 80, 80,80,180, 80, 230, 80, 380, 80,430,80,
							  30, 130,80,130, 
							  30, 180, 80,180,
							  30,230,430, 230,
							  30,280,430, 280,
							  30,330,80,330,130,330,180,330,330,330,380,330,430,330];
	
	treeLocations = [220,180,240,180,
					 200,200,260,200,
					 220,220,240,220,
					 540,580,560,580,580,580,680,580,700,580,720,580,740,580,780,580,800,580,820,580,
					 520,600,540,600,560,600,580,600,600,600,660,600,680,600,700,600,720,600,740,600,760,600,780,600,800,600,
					 500,620,520,620,560,620,580,620,700,620,720,620,780,620,800,620,820,620,
					 500,640,520,640,720,640,780,640,800,640,820,640,840,640,
					 500,660,520,660,540,660,760,660,780,660,800,660,820,660,
					 480,680,500,680,520,680,580,680,760,680,780,680,800,680,
					 480,700,500,700,520,700,580,700,760,700,780,700,800,700,820,700,
					 460,720,480,720,500,720,520,720,600,720,620,720,740,720,780,720,800,720,
					 440,740,460,740,480,740,500,740,520,740,540,740,560,740,580,740,600,740,620,740,640,740,660,740,680,740,700,740,720,740,740,740,760,740,780,740,
					 480,760,500,760,540,760,560,760,580,760,640,760,660,760,700,760,720,760,740,760,760,760,780,760,800,760,820,760,840,760];
	
	townVFenceLocations = [470, 125, 470, 200];
	
	mountains = [760, 100, 700, 100, 700, 50, 700, 0, 640, 50, 640, 0, 580, 0, 760, 150, 820,200,
				880,250, 880, 300, 880, 350, 880, 350, 820, 350, 880, 400, 820, 0, 880, 0, 760, 0, 
				760,50,820,50,880,50,820,100,880,100,820,150,880,150,880,200];
	
	shore = [920, 600, 910, 650, 900, 700, 890,750, 880,800,870,850, 860,894];
	water = [920,850, 910,800,920,750, 910,894];
	
	items = ["Dagger", "Handaxe", "Sword", "Great Axe", "Great Sword", 
			"Cloth Helm", "Leather Helm", "Mail Helm", "Plate Helm", 
			"Cloth Breastplate", "Leather Breastplate", "Mail Breastplate", "Plate Breastplate",
			"Cloth Pants", "Leather Leggings", "Mail Leggings", "Plate Leggings", 
			"Cloth Boots", "Leather Boots", "Mail Boots", "Plate Boots", 
			"---"];
	armorVals = [2.0,3.0,4.5,6.0,7.5,
					1.5,2.5,3.5,5.0,
					1.5,3.5,6.0,9.0,
					1.0,3.0,5.5,7.5,
					1.5,2.5,3.5,5.0,
					0.0];
	armorPrice = [50,150,250,400,550,
					10,75,200,350,
					30,150,800,1200,
					20,110,400,800,
					15,90,300,500];
	
	generateEverything();
	generateNPCs();
	document.onkeydown = keyListener;
}

/*
Calls the functions that generate the scenery, town, and fence sprites.
*/
function generateEverything()
{
	generateTown();
	generateForest();
	generateFences();
}

/*
Allows the player character to use a healing item and recover HP. If no
such item exists, informs the player.
*/
function heal()
{
	if(player.healingItems > 0)
	{
		player.healingItems -= 1;
		player.currentHealth = player.maxHealth;
		exitInventory();
		generateInventory();
	}
	else
	{
		alert("You have no healing items!");
	}
}

function generatePlayer()
{
	playerInitHealth = Math.round(Math.random() * (10 - 5) + 5);
	playerInitAttack = Math.round(Math.random() * (12 - 6) + 6);
	player = new Character(playerInitHealth, playerInitAttack);
}

/*
Basic Character Construction.
*/
function Character(health, attack)
{
	this.maxHealth = health;
	this.currentHealth = health;
	this.attack = attack;
	this.head = 21;
	this.torso = 21;
	this.legs = 21;
	this.feet = 21;
	this.weapon = 21;
	this.level = 0;
	this.money = 0;
	this.healingItems = 1;
}

/*
Modify Health after a battle
*/
function modifyHealth(modification)
{
	player.currentHealth += modification;
	if(player.currentHealth == 0)
		alert("You dead!");
}

/*
Increase stats upon levelling up.
*/
function levelUp()
{
	healthInc = Math.round(Math.random() * (3 - 1) + 1);
	attackInc = Math.round(Math.random() * (4 - 1) + 1);
	player.attack += attackInc;
	player.maxHealth += healthInc;
	player.currentHealth += healthInc;
	player.level += 1;
}

/*
Display the stats for the character. 
*/
function displayCharacterStats()
{
	return "Maximum Health: " + player.maxHealth + "\n" + 
			"Current Health: " + player.currentHealth + "\n" + 
			"Attack: " + player.attack;
}

/*
Allows the player character to talk to NPC. Still uses alerts. This will be fixed eventually.
*/
function talk()
{
	console.log(g1.locationY - 10);
	if(parseInt(character.style.top) > (g1.locationY - 10) && 
		parseInt(character.style.top) < (g1.locationY + 15) &&
		parseInt(character.style.left) > g1.locationX - 10 && 
		parseInt(character.style.left) < g1.locationX + 15)
	{
		alert(g1.dialog);
	}
	
	if(parseInt(character.style.top) > (g2.locationY - 10) && 
		parseInt(character.style.top) < (g2.locationY + 15) &&
		parseInt(character.style.left) > g2.locationX - 10 && 
		parseInt(character.style.left) < g2.locationX + 15)
	{
		alert(g2.dialog);
	}
	
	if(parseInt(character.style.top) > (a1.locationY - 10) && 
		parseInt(character.style.top) < (a1.locationY + 15) &&
		parseInt(character.style.left) > a1.locationX - 10 && 
		parseInt(character.style.left) < a1.locationX + 15)
	{
		alert(a1.dialog);
	}
}