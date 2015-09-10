function Fence(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 5;
	this.topEdge = y;
	this.bottomEdge = y + 15;
}

function House(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 53;
	this.topEdge = y;
	this.bottomEdge = y + 47;
}

function Tree(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 25;
	this.topEdge = y;
	this.bottomEdge = y + 25;
}

function Mountain(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 25;
	this.topEdge = y;
	this.bottomEdge = y + 25;
}

function Shore(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 25;
	this.topEdge = y;
	this.bottomEdge = y + 25;
}

function Water(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 25;
	this.topEdge = y;
	this.bottomEdge = y + 25;
}

function Shop(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 50;
	this.topEdge = y;
	this.bottomEdge = y + 50;
}

function BlackSmith(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 75;
	this.topEdge = y;
	this.bottomEdge = y + 75;
	this.item1 = "---";
	this.item2 = "---";
	this.item3 = "---";
}

function Mayor(x, y)
{
	this.leftEdge = x;
	this.rightEdge = x + 70;
	this.topEdge = y;
	this.bottomEdge = y + 50;
}