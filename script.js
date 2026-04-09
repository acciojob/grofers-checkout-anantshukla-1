const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	console.log("button clicked");
//Add your code here
	let priceElements = document.querySelectorAll('.price');
	let totalPrice = 0;
	
	priceElements.forEach((elements)=>{
		let price = parseFloat(elements.textContent);
		if(!isNaN(price)){
			totalPrice += price;
		}
	});

	const table = document.querySelector('table');
	let existingTotal = document.querySelector('#total-row');
	if(existingTotal) {
		existingTotal.remove(); 
	    console.log("Updated existing row");
	};
	
	const newRow = document.createElement('tr');
	newRow.id = 'total-row';
	const newCell = document.createElement('td');

	newCell.textContent = `Total Price: ${totalPrice}`;
	newCell.setAttribute('colspan' , '2');
	newCell.style.fontWeight = 'bold';

	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

