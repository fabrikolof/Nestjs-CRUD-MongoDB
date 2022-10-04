import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.BDUSERNAME}:${process.env.BDPASSWORD}` +
        `@cluster0.vmx2tnb.mongodb.net/${process.env.BDNAME}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
