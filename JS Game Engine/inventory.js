function generateInventory()
{
	//alert(inventoryUp);
	if(inventoryUp == false)
	{
		inventoryUp = true;

		var gmpl = document.getElementById("playScreen");
		inventory = document.createElement('div');
		inventory.id = "invtry";
		inventory.style.height = "460px";
		inventory.style.left = "300px";
		inventory.style.top = "150px";
		inventory.style.width = "350px";
		inventory.style.background = "#EEEEEE";
		inventory.style.position = "absolute";
		inventory.style.border = "3px solid black";
		inventory.innerHTML = "<h2 style='text-align:center;text-decoration:underline;'>Inventory</h2>" + 
							"<h4>Money: " + player.money + "<br />Level: " + player.level + 
							"<br/>Health: " + player.currentHealth + "/" + 
							player.maxHealth + "<br /> Attack: " + player.attack + "</h4>" + 
							"<h4>Character Armor and Weapons:</h4><p>Head: " + items[player.head] + 
							"<br/>" + "Torso: " + items[player.torso] + "<br/>Legs: " + 
							items[player.legs] + "<br/>Feet: " + items[player.feet] + "<br/>Weapon: " + 
							items[player.weapon] + "</p>" + 
							"<br /><button onclick = 'heal()' type='button'>Heal (" + 
							player.healingItems + ")</button>" + 
							"<button onclick = 'exitInventory()' type = 'button'>Exit</button>";
	
		gmpl.insertBefore(inventory, gmpl.garbage);
	}
}

function exitInventory()
{
	inventoryUp = false;
	var gmpl = document.getElementById("playScreen");
	gmpl.removeChild(invtry);
}