class EventManager {
    constructor() {
        this.events = {};
    }
    Emit(eventName, ...args) {
        var events = this.events[eventName];
        if(events){
            events.forEach(e => e(args));
        }
    }
    On(eventName, ...fn) {
        if(this.events[eventName]) {
            this.eventName[eventName] = [];
            fn.forEach(f => this.eventName[eventName].push);
        } else{
            this.events[eventName] = fn;
        }
    }
    Dispatch(toDispatch) {
        if(typeof toDispatch === 'string') {
            delete this.events[toDispatch];
        } else if (todispatch instanceof Function) {
            for (const event in this.events) {
                let fn = event.filter(f => f === toDispatch);
            }
        }
    }
    Clear() {
        this.events = {};
    }
}