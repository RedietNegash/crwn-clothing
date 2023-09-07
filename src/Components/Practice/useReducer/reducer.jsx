//Reducer-> reduce the state complexity
// instead of telling react what to do as we used to in usestate
// we tell react what the user just did.
// by dispatching “actions” from your event handlers. (The state update logic will live elsewhere!)
//The object you pass to dispatch is called an “action”:

//A reducer function is where you will put your state logic. 
//It takes two arguments, the current state and the action object, and it returns the next state:

//function yourReducer(state, action) {
  // return next state for React to set
//}

/*Declare the current state (tasks) as the first argument.
Declare the action object as the second argument.
Return the next state from the reducer (which React will set the state to).
*/
