class EventManager {
    constructor() {
        this._events = {};
    }
    /**
     * Calls all functions bound to the specified event.
     * @param  {string} eventName - Unique identifier for the event to be called.
     * @param  {Function[]} ...args - Array of functions to be triggered.
     */
    Emit(eventName, ...args) {
        const events = this._events[eventName];
        if(events){
            events.forEach(e => e(args));
        }
    }
    /**
     * Bounds provided functions to an event and triggers those on call.
     * @param  {string} eventName - Unique identifier for an event.
     * @param  {Function[]} ...args - Array of functions to be triggered.
     */
    On(eventName, ...fn) {
        const evts   = [];
        const events = this._events[eventName];

        fn.forEach(f => evts.push(f));

        this._events[eventName] = events ? events.concat(evts) : evts; 
    }
    /**
     * Bounds provided functions to an event and triggers those on call. They'll be removed after the first call.
     * @param  {string} eventName - Unique identifier for an event.
     * @param  {Function[]} ...fn - Array of functions to be triggered.
     */
    Once(eventName, ...fn) {
        const evts   = [];
        const events = this._events[eventName];
        fn.forEach(f => {
            evts.push((args) => {
                f(args);
                this.Dispatch(eventName, f);
            })
        });
        this._events[eventName] = events ? events.concat(evts) : evts; 
    }
    /**
     * Removes provied listener from the given event.
     * @param  {string} eventName - Unique identifier for an event.
     * @param  {Function[]} ...fn - functions to remove.
     */
    Dispatch(eventName, ...fn) {
        const events = this._events[eventName];
        if(events) {
            if(fn.length > 0) {
                fn.forEach((f, i) => {
                    if (events.indexOf(f) > -1) {
                        events.splice(i, 1);
                    }
                });
                this._events[eventName] = events;
            } else {
                delete this._events[eventName];
            }
        }
    }
    /**
     * Removes all listeners.
     */
    Clear() {
        this._events = {};
    }
}

export { EventManager };