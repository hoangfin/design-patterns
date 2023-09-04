class Observable {

    constructor (subject) {
        this.subject = subject;
        this.observers = [];
    }

    subscribe(cb) {
        this.observers.push(cb);
    }

    update(fn) {
        this.subject = fn(this.subject);
        this.notify();
    }

    notify() {
        this.observers.forEach(observer => observer(this.subject));
    }
}

const record = {
    uuid: crypto.randomUUID(),
    title: "UFO 1982 Research",
    created: Date.now()
};

const obsRecord = new Observable(record);
obsRecord.subscribe(record => console.log(record));
obsRecord.update(record => {
    record.title = "UFO 1982 Research - CANCELLED";
    return record;
});
