class Event {
    constructor(eventName, ...fn) {
        this.eventName = eventName;
        this.fn        = fn;
    }
    static Create(eventName, fn) {
        return new Event(eventName, fn);
    }
}

export { Event };