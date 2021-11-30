text = ""

var conts = document.querySelectorAll('.actionContainer');

for (const cont of conts) {
	dtl = cont.querySelector('.action-details');
	usr = dtl.querySelector('.user-hover').innerText.trim();
	dt = dtl.querySelector('.date').getAttribute('title');
	//console.log(cont);
	//console.log(dt);
	//await get_activity(cnt);

	var changes = cont.querySelectorAll('.changehistory tr');
	
	for (const chg of changes) {
		//console.log(chg);
		try{
			act = chg.querySelector('.activity-name').innerText.trim();
			act1 = chg.querySelector('.activity-old-val').childNodes[0].textContent.trim();
			act2 = chg.querySelector('.activity-new-val').childNodes[0].textContent.trim();
			if (act != 'Status'){
			} else{
			var txt = act2 + " - " + dt + " - " + usr;
			text += txt + "\n"
			}
		} catch (e){}
	}
}
console.log(text);
