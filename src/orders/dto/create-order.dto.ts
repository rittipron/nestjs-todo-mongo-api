import { IsMongoId, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsMongoId()
  readonly productId: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1)
  readonly quantity: number = 1;
}
