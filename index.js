
var b=document.querySelectorAll(".drum");
var e=document.querySelector(".end")
var e1=e.addEventListener("click",endgame);
function endgame(){
	for(i=0;i<b.length;i++)
    {
	     b[i].remove();

    }
    e.remove();
    document.querySelector("body").classList.add("game-over");
    document.querySelector(".tq").innerHTML="<p>Thank you for Playing!!!</p>"
}

var i,c;
for(i=0;i<b.length;i++)
{
	b[i].addEventListener("click",clicked)
}

document.addEventListener("keypress",function (event){
	c=event.key;
	buttonani(c);
	makeSound(c);      
})
// function clicked()
// {                          
//     c=this.textContent;          
// 	var audio=new Audio("sounds/"+c+".mp3");
// 	audio.play();
// }
function clicked()
{
	c=this.textContent;   
	buttonani(c);       
	makeSound(c);
}

function makeSound(c)
{
	switch(c)
	{
		case "w": var audio=new Audio("sounds/"+c+".mp3");
		          audio.play();
		          break;
		case "a": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;       
		case "d": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;   
		case "j": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		case "k": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		case "l": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		case "s": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		default: console.log(c);          
	}
}

function buttonani(e)
{
	var but=document.querySelector("."+e);
	but.classList.add("pressed");
	setTimeout(function() {
	   but.classList.remove("pressed");	
	},200);
}

