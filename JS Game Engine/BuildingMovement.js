var dude;

/*************************************************************************************************************
*
*								THE SHOP
*
**************************************************************************************************************/
function moveRightShop()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.left)
	current += 10;
	dude.style.left = current + 'px';
}

function moveLeftShop()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.left)
	current -= 10;
	dude.style.left = current + 'px';
}

function moveUpShop()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.top)
	current -= 10;
	dude.style.top = current + 'px';
}

function moveDownShop()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.top)
	current += 10;
	dude.style.top = current + 'px';
	console.log("here1");
	if((parseInt(dude.style.left) > 300 && parseInt(dude.style.left) < 575) && 
		parseInt(dude.style.top)  > 560)
	{
		exitShop();
	}	
}

function talkShop()
{
	if((parseInt(dude.style.left) > 20 && parseInt(dude.style.left) < 130) &&
		(parseInt(dude.style.top) > 75 && parseInt(dude.style.top) < 200))
	{
		startShopping();
	}
}

/*************************************************************************************************************
*
*								THE SMITHY
*
**************************************************************************************************************/

function moveRightSmithy()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.left)
	current += 10;
	dude.style.left = current + 'px';
}

function moveLeftSmithy()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.left)
	current -= 10;
	dude.style.left = current + 'px';
}

function moveUpSmithy()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.top)
	current -= 10;
	dude.style.top = current + 'px';
}

function moveDownSmithy()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.top)
	current += 10;
	dude.style.top = current + 'px';
	
	if((parseInt(dude.style.left) > 300 && parseInt(dude.style.left) < 575) && 
		parseInt(dude.style.top)  > 560)
	{
		exitSmithy();
	}	
}

function talkSmith()
{
	if((parseInt(dude.style.left) > 460 && parseInt(dude.style.left) < 600) &&
	   (parseInt(dude.style.top) > 75 && parseInt(dude.style.top) < 250))
	{
		startShoppingSmithy();
	}
}

/*************************************************************************************************************
*
*								THE MAYOR
*
**************************************************************************************************************/

function moveRightManor()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.left)
	current += 10;
	dude.style.left = current + 'px';
}

function moveLeftManor()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.left)
	current -= 10;
	dude.style.left = current + 'px';
}

function moveUpManor()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.top)
	current -= 10;
	dude.style.top = current + 'px';
}

function moveDownManor()
{
	dude = document.getElementById('shopCharacter');
	current = parseInt(dude.style.top)
	current += 10;
	dude.style.top = current + 'px';
	
	if((parseInt(dude.style.left) > 300 && parseInt(dude.style.left) < 575) && 
		parseInt(dude.style.top)  > 560)
	{
		exitManor();
	}	
}

function talkMayor()
{
	//alert(parseInt(dude.style.top) + " " + parseInt(dude.style.top));
	if((parseInt(dude.style.left) > 240 && parseInt(dude.style.left) < 340) &&
	   (parseInt(dude.style.top) > 240 && parseInt(dude.style.top) < 370))
	{
		talkToMayor();
	}
}