function volume_sphere() {
    //Write your code here
	 event.preventDefault();
  let radiusValue = document.getElementById("radius");
	let radius = parseFloat(radiusValue.value);
	let volume = document.getElementById("volume");
	if(isNaN(radius) || radius<0){
volume.value = "NaN";
	return;
	}
	let result = (4/3) *Math.PI * radius ** 3;
	volume.value = result.toFixed(4);
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
