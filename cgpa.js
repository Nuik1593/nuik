var previous=0;


function newCount()
{
	previous=0;
}

function countCredit()
{
	var credit=0.0;
	var ncgpa=0.0;
	var prev=0.0;

	for(var i=0;i<document.forms[0].length;i++)
	{
		if(i%2==0) 
			{
				prev=document.forms[0].elements[i].value;
				credit+=(1*prev);
			}
		else
		{
			ncgpa+= (prev*(document.forms[0].elements[i].value));
		}
		console.log(ncgpa);
		console.log(credit);
	}
	previous= ncgpa/credit;
	previous=previous.toPrecision(3);
	document.getElementById("result").innerHTML=
	"Total completed credit= "+ credit+ "  And  CGPA =  "+previous;

	document.forms[0].elements[0].value=credit;
	document.forms[0].elements[1].value=previous;
}

