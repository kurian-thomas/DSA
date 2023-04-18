const edges = [
    ["w","x"],
    ["x","y"],
    ["z","y"],
    ["z","v"],
    ["w","v"]
];

let graph = new Map();
let minLengthMap= {};
buildGraph(edges);
console.log(shortestPath("w", "z"));




function buildGraph(edges){
    for(let edge of edges){
        let [nodeA, nodeB] = edge;
        if(!graph.has(nodeA)) graph.set(nodeA,[]);
        if(!graph.has(nodeB)) graph.set(nodeB,[]);
        graph.set(nodeA,[...graph.get(nodeA),nodeB]);
        graph.set(nodeB,[...graph.get(nodeB),nodeA]);
    }
}

function shortestPath(source, destination){
    //bfs + counting

    let queue = [[source,0]];
    let visited = new Set();

    while(queue.length > 0 ){
        let [currentNode, distance] = queue.shift();
        if(visited.has(currentNode)) continue;
        visited.add(currentNode);

        console.log({currentNode,distance,queue})

        for(let child of graph.get(currentNode)){
            if(!visited.has(child)){
                if(!(child in minLengthMap)) minLengthMap[child] = distance+1;
                minLengthMap[child] = Math.min(minLengthMap[child], distance+1);
                queue.push([child, minLengthMap[child]]);
            }
        }
    }

    return minLengthMap[destination];
}