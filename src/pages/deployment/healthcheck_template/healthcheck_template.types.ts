
export interface ExecAction{
  command: string[]
}
export interface HTTPHeader{
  name: string
  value: string
}
export interface HTTPGetAction{
  path: string
  port: number
  host: string
  scheme: 'HTTP' | 'HTTPS'
  httpHeaders?: HTTPHeader[]
}

export interface TCPSocketAction{
  port: number
  host: string
}

export interface GRPCAction{
  port: number
  service: string
}

export interface Probe{
  type: 'http' | 'tcp' | 'command' | 'grpc'
  exec?: ExecAction
  httpGet?: HTTPGetAction
  tcpSocket?: TCPSocketAction
  grpc?: GRPCAction
  initialDelaySeconds: number   // 初始化时间
  timeoutSeconds: number        // 超时时间
  periodSeconds: number         // 检查周期
  successThreshold: number      // 成功阈值
  failureThreshold: number      // 失败阈值
  terminationGracePeriodSeconds: number  // 容器终止操作到强制停止容器前的等待时间
}

export interface TemplateData{
  id: number
  created_by: string
  created_at: string
  updated_by: string
  updated_at: string
  readiness_enabled: boolean
  liveness_enabled: boolean
  startup_enabled: boolean
  readiness_probe: Probe
  liveness_probe: Probe
  startup_probe: Probe
  description: string
}