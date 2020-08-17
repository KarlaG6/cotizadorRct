export function getDifYear(year){
    return new Date().getFullYear() - year;
}

export function calcMarca(marca){
    let increment;
    
    switch( marca){
        case 'americano':
            increment = 1.30;
            break;
        case 'europeo':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

export function getPlan(plan){
    return ( plan === 'basico') ? 1.20 : 1.50;
}