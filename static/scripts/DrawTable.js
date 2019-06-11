function drawTable(date,currentTime){

    if(date === 2) all_data = D3per10min;
	else if (date === 1) all_data = D2per10min;
	else all_data = D1per10min;
	if(currentTime < 27000) t = 0;
	else t = Math.floor((currentTime - 27000)/600);


	var data = [];
    for(i in all_data){
        var tmp = {region:i,flow:all_data[i][t]};
        // console.log(tmp);
        data.push(tmp);
    }
    // console.log(data);
    data.sort(function(a,b){
			return  b.flow - a.flow;
		});
    console.log(data);
    document.getElementById("th11").innerText = data[0].region;
    document.getElementById("th12").innerText = data[0].flow;
    document.getElementById("th21").innerText = data[1].region;
    document.getElementById("th22").innerText = data[1].flow;
    document.getElementById("th31").innerText = data[2].region;
    document.getElementById("th32").innerText = data[2].flow;
    document.getElementById("th41").innerText = data[3].region;
    document.getElementById("th42").innerText = data[3].flow;
    document.getElementById("th51").innerText = data[4].region;
    document.getElementById("th52").innerText = data[4].flow;
    document.getElementById("th61").innerText = data[5].region;
    document.getElementById("th62").innerText = data[5].flow;
    document.getElementById("th71").innerText = data[6].region;
    document.getElementById("th72").innerText = data[6].flow;
    document.getElementById("th81").innerText = data[7].region;
    document.getElementById("th82").innerText = data[7].flow;
    document.getElementById("th91").innerText = data[8].region;
    document.getElementById("th92").innerText = data[8].flow;
    document.getElementById("th101").innerText = data[9].region;
    document.getElementById("th102").innerText = data[9].flow;
}