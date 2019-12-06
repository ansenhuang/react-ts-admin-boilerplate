import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import mainRoutes from './routes';
import Loading from './components/Loading';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {mainRoutes.map(route => {
          const { layout: Layout, routes, ...props } = route;
          if (routes && routes.length > 0) {
            const routeChildren = (
              <Suspense fallback={<Loading size="large" />}>
                <Switch>
                  {routes.map((route, index) => {
                    const key = !Array.isArray(route.path)
                      ? route.path || index
                      : route.path.join(',');
                    const SwitchItem = !(route as any).to ? Route : Redirect;
                    return <SwitchItem key={key} {...route} exact />;
                  })}
                </Switch>
              </Suspense>
            );
            props.render = props =>
              Layout ? (
                <Layout {...props}>{routeChildren}</Layout>
              ) : (
                routeChildren
              );
          }
          return <Route key={route.path} {...props} />;
        })}
      </Switch>
    </Router>
  );
};

export default App;
