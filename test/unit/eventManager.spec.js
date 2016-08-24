import { EventManager } from '../../src/components/eventManager.component';
let evtManager = null;

describe('EventManager', () => {
    before(function() {
        evtManager = new EventManager();
    });

    it('should trigger a listener on a specified event', function() {
        let count = 0;

        evtManager.On('testevent', function() { count = 1; });
        evtManager.Emit('testevent');

        expect(count).to.equal(1);
    });

    it('should trigger a listener once on a specified event', function() {
        let count = 0;

        evtManager.Once('testevent_once', function() { count = 1; });
        evtManager.Emit('testevent_once');
        evtManager.Emit('testevent_once');

        expect(count).to.equal(1);
    });

    it('should trigger multiple listeners', function() {
        let count = 0;

        evtManager.On('testevent_multiple', () => { count = 1; });
        evtManager.On('testevent_multiple', () => { count += 2; });
        evtManager.On('testevent_multiple', () => { count++; });
        evtManager.Emit('testevent_multiple');

        expect(count).to.equal(4);
    });

    it('should trigger multiple listeners once', function() {
        let count = 0;

        evtManager.Once('testevent_multiple_once', () => { count = 1; });
        evtManager.Once('testevent_multiple_once', () => { count += 2; });
        evtManager.Once('testevent_multiple_once', () => { count++; });
        evtManager.Emit('testevent_multiple_once');
        evtManager.Emit('testevent_multiple_once');

        expect(count).to.equal(4);
    });

    it('should trigger listeners with arguments', function() {
        let count = 0;

        evtManager.On('testevent_arguments', (args) => { count = args; })
        evtManager.Emit('testevent_arguments', 8);

        expect(count).to.equal(8);
    });

    it('should trigger listeners with arguments once', function() {
        let count = 0;

        evtManager.Once('testevent_arguments_once', (args) => { count = args; })
        evtManager.Emit('testevent_arguments_once', 8);
        evtManager.Emit('testevent_arguments_once', 8);

        expect(count).to.equal(8);
    });

    it('should remove a listener', function() {
        let count = 0;

        function add() {
            count += 1;
        }

        function addTwo() {
            count += 2;
        }

        evtManager.On('testevent_dispatch', add);
        evtManager.On('testevent_dispatch', addTwo);
        evtManager.Emit('testevent_dispatch');
        evtManager.Dispatch('testevent_dispatch', add);
        evtManager.Emit('testevent_dispatch');

        expect(count).to.equal(5);
    });

    it('should remove all listeners for a specified event', function() {
        let count = 0;

        function add() {
            count += 1;
        }

        function addTwo() {
            count += 2;
        }

        evtManager.On('testevent_dispatch_multi', add);
        evtManager.On('testevent_dispatch_multi', addTwo);
        evtManager.Emit('testevent_dispatch_multi');
        evtManager.Dispatch('testevent_dispatch_multi');
        evtManager.Emit('testevent_dispatch_multi');

        expect(count).to.equal(3);
    });

    it('should remove all listeners', function() {
        let count = 0;

        function add() {
            count += 1;
        }

        function addTwo() {
            count += 2;
        }

        evtManager.On('testevent_dispatch_all', add);
        evtManager.On('testevent_dispatch_all_two', addTwo);
        evtManager.Emit('testevent_dispatch_all');
        evtManager.Emit('testevent_dispatch_all_two');
        evtManager.Clear();
        evtManager.Emit('testevent_dispatch_all');
        evtManager.Emit('testevent_dispatch_all_two');

        expect(count).to.equal(3);
    });

    after(function() {
        
    });
});