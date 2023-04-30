let enrollments = [];

function submitForm() {
	// get form values
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const gender = document.getElementById('gender').value;
	const field = document.getElementById('field').value;
	const imageLink = document.getElementById('imageLink').value;
	
	// create enrollment object
	const enrollment = {
		name: name,
		email: email,
		gender: gender,
		skills: field,
		imageLink: imageLink
	};
	
	// add enrollment to array
	enrollments.push(enrollment);
	
	// display enrollments data on page
	const output = document.getElementById('output');
	output.innerHTML = '';
	for (let i = 0; i < enrollments.length; i++) {
		output.innerHTML += `
			<h2>Enrollment Data #${i + 1}</h2>
			<p><strong>Name:</strong> ${enrollments[i].name}</p>
			<p><strong>Email:</strong> ${enrollments[i].email}</p>
			<p><strong>Gender:</strong> ${enrollments[i].gender}</p>
			<p><strong>Field:</strong> ${enrollments[i].field}</p>
			${enrollments[i].imageLink ? `<img src="${enrollments[i].imageLink}" alt="${enrollments[i].name}">` : ''}
			<hr>
		`;
	}
	
	// reset form
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('gender').value = 'male';
	document.getElementById('field').value = 'html';
	document.getElementById('imageLink').value = '';
}

function clearForm() {
	// clear form fields
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('gender').value = 'male';
	document.getElementById('field').value = 'html';
    document.getElementById('imageLink').value = '';
	
	// clear output
	document.getElementById('output').innerHTML = '';
}
