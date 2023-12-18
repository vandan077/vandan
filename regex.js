function namei() {
	var a=/^[A-Za-z0-9]+$/
	var b=document.getElementById('use').value
	var fname_length=b.length
	
	var lamao=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	// var lamao=/^([\w]*[\w\.]*(?!\.)@G*g*M*m*A*a*I*i*L*l.C*c*O*o*M*m)/
	// var ac=/^([\w]*[\w\.]*(?!\.)@R*r*K*k*U*u.A*a*C*c.I*i*N*n)/
	
	var lname=document.getElementById('gmail').value

	var numb=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
	var c=document.getElementById('pass').value
	var num_length=c.length

	var d=document.getElementById('cpass').value
	var pass=c.length

	if(b.match(a) )
	{
		if(lname.match(lamao))
		{
			if(c.match(numb) && num_length >= 8)
			{
        if(d.match(c) && pass >= 8)
			{
			}
			else{
				alert("enter same as above passworld")
				return false
			}
			}
			else{
				alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
				return false

			}
		}
		else{
			alert("enter valid gmail id")
			return false

		}
	}
	else{
		alert("enter valid username")
		return false

	}
}


    function con1() {
      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      // Regular expression for a valid email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (fullName.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return false;
      }

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }

      // Additional custom validation can be added as needed

      return true;
    }
	
    function nam() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('pass').value;

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }

      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
        return false;
      }

     

      return true;
}
