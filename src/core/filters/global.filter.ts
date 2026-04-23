import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class GlobalFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const req = host.switchToHttp().getRequest<Request>();
    const res = host.switchToHttp().getResponse<Response>();

    console.log({
      url: req.url,
      body: req.body,
      headers: req.headers,
      error: exception.message
    });

    // Status kodni aniqlash - DEFAULT 500
    let status = HttpStatus.INTERNAL_SERVER_ERROR; // 500
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    } else if (exception.status || exception.statusCode) {
      status = exception.status || exception.statusCode;
      message = exception.message;
    }

    res.status(status).json({
      message: message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url
    });
  }
}