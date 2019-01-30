import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger
)

/*
[ Important ]

The middleware is called in the order it is listed in this function.
The thunk action creators we're using to load initial date, save tweets,
and toggle tweets are functions.
So if they go to the logger middleware before going to the thunk middleware
(which takes the functions and executes them,
thereby obtaining actions to pass to the reducers),
we're going to be logging function, not the actual actions.


Each thing returned by an action creator - be it an action or a function
- will go through our thunk middleware. This is the source code for the thunk middleware:


function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;


If the thunk middleware sees an action, that action will be sent to the next middleware
in line - the logger middleware. If it sees a function,
the thunk middleware will call that function.
That function can contain side effects - such as API calls - and dispatch actions,
simple Javascript objects.
These dispatched actions will again go to all of the middleware.
The thunk middleware will see that it’s a simple action and pass the action
on to the next middleware, the logger.
*/
