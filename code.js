function tsp_ls(distance_matrix) {

    let myRoute = [];
    for (i = 0; i < distance_matrix.length; i++)
        myRoute[i] = [i];

}


function swap(route, i, k) {

    // First and third part dont change
    let route1 = route.slice(0, i);
    let route2 = route.slice(i, k + 1);
    let route3 = route.slice(k + 1)

    // Flip the middle
    route2 = route2.reverse();

    // Obscure JS functions for the win!!!
    return [...route1, ...route2, ...route3];
}


function calculateDistance(route, distance_matrix) {
    let distance = 0;

    // Adds the first element to the end so the for loop can
    // act kinda circular
    route[route.length] = route[0];

    // Adds the distance between nodes on the path
    for (i = 0; i < route.length - 1; i++) {
        distance += distance_matrix[route[i]][route[i + 1]]
    }

    return distance;
}

myRoute = [3, 0, 4, 2, 1];

myMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

console.log(calculateDistance(myRoute, myMatrix));