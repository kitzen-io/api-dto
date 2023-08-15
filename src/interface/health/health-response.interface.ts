export default interface IHealthResponse {
  postgres: string;
  internet: string;
  redis: string;
  version: string;
  uptime: number;
  serviceName: string;
}
