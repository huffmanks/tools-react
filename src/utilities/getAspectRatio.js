export const getAspectRatio = (...arr) => {
    const gcd = (x, y) => (!y ? x : getAspectRatio(y, x % y))
    return [...arr].reduce((a, b) => gcd(a, b))
}
