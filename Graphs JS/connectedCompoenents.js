const graph = {
    3: [],
    4: ['6'],
    6: ['4','5','7','8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
}

let visited = new Set();
let compoenentCount = 0;

for(let node of Object.keys(graph)){
    if(!visited.has(node)){
        visited.add(node);
        DFS(node);
        compoenentCount++;
        console.log("+++++++++++++ next comp +++++++++++++");
    }
}

console.log(`Componenet count ${compoenentCount}`);

function DFS(source){
    console.log(source);
    let children = graph[source];
    for(let vertex of children){
        if(!visited.has(vertex)){
            visited.add(vertex);
            DFS(vertex);
        }
    }

}
