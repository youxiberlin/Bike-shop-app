import { filter, includes } from 'ramda'

const byCategory = (categories) => {
  return categories.length ?
   item => includes(item.category, categories) :
   item => item;
};

const byPriceRange = (min, max) => {
  if (typeof min === 'string' || typeof max === 'string') {
    min = parseInt(min, 10);
    max = parseInt(max, 10);
  }
  if (min && max) return item => item.price >= min && item.price <= max;
  else if (min) return item => item.price >= min;
  else if (max) return item => item.price <= max;
  else return item => item;
};

const byPriceOrder = (sortPriceOrder) => {
  const orderHighest = (a,b) => b.price - a.price;
  const orderLowest = (a,b) => a.price - b.price;
  const fns = {
    high: orderHighest,
    low: orderLowest
  };

  return sortPriceOrder ? fns[sortPriceOrder] : () => {};
};

const applySizeFilter = sizes => items => {
  const bySize = size => item => {
    const availableSizes = Object.keys(item.size).filter(v => item.size[v]);
    return includes(size, availableSizes);
  }

  return sizes.length ?
    sizes.reduce((acc, curr) => {
        const res = filter(bySize(curr), items);
        return [...new Set([...acc, ...res])];
      }, []) :
    items;
}

module.exports = {
  byCategory,
  byPriceRange,
  byPriceOrder,
  applySizeFilter,
}
