import { EventManager } from './components/eventManager.component';

class Jem extends EventManager {
  constructor() {
    super();
  }
  Isolate() {
    return new EventManager();
  }
}

export default new Jem();
