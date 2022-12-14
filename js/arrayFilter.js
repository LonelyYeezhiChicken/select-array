class ArrayFilter {
  constructor(array) {
    this._array = JSON.parse(JSON.stringify(array));
  }

  /** 移除指定Id
   *
   * @param {string} id
   * @returns 移除後的 array
   */
  remove(id) {
    this._array = this._array.filter((v) => v != id);
    return this._array;
  }

  /** 新增要加入的id
   *
   * @param {string} id
   * @returns 新增後的 array
   */
  add(id) {
    this._array.push(id);
    return this._array;
  }
}
