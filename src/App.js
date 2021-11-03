import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import ExampleChart2 from 'pages/ExampleChart2';
import ExampleChart1 from 'pages/ExampleChart1';
import ExampleChart3 from 'pages/ExampleChart3';
import ExampleChart4 from 'pages/ExampleChart4';
import ExampleChart5 from 'pages/ExampleChart5';
import ExampleChart6 from 'pages/ExampleChart6';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/example1" component={ExampleChart1} />
                    <Route exact path="/example2" component={ExampleChart2} />
                    <Route exact path="/example3" component={ExampleChart3} />
                    <Route exact path="/example4" component={ExampleChart4} />
                    <Route exact path="/example5" component={ExampleChart5} />
                    <Route exact path="/example6" component={ExampleChart6} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </>
    );
}

export default App;
