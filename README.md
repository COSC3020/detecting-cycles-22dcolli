# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note

I did not complete this excersise last semester, so I am attempting this completely from scratch. Modified my code for augmenting paths so the same structure is used with the changes made to detect cycles.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

### Answer:

I believe that the complexity will be the same as it was with augmenting path, that being $\Theta(|V| + |E|)$. I believe this because the worst case scenario would be the same, that being that every node is checked and every single one of the edges too. In any case where all nodes and edges aren't check, that means a cycle was found before that point, which is not the worst case complexity there. It could be argued too though, that the cycle was found while checking the last node, in which case all the nodes and edges are still checked anyway, which confirms the worst case complexity being $\Theta(|V| + |E|)$.
