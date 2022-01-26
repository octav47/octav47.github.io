import api from "./Api";

class Service {
  constructor() {
    this.status = {
      direction: null
    };
  }

  async open() {
    const response = await api.get("/cw");

    this.status = response;

    return response;
  }

  async close() {
    const response = await api.get("/ccw");

    this.status = response;

    return response;
  }

  async stop() {
    const response = await api.get("/stop");

    this.status = response;

    return response;
  }

  getStatus() {
    return this.status;
  }
}

const service = new Service();

export default service;
