const orderHighest = (a,b) => b.price - a.price;
const orderLowest = (a,b) => a.price - b.price;

module.exports = {
  orderHighest,
  orderLowest
}