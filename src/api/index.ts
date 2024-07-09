export const ApiUri = {
  prefix: "/api/v1",
  k8s: {
    pod: {
      list: "/k8s/pods"
    },
    node: {
      list: "/k8s/nodes"
    },
    namespace: {
      list: '/k8s/namespaces',
      get: "/k8s/namespace",
      create: '/k8s/namespace',
      update: '/k8s/namespace',
      delete: '/k8s/namespace'
    },
    deploy: {
      list: "/k8s/deploys"
    },
    statefulset: {
      list: "/k8s/statefulsets"
    },
    service: {
      list: "/k8s/services"
    },
    configmap: {
      list: "/k8s/configmaps"
    },
    secret: {
      list: "/k8s/secrets"
    },
  },
  deployment: {
    app: {
      list: '/deployment/apps',
      create: '/deployment/app',
      update: '/deployment/app',
      delete: '/deployment/app'
    },
    resourceTemplate: {
      list: '/deployment/resource_templates',
      create: '/deployment/resource_template',
      update: '/deployment/resource_template',
      delete: '/deployment/resource_template'
    },
    healthcheckTemplate: {
      list: '/deployment/healthcheck_templates',
      get: '/deployment/healthcheck_template',
      create: '/deployment/healthcheck_template',
      update: '/deployment/healthcheck_template',
      delete: '/deployment/healthcheck_template'
    },
  }
}