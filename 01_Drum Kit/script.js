
var sounds = ["boom.wav","clap.wav","hihat.wav","kick.wav","openhat.wav",
"ride.wav","snare.wav","tink.wav","tom.wav"];

var buttons = document.querySelectorAll(".button");

function rem(e){
	e.classList.add("button-hover");
	setTimeout((_e =e) =>{_e.classList.remove("button-hover")},150);
}

window.addEventListener("keypress", function makeSound(_key){
	var track;
	switch (_key.key) {
		case "a":
		track = sounds[1];
		rem(buttons[0]);
		break;
		case "s":
		track = sounds[2];
		rem(buttons[1]);
		break;
		case "d":
		track = sounds[3];
		rem(buttons[2]);
		break;
		case "f":
		track = sounds[4];
		rem(buttons[3]);
		break;
		case "g":
		track = sounds[0];
		rem(buttons[4]);
		break;
		case "h":
		track = sounds[5];
		rem(buttons[5]);
		break;
		case "j":
		track = sounds[6];
		rem(buttons[6]);
		break;
		case "k":
		track = sounds[8];
		rem(buttons[7]);
		break;
		case "l":
		track = sounds[7];
		rem(buttons[8]);
		break;

		default:
		track="";
		break;
	}
	if(track!=""){
		track = "sounds/"+track;
		var audio = new Audio(track);
		audio.play();
	}
	
} );

