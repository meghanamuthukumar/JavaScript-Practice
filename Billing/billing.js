function billingFunction(){

	if(document.querySelector("#same").checked)
	{
        var name;
        var zip;
		name = document.querySelector("#shippingName").value;
		zip = document.querySelector("#shippingZip").value;

		document.querySelector("#billingName").value=name;   
		document.querySelector("#billingZip").value=zip;
	}

	else
	{
		document.querySelector("#billingName").value = "";
		document.querySelector("#billingZip").value = "";
	}
}