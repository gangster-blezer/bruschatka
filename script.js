var menu_open = false;

function change(el,add,del) {
	document.getElementsByClassName(el)[0].classList.add(add);
	document.getElementsByClassName(el)[0].classList.remove(del);
}

function openMenu(){
	change("mobile-menu","menu-open","menu-close");
	change("overlay","overlay-open","overlay-close");
	document.body.classList.add("body-fixed");
	menu_open = true;
}

function closeMenu(){
	change("mobile-menu","menu-close","menu-open");
	change("overlay","overlay-close","overlay-open");
	document.body.classList.remove("body-fixed");
	menu_open = false;
}

document.getElementById("mobile-menu").onclick = function(){
	if(menu_open){
		closeMenu();
	}else{
		openMenu();
	}
}