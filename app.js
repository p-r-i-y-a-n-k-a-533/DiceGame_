  var rn1 = Math.floor( ( Math.random()*6 )+1 ) ;
    if (rn1 === 1)
    {  document.querySelector(".img1").setAttribute("src", "dice1.png");}
    else if (rn1 === 2)
    {  document.querySelector(".img1").setAttribute("src", "dice2.png");}
    else if (rn1 === 3)
    {  document.querySelector(".img1").setAttribute("src", "dice3.png");}
    else if (rn1 === 4)
    {  document.querySelector(".img1").setAttribute("src", "dice4.png");}
    else if (rn1 === 5)
    {  document.querySelector(".img1").setAttribute("src", "dice5.png");}
    else if (rn1 === 6)
    {  document.querySelector(".img1").setAttribute("src", "dice6.png");}

var rn2 = Math.floor( ( Math.random()*6 )+1 );
  if (rn2 === 1)
  {  document.querySelector(".img2").setAttribute("src", "dice1.png");}
  else if (rn2 === 2)
  {  document.querySelector(".img2").setAttribute("src", "dice2.png");}
  else if (rn2 === 3)
  {  document.querySelector(".img2").setAttribute("src", "dice3.png");}
  else if (rn2 === 4)
  {  document.querySelector(".img2").setAttribute("src", "dice4.png");}
  else if (rn2 === 5)
  {  document.querySelector(".img2").setAttribute("src", "dice5.png");}
  else if (rn2 === 6)
  {  document.querySelector(".img2").setAttribute("src", "dice6.png");}


if(rn1>rn2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(rn1<rn2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if(rn1 === rn2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
