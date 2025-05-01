# Traveling Salesperson Problem -- Local Search

This exercise is about the Traveling Salesperson Problem I mentioned in the
lecture on NP-hard problems -- given a set of cities, determine the length of
the shortest tour that visits all of them. We can get from any city to any other
city, i.e. the graph of cities is completely connected. We consider the version
of the Traveling Salesperson Problem that finds the shortest tour to visit $n$
cities, starting at a city and ending at the $n$ th city; it *does not* go
back to the start. The start city may be any of the cities. Remember that the
graph for a TSP is undirected, i.e. the cost is the same in either direction.

The 2-opt algorithm for solving the Traveling Salesperson Problem is a
randomized local search algorithm that, at each iteration, reverses part of the
route. It starts with a random route (this is the randomized part), and changes
part of the route in each step (this is the local search part, sprinkled with
more randomness). The pseudocode for one iteration is as follows:

```javascript
2optSwap(route, i, k)
  cities 1 to i-1 stay in the order they are
  cities i to k are reversed
  cities k + 1 to n stay in the order they are
```

For example, if I call the above function with route A--B--C--D--E--F, $i=2$,
$k=4$, the resulting route is A--B--E--D--C--F.

The algorithm starts with a random route; if the new route at the end of an
iteration decreases the total length, it is retained as the current incumbent.
The incumbent after the final iteration is returned as the solution.

Implement the 2-opt algorithm, which repeatedly runs the above steps. Your
implementation needs to fix two design parameters that I have left open. First,
you need to design a stopping criterion -- when would it make sense to stop and
return the shortest route found so far rather than trying another iteration?
Second, design a way to choose $i$ and $k$ -- note that they need to be
different in subsequent iterations, as one iteration would simply undo what
the previous one did otherwise. Start with the template I provided in `code.js`.
Describe in your code how you designed your stopping criterion and ways of
choosing $i$ and $k$ and why.

The function takes a distance matrix (the adjacency matrix for the graph where
the values in the cells are the distances between the corresponding cities) and
returns the length of the shortest tour (not the tour itself).

Test your new function; I've provided some basic testing code in `code.test.js`.

## Runtime Analysis

What is the worst-case asymptotic time complexity of your implementation? What
is the worst-case asymptotic memory complexity? Add your answer, including your
reasoning, to this markdown file.

## Answers

My implementation of TSP-Local-Search runs in $\Theta(|V|^2)$ time. First it generates the initial route which is a single for loop putting elemnts into an array which takes $|V|$ time. My next step uses my calculateDistance function which runs in $|V|$ time as ot's only a single for loop. Next we are put in a while loop that runs $2 \cdot |V|$ times or asymptotically $|V|$ times. Inside the whle loop I run the swap function which takes $|V|$ time to reverse the middle area. Immediatly afterwards calcualteDistance is called again and that runs in $|V|$. We then increment the while loop which is a constant time. Altogether this is a time of $|V| + |V| + |V| \cdot (|V| + |V|) \in \Theta(|V|^2)$

My implementation of TSP-Local-Search runs in $\Theta(|V|)$ memory. First it generates the current route which takes $|V|$. My calcualte distance function only increases space my a constant amount. Inside the while loop we need constant amount of space for my random numbers. My swap function uses $|V|$ extra space as it splits into approcamatly $\frac{|V|}{3}$ chunks but there are 3 of them. This means that my memory uses a total of $|V| + |V| \in \Theta(|V|)$ space.

## Sources

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.