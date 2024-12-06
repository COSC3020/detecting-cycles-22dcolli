const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//cycle graph
var graph = {'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}};

assert(hasCycle(graph) === true);

//no cycle graph
var graph2 = {'foo': {'boo': 1},
    'boo': {'bar': 1},
    'bar': {}};

assert(hasCycle(graph2) === false);

//disconnected no cycle
var graph3 = {'foo': {'boo': 7},
    'boo': {},
    'bar': {'coo': 1},
    'coo': {}};

assert(hasCycle(graph3) === false);


//disconnected with cycle
var graph4 = {'foo': {'boo': 7},
    'boo': {},
    'bar': {'coo': 1},
    'coo': {'car': 1},
    'car': {'bar':1}};

assert(hasCycle(graph4) === true);

//fully connected so yes cycles
var graph5 = {'foo': {'boo': 1,'bar':1,'car':1},
    'boo': {'foo': 1,'bar':1,'car':1},
    'bar': {'boo': 1,'foo':1,'car':1},
    'car': {'boo': 1,'bar':1,'foo':1}};

assert(hasCycle(graph5) === true);
