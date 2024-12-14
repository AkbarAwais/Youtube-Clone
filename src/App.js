import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Body from './components/Body';
import MainWatchPage from './components/Watch/MainWatchPage';


function App() {
    const AppRouter = createBrowserRouter([
        {
            path: '/',
            element: <Body />
        },
        {
            path: '/watch',
            element: <MainWatchPage />
        }
    ])
    return <RouterProvider router={AppRouter} />;
}

export default App;
