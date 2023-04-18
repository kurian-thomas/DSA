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


BFS(graph, 'a');

function BFS(graph, source){

    var queue = [];
    var current;
    var children;

    queue.push(source);

    while(queue.length != 0){
        current = queue.shift();
        console.log(current);
        visited[current] = true;
        children = graph[current];

        for(let child of children)
            !visited[child]? queue.push(child): null;

    }

}