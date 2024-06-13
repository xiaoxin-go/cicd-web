import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import {Pod} from "pages/k8s/Pod"
import {Node} from "pages/k8s/Node"
import {Namespace} from "pages/k8s/Namespace"
import {Deploy} from "pages/k8s/Deploy"
import {Layout} from "components/nav/layout"
import {StatefulSet} from "pages/k8s/StatefulSet";
import { Service } from "pages/k8s/Service";
import {ConfigMap} from "pages/k8s/ConfigMap";
import {Secret} from "pages/k8s/Secret";
import Test from 'pages/Test'
import {lazy} from "react";

const Home = lazy(()=> import('pages/Home'))
const ResourceTemplate = lazy(()=> import('pages/deployment/resource_template/ResourceTemplate'))
const App = lazy(()=>import('pages/deployment/App'))

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home/>
  },
    {
      path: "/",
      element: <Layout/>,
      children: [
        {path: 'test', element: <Test/>},
        {path: 'metadata/', children: [
            {
              path: 'pod',
              element: <Pod/>,
            },
            {
              path: 'node',
              element: <Node/>,
            },
            {
              path: 'namespace',
              element: <Namespace/>,
            },
            {
              path: 'deploy',
              element: <Deploy/>,
            },
            {
              path: 'statefulset',
              element: <StatefulSet/>,
            },
            {
              path: 'service',
              element: <Service/>,
            },
            {
              path: 'configmap',
              element: <ConfigMap/>,
            },
            {
              path: 'secret',
              element: <Secret/>,
            },
          ]
        },
        {path: 'deployment/', children: [
            {path: 'resource_template', element: <ResourceTemplate/>},
            {path: 'app', element: <App/>},
          ]
        }
      ]
    },
    ]
);
export default router