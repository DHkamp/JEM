import { EventManager } from './components/eventManager.component';

class Jem extends EventManager {
  constructor() {
    super();
  }
  Isolate() {
    return new EventManager();
  }
}

const JEM = new Jem();
export { JEM };