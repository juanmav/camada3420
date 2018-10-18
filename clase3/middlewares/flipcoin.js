
function flipCoin(req, res, next){
    let coint = flip();

    if (coint === 'heads'){
        next();
    } else {
        res.status(401).json({ message: 'no podes pasar!'});
    }

}

function flip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

module.exports = flipCoin; // checkAuth.