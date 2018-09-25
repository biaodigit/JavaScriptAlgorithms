class Edge {
    constructor(start, end, weight) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }

    other(x) {
        return x === this.v() ? this.w() : this.v()
    }

    v() {
        return this.start
    }

    w() {
        return this.end
    }

    wt() {
        return this.weight
    }
}