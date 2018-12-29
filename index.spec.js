const power = require('.');

const a = [1, 2, 3, 4];

describe('basic tests', () => {
  it('test 1', () => {
    const b = power([1, 2, 3, 4, 5], { filter: { none: [1, 4, 5] } });
    expect(b).toMatchSnapshot();
  });

  it('test 2', () => {
    const options = { limit: -1 };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 3', () => {
    const options = { limit: 0 };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 4', () => {
    const options = { limit: 1 };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 5', () => {
    const options = { limit: [0, 1] };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 6', () => {
    const options = { limit: 2 };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 7', () => {
    const options = { limit: [1, 5] };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 8', () => {
    const options = { limit: [-1, -2] };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 9', () => {
    const options = { limit: [a.length, -2] };
    const b = power(a, options);
    expect(b).toMatchSnapshot();
  });

  it('test 10', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const options = { sort: 'desc' };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });
  it('test 11', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const options = { key: 'id', empty: true };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });

  it('test 12', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }, { id___: 4 }];
    const options = { sort: 'desc', key: 'id' };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });

  it('test 13', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }, { id___: 4 }];
    const options = { sort: 'desc', key: 'id', keySafe: true };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });

  it('test 14', () => {
    const d = [1, 2, 3, 4, 5, 6];
    const options = { filter: 6 };
    const b = power(d, options);
    expect(b).toMatchSnapshot();
  });

  it('test 15', () => {
    const d = [1, 2, 3, 4, 5, 6];
    const options = { filter: [1, 2] };
    const b = power(d, options);
    expect(b).toMatchSnapshot();
  });

  it('test 16', () => {
    const d = [1, 2, 3, 4, 5, 6];
    const options = { filter: [1, 2, 5, 6] };
    const b = power(d, options);
    expect(b).toMatchSnapshot();
  });

  it('test 17', () => {
    const d = [1, 2, 3, 4, 5, 6];
    const options = { filter: { any: [1, 2] } };
    const b = power(d, options);
    expect(b).toMatchSnapshot();
  });

  it('test 18', () => {
    const d = [1, 2, 3, 4, 5, 6];
    const options = { filter: { none: [1, 2] } };
    const b = power(d, options);
    expect(b).toMatchSnapshot();
  });

  it('test 19', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const options = { filter: { any: [1, 2] }, filterKey: 'id' };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });

  it('test 20', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const options = { filter: { all: [1, 2] }, filterKey: 'id' };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });

  it('test 21', () => {
    const c = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const options = { filter: { none: [1, 2] }, filterKey: 'id' };
    const b = power(c, options);
    expect(b).toMatchSnapshot();
  });
});
