class Queue {
    constructor(data) {
        this._data = data;
    }
    add(record) {
        this._data.unshift(record);
    }
    remove() {
        return this._data.pop();
    }
}
//# sourceMappingURL=queue.js.map