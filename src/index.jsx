import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';

import Preloading from './components/Preloading/Preloading'
import store from './redux/store'
import './index.scss'

const App = React.lazy(() => import('./components/App/App'))



// console.log(process.env.PUBLIC_URL)

ReactDOM.render(
        <Router basename={process.env.PUBLIC_URL}>
            <CookiesProvider>
                <Provider store={store}>
                    <Suspense fallback={<Preloading type="app" />}>
                        <App />
                    </Suspense>
                </Provider>
            </CookiesProvider>
        </Router>,
    document.getElementById('root')
);


reportWebVitals();
