window.addEventListener('DOMContentLoaded', function (event) {
    let b = document.getElementById("mybutt");
    b.addEventListener("click", function (event) {
        let inn_var = document.getElementById("inn");
        let chs_var = document.getElementById("chs");
        
        if ((inn_var.value != 0)&&(chs_var.value != 0)&&(inn_var.value.length == 12))
            alert("Успешно!")
        else
            if ((inn_var.value != 0)&&(chs_var.value != 0))
                showError('inn', 'Проверьте ИНН!')
            else
		if (inn_var.value != 0)
	    		showError('chs', 'Заполните поле!')
	    	else
			if (chs_var.value != 0)
				showError('inn', 'Заполните поле!')
	    		else
			{
				showError('inn', 'Заполните поле!');
				showError('chs', 'Заполните поле!');
			}
        });
    });

function showError(field, errorMessage) {
	var errorSpan = document.createElement("span");
	var errorMessage = document.createTextNode(errorMessage);

	errorSpan.appendChild(errorMessage);
	errorSpan.className = "errorMsg";

	var fieldLabel = document.getElementById(field).previousSibling;
	while (fieldLabel.nodeName.toLowerCase() != "label") {
		fieldLabel = fieldLabel.previousSibling;
	}
	fieldLabel.appendChild(errorSpan);
}
