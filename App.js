//import App from './src/index.js';

if (__DEV__) {
    GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

import App from './src/';
export default App;

