function solve(meal_cost, tip_percent, tax_percent) {
    tip_percent = (meal_cost / 100) * tip_percent;
    tax_percent = (tax_percent / 100) * meal_cost;
    var total_cost = meal_cost + tip_percent + tax_percent;
    console.log(Math.round(total_cost))

}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
