import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LibraryModule} from "./features/library/library.module";
import { typeOrmConfig } from "./config/typeorm.config";
import {NewsModule} from "./features/news/news.module";
import {CourseModule} from "./features/courses/course.module";
import {CommonModule} from "./features/common/common.module";
import {AuthorizationModule} from "./features/authorization/authorization.module";
import {ReportModule} from "./features/report/report.module";
import {ChessModule} from "./features/chess/chess.module";


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
      AuthorizationModule,
      ChessModule,
      CommonModule,
      CourseModule,
      LibraryModule,
      NewsModule,
      ReportModule,
  ],
})
export class AppModule {}


