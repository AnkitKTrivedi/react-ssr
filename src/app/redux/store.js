import { createStore } from "redux";
import rootReducer from "./reducers";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
const history = createBrowserHistory();

const store = createStore(connectRouter(history)(rootReducer));

export default { store, history };
