import { JEM } from '../../src/jem';

describe('jem', () => {
    it('should create an isolated eventmanager scope', function() {
        let count = 0;

        let isolated_evtMgr = JEM.Isolate();
        JEM.On('event', () => { count += 1 });
        isolated_evtMgr.On('isolated_event', () => { count += 2 });

        isolated_evtMgr.Emit('isolated_event');
        
        expect(count).to.equal(2);
    });
});

