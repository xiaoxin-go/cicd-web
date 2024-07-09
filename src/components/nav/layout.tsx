import {Menu} from './menu'
import {Outlet} from "react-router-dom";
import Alert from '../Alert'
import {AppBar, Toolbar, Typography, Box, Button, Card} from '@mui/material';

import * as React from "react";
import {useState} from "react";
import {MenuItem} from "./Nav.types";


const menus: MenuItem[] = [
  {
    key: "metadata", title: "Metadata", path: "",
    children: [
      {key: "node", path: "/metadata/node", title: "Node"},
      {key: "namespace", path: "/metadata/namespace", title: "Namespace"},
      {key: "deploy", path: "/metadata/deploy", title: "Deploy"},
      {key: "statefulset", path: "/metadata/statefulset", title: "StatefulSet"},
      {key: "pod", path: "/metadata/pod", title: "Pod"},
      {key: "service", path: "/metadata/service", title: "Service"},
      {key: "configmap", path: "/metadata/configmap", title: "ConfigMap"},
      {key: "secret", path: "/metadata/secret", title: "Secret"}]
  },
  {
    key: "deployment", title: "Deployment", path: "",
    children: [
      {key: "app", path: "/deployment/app", title: "App"},
      {key: "config_template", path: "/deployment/config_template", title: "ConfigTemplate"},
      {key: "resource_template", path: "/deployment/resource_template", title: "ResourceTemplate"},
      {key: "healthcheck_template", path: "/deployment/healthcheck_template", title: "HealthcheckTemplate"},
    ]
  },
]

export const Layout: React.FC = () => {
  const [subMenus, setSubMenus] = useState<MenuItem[]>([] as MenuItem[])

  return (
    <div className={"layout"}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            Devops
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {menus.map((item) => (
              <Button key={item.key} sx={{color: '#fff'}} onClick={()=>{setSubMenus(item.children as MenuItem[])}}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <div className={"layout-container"}>
        <div className={"layout-container-left"}>
          <Menu menus={subMenus}></Menu>
        </div>
        <div className={"layout-container-right"}>
          <Card sx={{padding: 2, margin: 2, flex: 1}}>
            <Outlet></Outlet>
          </Card>
        </div>
      </div>
      <Alert/>
    </div>
  )
}