# JEM

## What is JEM?
JEM stands for **J**avaScript **E**vent**M**anager. It's a small tool for handling custom events across multiple modules.

JEM provides minimal functionality helping you to keep  cleaner codebase with less dependencies.

## How does it work?
Every event has a unique identifier - it's name. You can subscribe endless functions to an event. If the event gets emitted
all subscribers will be called. 

## Reference

### JEM.On(eventName, [args])

The On function subscribes a listener to an event. If the event already exists, the listener will be added to the array of functions
that will be called if the event gets emitted.

```javascript
    let count = 0;
    JEM.On('incrementCount', () => { count++; })
    JEM.Emit('incrementCount');
    console.log(count) // count = 1;
```

### JEM:Once

### JEM.Emit 

### JEM.Dispatch

### JEM.Clear

### JEM.Isolate

