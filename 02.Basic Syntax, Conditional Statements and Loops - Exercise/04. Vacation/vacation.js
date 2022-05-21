function solve(num, type, day) {
    let price = 0;
    if (type === 'Students') {
        if (day === 'Friday') {
            price = 8.45;
        } else if (day === 'Saturday') {
            price = 9.80
        } else if (day === 'Sunday') {
            price = 10.46
        }
    } else if (type === 'Business') {
        if (day === 'Friday') {
            price = 10.90
        } else if (day === 'Saturday') {
            price = 15.60
        } else if (day === 'Sunday') {
            price = 16
        }
    } else if (type === 'Regular') {
        if (day === 'Friday') {
            price = 15
        } else if (day === 'Saturday') {
            price = 20
        } else if (day === 'Sunday') {
            price = 22.50
        }
    }
    let totalSum = price * num;
    if (type === 'Students' && num >= 30) {
        totalSum *= 0.85;
    }
    if (type === 'Business' && num >= 100) {
        totalSum = totalSum - price * 10;
    }
    if (type === "Regular" && (num >= 10 && num <= 20)) {
        totalSum *= 0.95;
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`)
}
