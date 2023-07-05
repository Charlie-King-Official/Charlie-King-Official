type = "text/javascript"
function navClick(tabid) {
	let x = document.getElementsByClassName("tab");
	for(i = 0; i < x.length; i++) {
		if(x[i].id == tabid) {
			x[i].classList.add("active");
		}else{
			x[i].classList.remove("active");
		}
	}
	let y = document.getElementsByClassName("navbutton");
	for(i = 0; i < y.length; i++) {
		if(y[i].id == tabid) {
			y[i].classList.add("active");
		}else{
			y[i].classList.remove("active");
		}
	}
}

function vehicleType() {
	let t = document.getElementById("vehtype");
	let x = document.getElementById("countselect");
	if(t.value == "combo") {
		x.style.visibility = "visible";
	}else{
		x.style.visibility = "hidden";
	}
}

function unitCount() {
	let x = document.getElementById("unitcount");
	let y = document.getElementsByClassName("unitlinks");
	for(i = 0; i < y.length; i++){
		if(i < x.value) {
			y[i].style.visibility = "visible";
		}else{
			y[i].style.visibility = "hidden";
		}
	}
}

function axleCount(val) {
	let y = document.getElementsByClassName("axlelinks");
	for(i = 0; i < y.length; i++){
		if(i < val) {
			y[i].style.visibility = "visible";
		}else{
			y[i].style.visibility = "hidden";
		}
	}
}

function openAxle(id) {
	axles = document.getElementsByClassName("axlecontent");
	for(i=0; i<axles.length; i++) {
		if(axles[i].id == id) {
			axles[i].classList.remove("hidden");
			axles[i].classList.add("active");
		}else{
			axles[i].classList.remove("active");
			axles[i].classList.add("hidden");
		}
	}
}

function dualWheel(el, val) {
	let children = el.parentNode.children;
	for(i = 0; i < children.length; i++) {
		if(children[i].className == "row"){
			let grands = children[i].children;
			for(j = 0; j < grands.length; j++) {
				if(val == "sw"){
					if(grands[j].id == "leftinner" || grands[j].id == "rightinner") {
						grands[j].style.display = "none";
					}
				}else{
					grands[j].style.display = "block";
				}
			}
		}
	}
}