import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger), autoRehydrate(), window.devToolsExtension ? window.devToolsExtension() : f => f));
persistStore(store, {blacklist: ['partner', 'product', 'user', 'loanApp', 'userDetail']});

export default store;
