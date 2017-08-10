module.exports = fsm = (bin) => {
    const ctrl = {
        'A0':'A',
        'A1':'B',
        'B0':'C',
        'B1':'A',
        'C0':'B',
        'C1':'C'
    };

    let state = bin.split('').reduce((a, c) => ctrl[a+c]?ctrl[a+c]:'', 'A');
    return state === 'A';
}