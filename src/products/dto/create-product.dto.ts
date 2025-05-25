import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly description?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  readonly price: number;
}
