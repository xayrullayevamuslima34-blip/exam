import { ArgumentsHost, ExceptionFilter, Catch } from '@nestjs/common';
import {Request, Response} from 'express'

@Catch()
export class GlobalFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void{
      const req = host.switchToHttp().getRequest<Request>();
      const res = host.switchToHttp().getResponse<Response>();

      console.log({
        message: exception.message,
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString(),
        path: req.path,
        statusCode: exception.status,
      });
      res.status(exception.status).json({statusCode: exception.status, message: exception.message});
  }

}



