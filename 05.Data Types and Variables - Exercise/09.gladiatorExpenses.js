function solve(lost, helmet, sword, shield, armor) {
    let lostFights = Number(lost);
    let helmetPrice = Number(helmet)
    let swordPrice = Number(sword);
    let shieldPrice = Number(shield);
    let armorPrice = Number(armor);

    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;
    let counterShield = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
        }
        if (i % 3 === 0) {
            trashedSword++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            trashedShield++;
            counterShield++;
            if (counterShield % 2 === 0) {
                trashedArmor++;
            }
        }
    }
    let totalSum = trashedHelmet * helmetPrice + trashedSword * swordPrice + trashedShield * shieldPrice + trashedArmor * armorPrice;
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`)
}