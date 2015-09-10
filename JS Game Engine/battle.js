function Fiend(health, attack)
{
	this.attack = attack;
	this.health = health;
	this.maxHealth = health;
}

function generateFiend()
{
	fiendHealth = Math.round(Math.random() * ((player.maxHealth * 3) - (player.maxHealth / 2)) + (player.maxHealth / 2));
	fiendAttack = Math.round(Math.random() * ((player.maxHealth - 2) - (player.maxHealth / 2)) + (player.maxHealth / 2));
	foe = new Fiend(fiendHealth, fiendAttack);
}

function startBattle()
{
	if(inBattle == false)
	{
		inBattle = true;
		generateFiend();
		var gmpl = document.getElementById("playScreen");
		battleField = document.createElement('div');
		battleField.id = "bField";
		battleField.style.height = "351px";
		battleField.style.left = "300px";
		battleField.style.top = "300px";
		battleField.style.width = "300px";
		battleField.style.background = "white";
		battleField.style.position = "absolute";
		battleField.style.border = "3px solid black";
	
		htmlcode = generateBattleScene();
	
		battleField.innerHTML = htmlcode;
		gmpl.insertBefore(battleField, gmpl.garbage);
	}
}

function generateTopBattle()
{
	var foeSection = "<div style = 'height:100px;background-color:00BBFF;'>" + "<span id = 'fHealth'>" + 
					"HP: " + foe.health + "</span>" + 
					"<div style = 'height:10px; width:10px; border-radius:100%;background-color:red;" +
					"position:relative; top:73px; margin:0 auto;'>" + 
					"</div></div>"; 
	
	var playerSection = "<div style = 'height:150px;background-color:4f9f2d;'>" + 
						"<img style = 'position:relative; left:130;top:45px;'" + 
						"src = 'battleMan.png'><div style = 'position:absolute;top:210px;left:240px;'" + 
						" id = 'pHealth'><span>HP: " + player.currentHealth + 
						"/" + player.maxHealth + "</span></div></div>"; 
						
	return foeSection + playerSection;
}

function updateHealth()
{
	if(inBattle == true)
	{
		document.getElementById("fHealth").innerHTML = "HP: " + foe.health;
		document.getElementById("pHealth").innerHTML = "HP: " + player.currentHealth + "/" + 
														player.maxHealth;
	}
}

//TODO, make the size of the fiend relative to it's power.
//TODO animation for fiend and player attacks.
function generateBattleScene()
{
	var theHTML = "";
	var top = generateTopBattle();
						
	var textField = "<div style='border:2px solid black;height:75px;top:100px;overflow:scroll;" + 
						"background:white;'><p id ='textData'></p>";
						
	var buttons = "<div style = 'height:50px; position:fixed;top:630px;'>" + 
					"<button onclick = 'playerAttack()' type = 'button'>Attack!</button>" + 
				  "<button onclick = 'playerRun();' style= 'position:fixed;' type = 'button'>" + 
				  "Run!</button></div></div>";
	
	theHTML = top + textField + buttons;
	return theHTML;
}

function playerAttack()
{
	var textField = document.getElementById("textData");
	var pAttack = player.attack + ((player.level/2) * (.1 * armorVals[player.weapon]));
	textField.innerHTML += "The player attacks for " + pAttack + " damage<br/>";
	foe.health = foe.health - pAttack;

	if(foe.health <= 0)
	{
		exitBattleSequence('won');
		return;
	}
	
	var pArmor = armorVals[player.head] + armorVals[player.torso] + armorVals[player.legs] + 
				armorVals[player.feet];
	fAttack = foe.attack - ((player.level/2) * (.1 * pArmor));
	if(fAttack < 0)
	{
		fAttack = 0;
	}
	player.currentHealth -= fAttack;
	textField.innerHTML += "You are attacked for " + fAttack + " damage<br/>";
	
	if(player.currentHealth <= 0)
	{
		exitBattleSequence('lost');
	}
	
	updateHealth();
}

function playerRun()
{
	exitBattleSequence('ran');
}

function generateGold()
{
	var gold = (foe.attack * foe.maxHealth) * 1.5;
	return gold;
}

function exitBattleSequence(reason)
{
	if(reason == 'won')
	{
		var goldWon = generateGold();
		alert("Congrats, your level has increased! You also received " + goldWon + " gold!");
		player.money += goldWon;
		levelUp();
		inBattle = false;
	}
	else if(reason == 'lost')
	{
		alert("You are dead. The funeral was nice, though.");
		init();
		inBattle = false;
	}
	else
	{
		alert("you got away");
		inBattle = false;
	}
	var gmpl = document.getElementById("playScreen");
	gmpl.removeChild(bField);
}