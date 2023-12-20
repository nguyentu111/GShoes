export function formatMoney(amount) {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
        throw new Error('Invalid numeric value');
    }
    const roundedAmount = numericAmount.toFixed(2);
    return roundedAmount.toString();
}
export function getUserId() {
    let rs = localStorage.getItem('userId');
    if(rs ) return rs;

    rs  = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        r = v.toString(16);
            return r;
    });
    console.log({rs});
     localStorage.setItem('userId',rs);
     return rs;

}