import { EventManager } from './components/eventManager.component';

const evtMgr = new EventManager();
const jem    = {
  Emit    : evtMgr.Emit,
  On      : evtMgr.On,
  Once    : evtMgr.Once,
  Dispatch: evtMgr.Dispatch,
  Clear   : evtMgr.Clear,
  Isolate() {
    return new EventManager();
  }
}

export default jem;
