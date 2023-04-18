const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

var visited = {};

for(let i of Object.keys(graph)){
    visited[i] = false;
}


DFS(graph, 'a');


function DFS(graph,source){
    console.log(source);
    var children = graph[source];
    for(var vertex of children){
        if(!visited[vertex]){
            visited[vertex] = true;
            DFS(graph,vertex);
        }
    }
}

