// node js import syntax
const redux = require('redux');

// reducer function
// inputs --> old state + dispatched action
// output --> new state object
const countReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case 'increment':
			return {
				counter: state.counter + 1,
			};
		case 'decrement':
			return {
				counter: state.counter - 1,
			};
	}
	return state;
};

// create store
// counterReducer is passed to createStore because store needs to know what reducer is responsible for changing the state
const store = redux.createStore(countReducer);

// subscription
const counterSubscriber = () => {
	const newState = store.getState();
	console.log(newState);
};

// subscriber method expects a function
store.subscribe(counterSubscriber);

// create and dispatch an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
