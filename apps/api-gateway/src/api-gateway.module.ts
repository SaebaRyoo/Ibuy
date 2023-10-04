import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule } from '@nestjs/microservices';
import { ORDER_SERVICE_NAME } from '../../../protos/pbs/protos/order.pb';
import { orderClient } from '../../../protos/order.client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE_NAME,
        ...orderClient,
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}