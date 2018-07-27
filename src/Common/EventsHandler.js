import Globals from "./Globals";
import Events from 'events';

Events.defaultMaxListeners = 32;

const events = new Events();

/**
 * Events handler
 */
class EventsHandler {

    /**
     * Subscribe events
     * @param evtName
     * @param listener
     */
    static subscribe(evtName , listener){
        events.addListener(evtName , listener);
    }

    /**
     * Unsubscribe event
     * @param evtName
     * @param listener
     */
    static unsubscribe(evtName , listener){
        events.removeListener(evtName,listener);
    }

    /**
     * Removes all listeners for event
     * @param evtName
     */
    static clearEvent(evtName){
        events.removeAllListeners(evtName);
    }

}

export default  EventsHandler;