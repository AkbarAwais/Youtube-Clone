import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Body from './components/Body';

function App() {
    const AppRouter = createBrowserRouter([
        {
            path: '/',
            element: <Body />
        }
    ])
    return <RouterProvider router={AppRouter} />;
}

export default App;
