function tsp_ls(distance_matrix) {
    return -1;
}


function swap(route, i, k) {

    let route1 = route.slice(0, i);
    let route2 = route.slice(i, k + 1);
    let route3 = route.slice(k + 1)

    route2 = route2.reverse();

    return [...route1, ...route2, ...route3];
}


myRoute = ["A", "B", "C", "D", "E", "F"];


console.log(swap(myRoute, 2, 4));