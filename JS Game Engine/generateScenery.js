function generateTown()
{
	var j = 0;
	gmpl = document.getElementById("playScreen");
	for(var i = 0; i < townBuildingsLocations.length; i+=2)
	{
		var temp = document.createElement('div');
		temp.style.position = "absolute";
		temp.style.left = townBuildingsLocations[i] + 'px';
		temp.style.top = townBuildingsLocations[i + 1] + 'px';
		temp.style.zIndex = "0";
		temp.innerHTML = "<img src = 'closedHouse2.png' />";
		
		houses[j] = new House(townBuildingsLocations[i],townBuildingsLocations[i + 1]);
		j++;
		gmpl.insertBefore(temp, gmpl.fistChild);
	}
	
	var smith = document.createElement('div');
	smith.style.position = "absolute";
	smith.style.left = "345px";
	smith.style.top = "230px";
	smith.innerHTML = "<img src = 'blkSmith.png' />"
	blkSmith = new BlackSmith(345,230);
	gmpl.insertBefore(smith, gmpl.firstChild);
	
	var myr = document.createElement('div');
	myr.style.position = "absolute";
	myr.style.left = "85px";
	myr.style.top = "230px";
	myr.innerHTML = "<img src = 'mayor.png' />";
	mayor = new Mayor(85,230);
	gmpl.insertBefore(myr, gmpl.firstChild);
	
	var shp = document.createElement('div');
	shp.style.position = "absolute";
	shp.style.left = "305px";
	shp.style.top = "80px";
	shp.innerHTML = "<img src = 'shop.png' />"
	shop = new Shop(305,80);
	gmpl.insertBefore(shp, gmpl.firstChild);
	
}

function generateForest()
{
	var j = 0;
	gmpl = document.getElementById("playScreen");
	for(var i = 0; i < treeLocations.length; i+= 2)
	{
		var temp = document.createElement('div');
		temp.style.position = "absolute";
		temp.style.left = treeLocations[i] + 'px';
		temp.style.top = treeLocations[i + 1] + 'px';
		temp.style.zIndex = "0";

		temp.innerHTML = "<img src = 'tree.png' />";
		
		trees[j] = new Tree(treeLocations[i],treeLocations[i + 1]);
		j++;

		gmpl.insertBefore(temp, gmpl.fistChild);

	}
}

function generateMountains()
{
	var j = 0;
	gmpl = document.getElementById("playScreen");
	for(var i = 0; i < mountains.length; i+= 2)
	{
		var temp = document.createElement('div');
		temp.style.position = "absolute";
		temp.style.left = mountains[i] + 'px';
		temp.style.overflow = "hidden";
		temp.style.top = mountains[i + 1] + 'px';
		temp.style.zIndex = "0";

		temp.innerHTML = "<img src = 'mountain.png' />";
		
		trees[j] = new Mountain(mountains[i], mountains[i + 1]);
		j++;

		gmpl.insertBefore(temp, gmpl.fistChild);
	}
}

function generateShore()
{
	var j = 0;
	gmpl = document.getElementById("playScreen");
	for(var i = 0; i < shore.length; i+= 2)
	{
		var temp = document.createElement('div');
		temp.style.position = "absolute";
		temp.style.left = shore[i] + 'px';
		temp.style.overflow = "hidden";
		temp.style.top = shore[i + 1] + 'px';
		temp.style.zIndex = "0";

		temp.innerHTML = "<img src = 'shore.png' />";
		
		trees[j] = new Shore(shore[i], shore[i + 1]);
		j++;
		gmpl.insertBefore(temp, gmpl.fistChild);
	}
}

function generateWater()
{
	var j = 0;
	gmpl = document.getElementById("playScreen");
	for(var i = 0; i < water.length; i+= 2)
	{
		var temp = document.createElement('div');
		temp.style.position = "absolute";
		temp.style.overflow = "hidden";
		temp.style.left = water[i] + 'px';
		temp.style.top = water[i + 1] + 'px';
		temp.style.zIndex = "0";

		temp.innerHTML = "<img src = 'water.png' />";
		
		trees[j] = new Water(water[i], water[i + 1]);
		j++;
		gmpl.insertBefore(temp, gmpl.fistChild);
	}
}

function generateFences()
{
	var j = 0; 
	gmpl = document.getElementById("playScreen");
	for(var i = 0; i < townVFenceLocations.length; i += 2)
	{
		var temp = document.createElement('div');
		temp.style.position = "absolute";
		temp.style.left = townVFenceLocations[i] + 'px';
		temp.style.top = townVFenceLocations[i + 1] + 'px';
		temp.style.zIndex = "0";

		temp.innerHTML = "<img src = 'fenceV.png' />";
		
		trees[j] = new Fence(townVFenceLocations[i],townVFenceLocations[i + 1]);
		j++;
		gmpl.insertBefore(temp, gmpl.fistChild);
	}
}