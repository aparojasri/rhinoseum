// apps/api/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('categories')
  async getCategories() {
    // Fetch only the 12 "Parent" categories to show on the homepage
    return this.prisma.category.findMany({
      where: { parentId: null },
      orderBy: { name: 'asc' },
    });
  }
}