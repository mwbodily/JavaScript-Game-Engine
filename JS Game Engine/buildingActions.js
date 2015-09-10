healPrice = '';
statUp = false;
inBuildingSmithy = '';
inBuildingShop = '';
inBuildingManor = '';
/************************************************************************************************************************
*
*					THE SHOP
*
**************************************************************************************************************************/

function enterShop()
{
	inBuilding = true;
	inBuildingShop = true;
	willBuy = false;
	shopScene = document.createElement('div');
	shopScene.id = "shopWindow";
	shopScene.style.height = "600px";
	shopScene.style.left = "25px";
	shopScene.style.top = "150px";
	shopScene.style.width = "900px";
	shopScene.style.backgroundImage = "url(houseInterior1.png)";
	shopScene.style.position = "absolute";
	shopScene.style.border = "3px solid black";
	shopScene.innerHTML = "<img src = 'counter.png' style='position:relative; top:25px;right:-10px;'>" + 
					"<img src = 'pottedPlant.png' style = 'position:relative; top:445px; left:325px;'>" +
					"<img src = 'table.png' style = 'position:relative; top:25px; left:300px;'>" + 
					"<div id = 'shopCharacter' style='border-radius:100%; height:40px; width:40px; background-color:black;position:absolute;" +
					"top:520px;left:440px;'>" + "</div><div id = 'shopKeeper' style='height:45px; width:45px; border-radius:100%;" + 
					"background-color:blue;position:absolute;top:50px; left:75px;'></div>";

	gmpl.insertBefore(shopScene, gmpl.garbage);
	
}

function startShopping()
{
	var willBuy = confirm("Welcome to the shop. Would you like to buy something?");
	if(willBuy == true)
	{
		willBuy = false;
		shopWin = document.createElement('div');
		shopWin.id = "shopWindow";
		shopWin.style.height = "300px";
		shopWin.style.left = "400px";
		shopWin.style.top = "150px";
		shopWin.style.width = "300px";
		shopWin.style.background = "#EEEEEE";
		shopWin.style.position = "absolute";
		shopWin.style.border = "3px solid black";
		shopWin.innerHTML = "<h3>Here's what we have today:</h3><p>Healing Balm: " + healPrice + " gold " +  
							"<button type='button' onclick = buyHeal()>Buy (x1)</button></p>" + 
							"<button type = 'button' onclick = stopShopping()>Exit</button>";
	
		gmpl.insertBefore(shopWin, gmpl.garbage);
	}
}

function stopShopping()
{
	gmpl.removeChild(shopWin);
}

function exitShop()
{
	inBuilding = false;
	var gmpl = document.getElementById("playScreen");
	gmpl.removeChild(shopScene);
	gmpl.removeChild(shopWindow);
	gmpl.removeChild(shopWin);
	
	character.style.top = 345 + 'px';
}

function buyHeal()
{
	if(player.money >= healPrice)
	{
		player.healingItems += 1;
		player.money -= healPrice;
	}
	else
	{
		alert("You can't afford that.");
	}
}

/************************************************************************************************************************
*
*					THE SMITHY
*
**************************************************************************************************************************/

function enterSmithy()
{
	inBuildingSmithy = true;
	inBuilding = true;
	willBuy = false;
	shopScene = document.createElement('div');
	shopScene.id = "shopWindow";
	shopScene.style.height = "600px";
	shopScene.style.left = "25px";
	shopScene.style.top = "150px";
	shopScene.style.width = "900px";
	shopScene.style.backgroundImage = "url(blackSmithInterior1.png)";
	shopScene.style.position = "absolute";
	shopScene.style.border = "3px solid black";
	shopScene.innerHTML = "<img src = 'anvil.png' style='position:relative; top:120px;left:480px;'>" + 
					"<img src = 'forge.png' style = 'position:relative; top:25px; left:425px;'>" + 
					"<img src = 'bucket.png' style = 'position:relative; top:140px; left:-460px;'>" + 
					"<img src = 'shopTable.png' style = 'position:relative; top:25px; left:-550px;'>" + 
					"<div id = 'shopCharacter' style='border-radius:100%; height:40px; width:40px; background-color:black;position:absolute;" +
					"top:520px;left:440px;'>" + "</div><div id = 'BlackSmithChar' style='height:80px; width:80px; border-radius:100%;" + 
					"background-color:red;position:absolute;top:150px; left:530px;'></div>";

	gmpl.insertBefore(shopScene, gmpl.garbage);
}

function startShoppingSmithy()
{
	var willBuy = confirm("Welcome to the smithy, would you like to look at my weapons and armor?");
	if(willBuy == true)
	{
		willBuy = false;
		var gmpl = document.getElementById("playScreen");
		smithWin = document.createElement('div');
		smithWin.id = "smithWindow";
		smithWin.style.height = "300px";
		smithWin.style.left = "300px";
		smithWin.style.top = "150px";
		smithWin.style.width = "350px";
		smithWin.style.background = "#EEEEEE";
		smithWin.style.position = "absolute";
		smithWin.style.border = "3px solid black";
		smithWin.innerHTML = "<h3>Here's what we have today:</h3><p>" + items[blkSmith.item1] + 
							" &nbsp Price: " + armorPrice[blkSmith.item1] + 
							" <button onclick = showStats(" + blkSmith.item1 + ")>Stats</button>" + 
							"<button onclick = buyItem(" + blkSmith.item1 + ")>Buy</button>" + 
							"</p><p>" + items[blkSmith.item2] + " &nbsp Price: " + 
							armorPrice[blkSmith.item2] + 
							" <button onclick = showStats(" + blkSmith.item2 + ")>Stats</button>" +
							"<button onclick = buyItem(" + blkSmith.item2 + ")>Buy</button>" +
							"</p><p>" + items[blkSmith.item3] + " &nbsp Price: " + 
							armorPrice[blkSmith.item3] + 
							" <button onclick = showStats(" + blkSmith.item3 + ")>Stats</button>" +
							"<button onclick = buyItem(" + blkSmith.item3 + ")>Buy</button>" +
							"</p>" + 
							"<button type = 'button' onclick = stopShoppingSmith()>Exit</button>";
	
		gmpl.insertBefore(smithWin, gmpl.garbage);
	}
}

function stopShoppingSmith()
{
	var gmpl = document.getElementById("playScreen");
	if(statUp == true)
	{
		closeStats();
	}
	gmpl.removeChild(smithWin);
	
}

function showStats(itemNum)
{
		if(statUp == true)
		{
			closeStats();
		}
		
		var gmpl = document.getElementById("playScreen");
		itemStats = document.createElement('div');
		itemStats.id = "itemStat";
		itemStats.style.height = "150px";
		itemStats.style.left = "650px";
		itemStats.style.top = "75px";
		itemStats.style.width = "150px";
		itemStats.style.background = "#EEEEEE";
		itemStats.style.position = "absolute";
		itemStats.style.border = "3px solid black";
		if (itemNum >= 0 && itemNum < 5)
		{
			itemStats.innerHTML = "<h3>" + items[itemNum] + "</h3><p>Attack: " + armorVals[itemNum] + 
									"<br />" + "current Attack: " + armorVals[player.weapon] + "</p>" + 
									"<button onclick = closeStats()>Close</button>";
		}
		else if (5 <= itemNum && itemNum < 9)
		{
			itemStats.innerHTML = "<h3>" + items[itemNum] + "</h3><p>Armor: " + armorVals[itemNum] + 
									"<br />" + "current Armor: " + armorVals[player.head] + "</p>" +
									"<button onclick = closeStats()>Close</button>";
		}
		else if (9 <= itemNum && itemNum < 13)
		{
			itemStats.innerHTML = "<h3>" + items[itemNum] + "</h3><p>Armor: " + armorVals[itemNum] + 
									"<br />" + "current Armor: " + armorVals[player.torso] + "</p>" +
									"<button onclick = closeStats()>Close</button>";
		}
		else if(13 <= itemNum && itemNum < 17)
		{
			itemStats.innerHTML = "<h3>" + items[itemNum] + "</h3><p>Armor: " + armorVals[itemNum] + 
									"<br />" + "current Armor: " + armorVals[player.legs] + "</p>" + 
									"<button onclick = closeStats()>Close</button>";
		}
		else if(17 <= itemNum && itemNum < 20)
		{
			itemStats.innerHTML = "<h3>" + items[itemNum] + "</h3><p>Armor: " + armorVals[itemNum] + 
									"<br />" + "current Armor: " + armorVals[player.feet] + "</p>" +
									"<button onclick = closeStats()>Close</button>";
									
		}
		else
		{
			itemStats.innerHTML = "<h3>" + items[itemNum] + "</h3><p>Armor: " + armorVals[itemNum] + 
								"<br />" + "current Armor: 0</p>" + 
								"<button onclick = closeStats()>Close</button>";
		}
		gmpl.insertBefore(itemStats, gmpl.garbage);
		statUp = true;
}

function closeStats()
{
		var gmpl = document.getElementById("playScreen");
		gmpl.removeChild(itemStats);
		statUp = false;
}

function buyItem(itemNum)
{
	if (player.money >= armorPrice[itemNum])
	{
		if (0 <= itemNum  && itemNum < 5)
		{
			//it's a sword.
			player.weapon = itemNum;
			player.money -= armorPrice[itemNum];
		}
		else if (5 <= itemNum && itemNum < 9)
		{
			//it's a hat
			player.head = itemNum;
			player.money -= armorPrice[itemNum];
		}
		else if (9 <= itemNum && itemNum < 13)
		{
			//it's a breast plate
			player.torso = itemNum;
			player.money -= armorPrice[itemNum];
		}
		else if(13 <= itemNum && itemNum < 17)
		{
			//it's leggings
			player.legs = itemNum;
			player.money -= armorPrice[itemNum];
		}
		else
		{
			//it's boots.
			player.feet = itemNum;
			player.money -= armorPrice[itemNum];
		}
	}
	else
	{
		alert("You can't afford this item.");
	}
	
	if(statUp == true)
	{
		closeStats();
	}
}	

function exitSmithy()
{
	inBuilding = false;
	var gmpl = document.getElementById("playScreen");
	gmpl.removeChild(shopScene);
	if (statUp == true)
	{
		closeStats();
	}
	character.style.top = 320 + 'px';
}

/************************************************************************************************************************
*
*					MAYOR
*
**************************************************************************************************************************/

function enterManor()
{
	inBuilding = true;
	inBuildingManor = true;
	manorScene = document.createElement('div');
	manorScene.id = "manorWindow";
	manorScene.style.height = "600px";
	manorScene.style.left = "25px";
	manorScene.style.top = "150px";
	manorScene.style.width = "900px";
	manorScene.style.backgroundImage = "url(mayorsInterior1.png)";
	manorScene.style.position = "absolute";
	manorScene.style.border = "3px solid black";
	manorScene.innerHTML = "<img src = 'table2.png' style='position:relative; top:25px;left:50px;'>" + 
					"<img src = 'piano.png' style = 'position:relative; top:220px; left:380px;'>" + 
					"<div id = 'shopCharacter' style='border-radius:100%; height:40px; width:40px; background-color:black;position:absolute;" +
					"top:520px;left:440px;'>" + "</div><div id = 'mayr' style='height:45px; width:45px; border-radius:100%;" + 
					"background-color:purple;position:absolute;top:300px; left:300px;'></div>";

	gmpl.insertBefore(manorScene, gmpl.garbage);
	
}

function talkToMayor()
{
	alert("Welcome to my home! My daughter is sick upstairs, please don't bother her.");
}

function exitManor()
{
	inBuilding = false;
	var gmpl = document.getElementById("playScreen");
	gmpl.removeChild(manorScene);
	character.style.top = 315 + 'px';
}

/************************************************************************************************************************
*
*					GENERAL
*
**************************************************************************************************************************/

function generateItems()
{
	healPrice = Math.floor((Math.random() * 300) + 50);
	itemType1 = determineItemType();
	itemType2 = determineItemType();
	
	while (itemType2 == itemType1)
	{
		itemType2 = determineItemType();
	}
	
	itemType3 = determineItemType();
	
	while(itemType3 == itemType2 || itemType3 == itemType1)
	{
		itemType3 = determineItemType();
	}
	
	blkSmith.item1 = itemType1;
	blkSmith.item2 = itemType2;
	blkSmith.item3 = itemType3;
	
}

function determineItemType()
{
	var itemNum = Math.floor(Math.random() * (4 + 1));
	var item;
	
	switch(itemNum)
	{
		case 0:
			item = Math.floor(Math.random() * (4 + 1));
			return item;
			break;
		case 1:
			item = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
			return item;
			break;
		case 2:
			item = Math.floor(Math.random() * (12 - 9 + 1)) + 9;
			return item;
			break;
		case 3:
			item = Math.floor(Math.random() * (16 - 13 + 1)) + 13;
			return item;
			break;
		case 4:
			item = Math.floor(Math.random() * (20 - 17 + 1)) + 17;
			return item;
			break;
		default:
			alert("there was an error!");
	}
}

//remove an item from the smithy when it has been purchased.
function boughtItem()
{

}