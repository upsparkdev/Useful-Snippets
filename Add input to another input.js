window.onload = function() {

	const aInput = document.getElementById("input_a");
  const bInput = document.getElementById("input_b");

  /* change input_b on load */
  
  aInput.addEventListener('load', function() {
  bInput.value = aInput.value;
	});
  
  /* Change input_b if input_a changes via user input */

	aInput.addEventListener('input', function() {
		bInput.value = aInput.value;
	});

}; 
