let combined = {
    "vitomata":30,
    "eyevit":0,
    "y-rins":99,
    "biovision":2,
    "alcon-tears":10,
}

let sortable = [];
for (let label in combined){
    sortable.push([label,combined[label]]);
}

sortable.sort(function(a,b){
    return a[1] - b[1];
});

console.log(sortable.slice(-1).join(" ") + '%')