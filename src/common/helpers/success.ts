import type { Request, Response, NextFunction } from "express";

class SuccessResponse {
  message: string;
  status: number;
  resData: any;

  constructor(message: string, status: number, resData: any) {
    this.message = message;
    this.status = status;
    this.resData = resData;
  }

  send(res: Response) {
    return res.status(this.status).json({
      message: this.message,
      data: this.resData,
    });
  }
}

class OKResponse extends SuccessResponse {
  constructor(message: string, resData: any) {
    super(message, 200, resData);
  }
}

class CreatedResponse extends SuccessResponse {
  constructor(message: string, resData: any) {
    super(message, 201, resData);
  }
}

export { OKResponse, CreatedResponse };
