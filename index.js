function power(array, options = {}) {
  let sort = options.sort || false;
  const { limit } = options;
  let { filter } = options;
  let sourceArray = array;

  if (options.key) {
    sourceArray = [];
    for (let i = 0; i < array.length; i += 1) {
      if (power.checkKey(array[i], options)) {
        sourceArray.push(array[i][options.key]);
      }
    }
  }

  const total = sourceArray.length;
  const all = [];
  power.rec([], sourceArray, all);
  if (options.empty === true) all.push([]);

  if (sort === undefined && limit === undefined) return all;

  if (sort === true) sort = 'desc';
  let arranged = [];
  let limitInternal;

  if (typeof limit === 'undefined') limitInternal = [0, total];
  if (typeof limit === 'number') limitInternal = [limit, limit];

  if (typeof limit === 'object') {
    if (limit.length === 0) limitInternal = [0, total];
    else if (limit.length === 1) limitInternal = [limit[0], limit[0]];
    else if (limit.length === 2) limitInternal = [limit[0], limit[1]];
    else limitInternal = limit.slice(0, 2);
  }

  if (limitInternal[0] < 0) limitInternal[0] = total + limitInternal[0];
  if (limitInternal[1] < 0) limitInternal[1] = total + limitInternal[1];

  limitInternal = limitInternal.sort((a, b) => a - b);

  if (sort === 'desc') {
    for (let i = limitInternal[1], j; i >= limitInternal[0]; i -= 1) {
      for (j = 0; j < all.length; j += 1) {
        if (all[j].length === i) arranged.push(all[j]);
      }
    }
  } else if (sort === 'asc') {
    for (let i = limitInternal[0], j; i <= limitInternal[1]; i += 1) {
      for (j = 0; j < all.length; j += 1) {
        if (all[j].length === i) arranged.push(all[j]);
      }
    }
  } else if (!sort) {
    for (let i = 0; i < all.length; i += 1) {
      if (
        all[i].length >= limitInternal[0] &&
        all[i].length <= limitInternal[1]
      ) {
        arranged.push(all[i]);
      }
    }
  }

  if (filter) {
    let policy = 'any';
    if (typeof filter === 'object') {
      if (!Array.isArray(filter)) {
        Object.keys(filter).forEach(key => {
          policy = key;
        });
        filter = filter[policy];
      }
    }

    if (!Array.isArray(filter)) filter = [filter];

    const filtered = [];

    for (let i = 0, f; i < arranged.length; i += 1) {
      f = arranged[i].filter(a => {
        if (options.filterKey) {
          if (!power.checkKey(a, options.filterKey, options.keySafe))
            return false;
          // eslint-disable-next-line
          a = a[options.filterKey];
        }
        return filter.includes(a);
      });

      if (
        (policy === 'all' && f.length === filter.length) ||
        (policy === 'any' && f.length > 0) ||
        (policy === 'none' && f.length === 0)
      )
        filtered.push(arranged[i]);
    }

    arranged = filtered;
  }

  return arranged;
}

power.checkKey = (element, key, keySafe) =>
  typeof element === 'object' &&
  // eslint-disable-next-line
  (keySafe !== true || element.hasOwnProperty(key));

power.rec = (active, rest, results) => {
  if (rest.length > 0) {
    power.rec(active.concat(rest[0]), rest.slice(1), results);
    power.rec(active, rest.slice(1), results);
    return;
  }

  if (active.length > 0) results.push(active);
};

module.exports = power;
