groups1 = [];
groupData1 = [];
time1 = [];
for(var i in Object.keys(D1permin)){
    groups1.push(Object.keys(D1permin)[i]);
    groupData1.push(D1permin[Object.keys(D1permin)[i]]);
    
}
for(var j=0; j<groupData1[0].length; j++){
    time1.push(j);
}

groups2 = [];
groupData2 = [];
time2 = [];
for(var i in Object.keys(D2permin)){
    groups2.push(Object.keys(D2permin)[i]);
    groupData2.push(D2permin[Object.keys(D2permin)[i]]);
    
}
for(var j=0; j<groupData2[0].length; j++){
    time2.push(j);
}

groups3 = [];
groupData3 = [];
time3 = [];
for(var i in Object.keys(D3permin)){
    groups3.push(Object.keys(D3permin)[i]);
    groupData3.push(D3permin[Object.keys(D3permin)[i]]);
    
}
for(var j=0; j<groupData3[0].length; j++){
    time3.push(j);
}

// default
var groups = groups1;
var groupData = groupData1;
var time = time1;
