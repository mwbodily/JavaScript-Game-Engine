
function move(direction)
{
	//loop through houses, and don't move if character is running into one. TODO: make this more
	//concise.
	for(var i = 0; i < houses.length; i++)
	{
		if(direction === "Right" && parseInt(character.style.left) >= houses[i].leftEdge - 5 &&
		   (parseInt(character.style.left) <= houses[i].rightEdge) &&
           (parseInt(character.style.top) >= houses[i].topEdge) &&
           (parseInt(character.style.top) <= houses[i].bottomEdge))
		{
			return;
		}
		if(direction === "Left" && parseInt(character.style.left) <= houses[i].rightEdge + 5 &&
		   parseInt(character.style.left) >= houses[i].leftEdge &&
           (parseInt(character.style.top) >= houses[i].topEdge) &&
           (parseInt(character.style.top) <= houses[i].bottomEdge))
		{
			return;
		}
		if(direction === "Down" && parseInt(character.style.top) >= houses[i].topEdge - 6 &&
			parseInt(character.style.left) >= houses[i].leftEdge &&
			(parseInt(character.style.left) <= houses[i].rightEdge) &&
			(parseInt(character.style.top) <= houses[i].bottomEdge))
		{
			return;
		}
		if(direction === "Up" && parseInt(character.style.top) <= houses[i].bottomEdge + 5 &&
			parseInt(character.style.left) >= houses[i].leftEdge &&
			parseInt(character.style.left) <= houses[i].rightEdge &&
			parseInt(character.style.top) >= houses[i].topEdge)
		{
			return;
		}
	}
	
	for(var i = 0; i < trees.length; i++)
	{
		if(direction === "Right" && parseInt(character.style.left) >= trees[i].leftEdge - 5 &&
		   (parseInt(character.style.left) <= trees[i].rightEdge) &&
           (parseInt(character.style.top) >= trees[i].topEdge) &&
           (parseInt(character.style.top) <= trees[i].bottomEdge))
		{
			return;
		}
		if(direction === "Left" && parseInt(character.style.left) <= trees[i].rightEdge + 2 &&
		   parseInt(character.style.left) >= trees[i].leftEdge &&
           (parseInt(character.style.top) >= trees[i].topEdge) &&
           (parseInt(character.style.top) <= trees[i].bottomEdge))
		{
			return;
		}
		if(direction === "Down" && parseInt(character.style.top) >= trees[i].topEdge - 5 &&
			parseInt(character.style.left) >= trees[i].leftEdge &&
			(parseInt(character.style.left) <= trees[i].rightEdge) &&
			(parseInt(character.style.top) <= trees[i].bottomEdge))
		{
			return;
		}
		if(direction === "Up" && parseInt(character.style.top) <= trees[i].bottomEdge + 5 &&
			parseInt(character.style.left) >= trees[i].leftEdge &&
			parseInt(character.style.left) <= trees[i].rightEdge &&
			parseInt(character.style.top) >= trees[i].topEdge)
		{
			return;
		}
	}
	 
	//check to make sure none of the town buildings are being hit
	//we want one of these to be false...
	if(parseInt(character.style.top) <= mayor.bottomEdge &&
	  parseInt(character.style.top) >= (mayor.topEdge + 5) &&
	  parseInt(character.style.left) >= mayor.leftEdge &&
	  parseInt(character.style.left) <= mayor.rightEdge - 5)
	{
		return;
	}
	
	//Move the character.
	if(direction === "Right")
	{
		character.style.left = parseInt(character.style.left) + 3 + 'px';
	}
	else if(direction === "Left")
	{
		character.style.left = parseInt(character.style.left) - 3 + 'px';
	}
	else if(direction === "Up")
	{
		character.style.top = parseInt(character.style.top) - 3 + 'px';
	}
	else if(direction === "Down")
	{
		character.style.top = parseInt(character.style.top) + 3 + 'px';
	}
	
	//see if the character has entered town. If yes, generate items. 
	//If the character just left, set intown to false.
	if(parseInt(character.style.top) >= 30 && 
	   parseInt(character.style.top) <= 430 && 
	   parseInt(character.style.left) >= 30 &&
	   parseInt(character.style.left) <= 430)
	{	
		if(intown == false)
		{
			generateItems();
		}
		intown = true;
	}
	else
	{
		intown = false;
	}

	//check if they are in town and in any shops. If they're not in town, 
	//generate the random chance for a battle.
	if(intown == true)
	{
		if(parseInt(character.style.left) >= 370 &&
		   parseInt(character.style.left) <= 396 &&
		   parseInt(character.style.top) <= (blkSmith.bottomEdge + 10) &&
		   parseInt(character.style.top) >= blkSmith.topEdge)
		{
			enterSmithy();
		}
		if(parseInt(character.style.left) >= 100 &&
		   parseInt(character.style.left) <= 126 &&
		   parseInt(character.style.top) <= (mayor.bottomEdge + 10) &&
		   parseInt(character.style.top) >= mayor.topEdge)
		{
			enterManor();
		}		   
		if(parseInt(character.style.left) >= 315 &&
		   parseInt(character.style.left) <= 341 &&
		   parseInt(character.style.top) <= (shop.bottomEdge + 10) &&
		   parseInt(character.style.top) >= shop.topEdge)
		   {
				enterShop();
		   }
	}
	else
	{
		fiendNum = Math.random();
		if(fiendNum < .05)
			startBattle();
	}
}