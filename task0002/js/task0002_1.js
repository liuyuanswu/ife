function dealInterest() {
	var interestText = $(".interest").value;
	// alert(interestText);
	interestText = interestText.replace(/[\s，,、；;]/g," ");
	// alert(interestText);
	interestText = interestText.split(" ");
	// alert(interestText);
	interestText = uniqArray(interestText);
	// alert(interestText);
	if(interestText.length > 10){
		$(".showInterest").innerHTML = "爱好数量不超过10，请重新输入";
	}
	else if(interestText.length == 0){
		$(".showInterest").innerHTML = "至少要输入一个爱好";
	}
	else{
		$(".showInterest").innerHTML = "<h1>你的爱好有：</h1>";
		for (var i = 0; i <= interestText.length - 1; i++) {
			var checkBox = document.createElement("input");
			checkBox.type = "checkbox";
			checkBox.checked = "checked";
			var text = document.createTextNode(interestText[i]);
			$(".showInterest").appendChild(checkBox);
			$(".showInterest").appendChild(text);
			$(".showInterest").style.color = "#000";
		}
	};
}