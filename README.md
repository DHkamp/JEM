# JEM

## What is JEM?
<br/>
JEM stands for **J**avaScript **E**vent**M**anager. It's a small tool for handling custom events across multiple modules.

JEM provides minimal functionality helping you to keep  cleaner codebase with less dependencies.
<hr />

## How does it work?
<br/>
Every event has a unique identifier - it's name. You can subscribe endless functions to an event. If the event gets emitted
all subscribers will be called. 

<hr />

## Getting started

### Installation

```shell
    npm i jemjs --save-dev
```

```javascript
    import { JEM } from jemjs;
```

## Reference 
<br/>

### JEM.On(eventName, ...listener)
Subscribes one or multiple listeners to an event. 

```javascript
    JEM.On(
        'eventName', 
        () => { /* your code here */ }
    );
```

Mutliple listeners can subscribe to On too.

```javascript

    JEM.On(
        'eventName', 
        () => { /* _your code here */ }, 
        (x) => { /* Arguments can be provided by JEM.Emit. */ }
    );

```

### JEM.Once(eventName, ...listener)

Subscribes one or multiple listeners to an event. Listenery bound with Once will be dispatched after the first call.


```javascript
    JEM.Once(
        'incrementCount', 
        () => { /* your code here */ }
    );
```

Multiple listeners can subscribe to Once too.

```javascript

    JEM.Once(
        'increment', 
        () => { /* _your code here */ }, 
        (x) => { /* Arguments can be provided by JEM.Emit. */ }
    );

```


### JEM.Emit(eventName[, ...listenerArgs])

Calls all listeners subscribed to the specified event.

```javascript
    // Call all subscribers for the event "eventName"
    JEM.Emit('eventName');

    //Works with arguments too.
    JEM.Emit('eventName', 1337);

    //Even with a lot arguments
    JEM.Emit('eventName', 1, 2, 3, 4, 'a', 'b');

```

### JEM.Dispatch

Removes a listener or a complete event.

```javascript
    JEM.Dispatch('eventName'); // Removes the specified event. All listeners are gone.

    function increment(x) {
        return ++x;
    }

    JEM.Dispatch('eventName', increment); //Removes this listener.
```

### JEM.Clear
Removes all events (and all listeners).

```javascript
    JEM.Clear();
```

### JEM.Isolate
Creates a new isolated JEM-scope. By default theres only one global JEM-scope. 
Isolated scopes provided the same functionality like the global JEM-scope except 
the Isolate function is not present.

```javascript
    const isolatedJEM = JEM.Isolate();
```

