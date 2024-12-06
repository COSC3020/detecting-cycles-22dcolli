function hasCycle(graph) {

    let visited = [];
    let path = []; 

    
    for (let node in graph) {
        visited[node] = false;
    }

    
    function backtrack(curNode){


        path.push(curNode); 
        visited[curNode] = true;

        // Explore neighbors
        for (let neighbor in graph[curNode]) {

            //neighbor not visited
            if(!visited[neighbor]) {

                if (backtrack(neighbor)){

                    return true; 
                }
              
            }
            //the neighbor was already in path so cycle found 
            else if (path.includes(neighbor)){
                return true;
            }
        }

        path.pop();
        return false;
    }

    //in case of disconnected graph
    for( let node in graph){

        if (!visited[node]) {

            if(backtrack(node)){
                return true;
            }
        }
    }

    return false;
}
/*
//cycle graph
var graph = {'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}};

console.log(hasCycle(graph))

//no cycle graph
var graph2 = {'foo': {'boo': 1},
    'boo': {'bar': 1},
    'bar': {}};

console.log(hasCycle(graph2))

//disconnected no cycle
var graph3 = {'foo': {'boo': 7},
    'boo': {},
    'bar': {'coo': 1},
    'coo': {}};

console.log(hasCycle(graph3))


//disconnected with cycle
var graph4 = {'foo': {'boo': 7},
    'boo': {},
    'bar': {'coo': 1},
    'coo': {'car': 1},
    'car': {'bar':1}};

console.log(hasCycle(graph4))

//fully connected so yes cycles
var graph5 = {'foo': {'boo': 1,'bar':1,'car':1},
    'boo': {'foo': 1,'bar':1,'car':1},
    'bar': {'boo': 1,'foo':1,'car':1},
    'car': {'boo': 1,'bar':1,'foo':1}};

console.log(hasCycle(graph5))
*/
