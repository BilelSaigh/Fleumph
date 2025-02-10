// src/interface/driver.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { DriverService } from '../application/driver.service';
import { Driver } from '../domain/driver.entity';

@Controller('drivers')
export class DriverController {
    constructor(private driverService: DriverService) {}

    @Get()
    async getAllDrivers(): Promise<Driver[]> {
        return this.driverService.getAllDrivers();
    }

    @Get(':id')
    async getDriverById(@Param('id') id: string): Promise<Driver> {
        return this.driverService.getDriverById(id);
    }

    @Post()
    async createDriver(@Body() driver: Driver): Promise<Driver> {
        return this.driverService.createDriver(driver);
    }

    @Put(':id')
    async updateDriver(
        @Param('id') id: string,
        @Body() driver: Driver,
    ): Promise<Driver> {
        return this.driverService.updateDriver(id, driver);
    }

    @Delete(':id')
    async deleteDriver(@Param('id') id: string): Promise<void> {
        return this.driverService.deleteDriver(id);
    }
}
