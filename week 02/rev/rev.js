
class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.table[index]) this.table[index] = [];

        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this._hash(key);
        if (this.table[index]) {
            let newSet = [];
            for (let pair of this.table[index]) {
                if (pair[0] !== key) {

                    newSet.push(pair)
                }
            }
            this.table[index] = newSet.length ? newSet : undefined;
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }


}

let myhash = new HashTable(10);
myhash.set("name", "akhil")
myhash.set("age", 21)
myhash.remove("name");

console.log(myhash.get("name"))
console.log(myhash.get("age"))

myhash.display()




//simple Hash Table

class hashTable {
    constructor(size = 10) {
        this.table = new Array(size)
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length
    }
    set(key, value) {
        let index = this._hash(key)
        if (!this.table[index]) this.table[index] = [];
        let bucket = this.table[index];

        for (let pair of bucket) {

            if (pair && pair[0] === key) {

                return pair[1] = value;
            }
        }

        bucket.push([key, value])

    }

    get(key) {
        let index = this._hash(key)

        let bucket = this.table[index];
        if (!bucket) return undefined

        for (let pair of bucket) {
            if (pair[0] === key)
                return pair[1];
        }

        return "Not Found"
    }

    remove(key) {
        let index = this._hash(key)
        let bucket = this.table[index];

        if (!bucket) return undefined;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1)
            }
        }
        return undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) console.log(i, this.table[i])
        }
    }

}

const hash = new hashTable(10);
hash.set("one", 1)
hash.set("two", 2)
hash.set("three", 3)

hash.remove("three")


hash.display()

hash.set("three", 3)

hash.display()



