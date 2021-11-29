for (var i = 0; i < document.querySelectorAll('.actionContainer').length; i++) {
	acCon = document.querySelectorAll('.actionContainer')[i];
	dtl = acCon.querySelector('.action-details');
	dt = dtl.querySelector('.date').getAttribute('title');
	for (var a = 0; a < acCon.querySelectorAll('.changehistory').length; a++) {
	  text = acCon.querySelectorAll('.changehistory')[a];
	  act = text.querySelector('.activity-name').innerText.trim();
	  act1 = text.querySelector('.activity-old-val').childNodes[0].textContent.trim();
	  act2 = text.querySelector('.activity-new-val').childNodes[0].textContent.trim();
	  if (act == 'Status'){
	  	text += act2, "-", dt, "<br>"
	  	console.log(act2, "-", dt);
	  } else{}
	}
}
