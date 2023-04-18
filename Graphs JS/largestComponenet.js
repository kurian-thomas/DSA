
const graph = {
    0: ["8","1","5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
}


var visited = new Set();
var noOfCompoenents = 0;
var largestComponent = 0;
var compoenentSize = 0;

for(var vertex of Object.keys(graph)){
    //traversal if not visited + compoenent count
    //no of componenets
    if(!visited.has(vertex)){
        DFS(vertex);
        noOfCompoenents++;
        largestComponent = Math.max(largestComponent, compoenentSize);
        compoenentSize = 0;
    }
}

console.log({largestComponent,compoenentSize,noOfCompoenents})

function DFS(source){
    console.log(source);
    visited.add(source);
    compoenentSize++;

    for(var child of graph[source]){
        if(!visited.has(child)){
            DFS(child);
        }
    }
}