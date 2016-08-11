import { Event } from './models/event.model';

const jem = {
  greet() {
    return 'hello';
  },
  test() {
    var e = Event.Create('testName', console.log, console.warn)
  }
};

export default jem;
