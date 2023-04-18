const graph = {
    0: [["1",1], ["2",4]],
    1: [["0",1],["2",4],["3",2],["4",7]],
    2: [["0",4],["1",4],["3",3],["4",5]],
    3: [["2",3],["1",2],["4",4],["5",6]],
    4: [["1",7],["2",5],["3",4],["5",7]],
    5: [["4",7],["3",6]],
}

let minDistanceMap = {};
let visited = new Set();
let path = [];
shortestPath("0","5");

function shortestPath(source, destination){

    let queue = [[source,0]];

    while(queue.length > 0){
        let [currentNode, distance] = queue.shift();
        console.log(currentNode);
        visited.add(currentNode);

        for(let [child,toDistance] of graph[currentNode]){
            if(!visited.has(child)){
                if(!(child in minDistanceMap))minDistanceMap[child] = distance+toDistance;
                minDistanceMap[child] = Math.min(minDistanceMap[child], distance+toDistance)
                queue.push([child,distance+toDistance]);
            }
        }
    }
    console.log({minDistanceMap,path})
}