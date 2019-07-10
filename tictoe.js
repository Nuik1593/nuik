var counter=0;
var player1="player 1";
var player2="player 2";
var arr=[0,0,0,0,0,0,0,0,0,0];
var flag=false;
var superflag=true;

function buttonFunction(){
	player1 = document.forms[0].elements[0].value; 
	player2 = document.forms[0].elements[1].value; 
	flag=true;

	document.getElementById("player01").innerHTML=player1+" is player 1 (assigned sign X).";
	document.getElementById("player02").innerHTML=player2+" is player 2.(assigned sign O).";
	document.getElementById("choice").innerHTML=player1+" 's turn. pick a place.";
	window.scrollBy(0,450);

}

function commonfucntion(id) {

	if(!flag)
	{
			document.getElementById("choice").innerHTML="Must submit Names First "+player1+" "+player2;
			window.scrollBy(0,-500);
	}

	else if(!superflag)
	{
			document.getElementById("choice").innerHTML="Start a new match.";
	}

	else if(counter%2==0)
	{
		if(arr[id]!=0) 
		document.getElementById("choice").innerHTML=" Already placed!! Sorry!! ."+player1+
	                      " 's turn. pick a place.";

		else 
		{
		arr[id]=1;
		document.getElementById(id).innerHTML="X";
		if (checkResult())
		{ 
		document.getElementById("choice").innerHTML=player1+" Wins , Congratulation";
		newMatch();
	    }
		else 
		document.getElementById("choice").innerHTML=player2+" 's turn. pick a place.";
		counter++;
		}
	}
	else
	{
		if(arr[id]!=0) 
		document.getElementById("choice").innerHTML= "Already placed!! Sorry!! ."+player2+
	                      " 's turn. pick a place.";

	    else
	    {
	    arr[id]=2;
		document.getElementById(id).innerHTML="O";	
		if (checkResult()) 
		{
		document.getElementById("choice").innerHTML=player2+" Wins , Congratulation";
		newMatch();
		}
		else 
		document.getElementById("choice").innerHTML=player1+" 's turn. pick a place.";
		counter++;
	    }                  	
	}

	if(counter==9)
	{
	 		document.getElementById("choice").innerHTML="Its a draw!!!";
	 		superflag=false;	
	}
	
}

function checkResult()
{
	if(arr[1]==arr[2] && arr[2]==arr[3] && arr[1]!=0) return true;
	else if(arr[4]==arr[5] && arr[5]==arr[6] && arr[4]!=0)return true;
	else if(arr[7]==arr[8] && arr[8]==arr[9] && arr[7]!=0) return true;

	else if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=0) return true;
	else if(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=0) return true;
	else if(arr[3]==arr[6] && arr[6]==arr[9] && arr[3]!=0) return true;

	else if(arr[1]==arr[5] && arr[5]==arr[9] && arr[1]!=0) return true;
	else if(arr[3]==arr[5] && arr[8]==arr[7] && arr[3]!=0) return true;

	else return false;
}

function newMatch()
{
	superflag=false;
	document.getElementById("NewMatch").innerHTML="NEWMATCH";
	window.scrollBy(0,100);	
}
