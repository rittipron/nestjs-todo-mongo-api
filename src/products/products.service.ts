import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productsModule: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.productsModule(createProductDto);
    return result.save();
  }

  async findAll(): Promise<Product[]> {
    const result = this.productsModule.find().exec();
    return result;
  }

  async findOne(id: string): Promise<Product | null> {
    const result = this.productsModule.findById(id).exec();
    return result;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    const result = this.productsModule
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
    return result;
  }

  async remove(id: string): Promise<Product | null> {
    try {
      const result = await this.productsModule.findByIdAndDelete(id).exec();
      if (!result) throw new NotFoundException('id not found');
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Delete failed:', error.message);
      } else {
        console.error('Delete failed with unknown error');
      }
      throw new InternalServerErrorException('Failed to delete product');
    }
  }
}
