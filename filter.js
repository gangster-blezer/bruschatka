function menu(el,add,del) {
	document.getElementsByClassName(el)[0].classList.add(add);
	document.getElementsByClassName(el)[0].classList.remove(del);
}


document.getElementById("price-range").addEventListener("input", function() {
  document.getElementById("price-max").value = this.value;
});

document.getElementById("price-max").addEventListener("input", function() {
  document.getElementById("price-range").value = this.value;
});