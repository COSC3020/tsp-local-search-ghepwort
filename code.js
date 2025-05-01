function tsp_ls(distance_matrix) {

    n = distance_matrix.length;

    if (n == 1) return 0;


    let currentRoute = [];
    for (i = 0; i < n; i++)
        currentRoute[i] = i;

    currentDistance = calculateDistance(currentRoute, 0, 0);
    possibleDistance = 0;


    termValue = 0;
    possibleRoute = [];
    while (termValue < n * 2) {

        // Pick two random numbers
        a = Math.floor(Math.random() * n);
        b = Math.floor(Math.random() * n);

        // Ensures the smaller is the first input
        if (a < b) {
            possibleRoute = swap(currentRoute, a, b);
            possibleDistance = calculateDistance(currentRoute, distance_matrix);
            if (possibleDistance > currentDistance) {
                termValue = 0;
                currentRoute = possibleRoute;
                currentDistance = possibleDistance;
            }
            else {
                termValue++;
            }
        }

        else if (a > b) {
            possibleRoute = swap(currentRoute, b, a);
            possibleDistance = calculateDistance(currentRoute, distance_matrix);
            if (possibleDistance > currentDistance) {
                termValue = 0;
                currentRoute = possibleRoute;
                currentDistance = possibleDistance;
            }
            else {
                termValue++;
            }
        }
    }

    return currentDistance;
}





function swap(route, i, k) {

    // First and third part dont change
    let route1 = route.slice(0, i);
    let route2 = route.slic
    // Flip the middle
    route2 = route2.reverse();
    e(i, k + 1);
    let route3 = route.slice(k + 1)

    // Obscure JS functions for the win!!!
    return [...route1, ...route2, ...route3];
}

// I am VERY proud of this function, it works very well
function calculateDistance(route, distance_matrix) {
    let distance = 0;

    // Adds the first element to the end so the for loop can
    // act kinda circular
    route[route.length] = route[0];

    // Adds the distance between nodes on the path
    for (i = 0; i < distance_matrix.length; i++) {
        distance += distance_matrix[route[i]][route[i + 1]]
    }

    return distance;
}



