var filter_open = false;

function change(el,add,del) {
	document.getElementsByClassName(el)[0].classList.add(add);
	document.getElementsByClassName(el)[0].classList.remove(del);
}

function openFilter(){
	change("filter","filter-open","filter-close");
	document.body.classList.add("body-fixed");
	filter_open = true;
}

function closeFilter(){
	change("filter","filter-close","filter-open");
	document.body.classList.remove("body-fixed");
	filter_open = false;
}

document.getElementById("filter_btn").onclick = function(){
	if(filter_open){
		closeFilter();
	}else{
		openFilter();
	}
}


document.getElementById("price-range").addEventListener("input", function() {
  document.getElementById("price-max").value = this.value;
});

document.getElementById("price-max").addEventListener("input", function() {
  document.getElementById("price-range").value = this.value;
});