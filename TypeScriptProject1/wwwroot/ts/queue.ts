class Queue {

    _data: number[];

    constructor(data: number[]) {

        this._data = data;

    }

    add(record) {

        this._data.unshift(record);

    }

    remove() {
        return this._data.pop();
    }
}