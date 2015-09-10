function keyListener(e)
{
	//37 = left 
	//38 = up
	//39 = right
	//40 = down
	//73 = i
	//32 = space bar
	//alert(e.keyCode);
	//alert(inBuilding);
	if(!inBattle)
	{
		if(inBuilding == false)
		{
			if(e.keyCode == 39 || e.keyCode == 65)
				move("Right");
			else if(e.keyCode == 37 || e.keyCode == 68)
				move("Left");
			else if(e.keyCode == 38 || e.keyCode == 87)
				move("Up");
			else if(e.keyCode == 40 || e.keyCode == 83)
				move("Down");
			else if(e.keyCode == 67)
				alert(displayCharacterStats());
			else if(e.keyCode == 73)
				generateInventory();
			else if(e.keyCode == 32)
			{
				talk();
			}
			else
			{
				//alert("top: " + character.style.top + "\nleft: " + 
				 //     character.style.left + "\nmTop: " + shop.topEdge + 
			//		  "\nmbottom: " + shop.bottomEdge + "\nmleft: " + 
			//		  shop.leftEdge + "\nmrigt: " + shop.rightEdge);
			}
		}

		if(inBuilding == true && inBuildingShop == true)
		{
			if(e.keyCode == 39 || e.keyCode == 65)
				moveRightShop();
			else if(e.keyCode == 37 || e.keyCode == 68)
				moveLeftShop();
			else if(e.keyCode == 38 || e.keyCode == 87)
				moveUpShop();
			else if(e.keyCode == 40 || e.keyCode == 83)
				moveDownShop();
			else if(e.keyCode == 67)
				alert(displayCharacterStats());
			else if(e.keyCode == 73)
				generateInventory();
			else if(e.keyCode == 32)
			{
				talkShop();
			}
			else
			{
				alert("top: " + character.style.top + "\nleft: " + 
					  character.style.left);
			}
		}
		
		if(inBuildingSmithy == true && inBuilding == true)
		{
			if(e.keyCode == 39 || e.keyCode == 65)
				moveRightSmithy();
			else if(e.keyCode == 37 || e.keyCode == 68)
				moveLeftSmithy();
			else if(e.keyCode == 38 || e.keyCode == 87)
				moveUpSmithy();
			else if(e.keyCode == 40 || e.keyCode == 83)
				moveDownSmithy();
			else if(e.keyCode == 67)
				alert(displayCharacterStats());
			else if(e.keyCode == 73)
				generateInventory();
			else if(e.keyCode == 32)
			{
				talkSmith();
			}
			else
			{
				alert("top: " + character.style.top + "\nleft: " + 
					  character.style.left);
			}
		}
		
		if(inBuildingManor == true && inBuilding == true)
		{
			if(e.keyCode == 39 || e.keyCode == 65)
				moveRightManor();
			else if(e.keyCode == 37 || e.keyCode == 68)
				moveLeftManor();
			else if(e.keyCode == 38 || e.keyCode == 87)
				moveUpManor();
			else if(e.keyCode == 40 || e.keyCode == 83)
				moveDownManor();
			else if(e.keyCode == 67)
				alert(displayCharacterStats());
			else if(e.keyCode == 73)
				generateInventory();
			else if(e.keyCode == 32)
			{
				talkMayor();
			}
			else
			{
				//alert("top: " + character.style.top + "\nleft: " + 
				//      character.style.left);
			}
		}
	}
}