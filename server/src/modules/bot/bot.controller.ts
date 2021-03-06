import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PermissionsAllowed } from '../access-control/decorators/permissions-allowed.decorator';
import { PermissionsEnum } from '../access-control/enums/permissions.enum';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { Bot } from './entity/bot.entity';

@Controller('bots')
@ApiTags('Bots')
@ApiBearerAuth()
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Get()
  @PermissionsAllowed(PermissionsEnum.BotGetAll)
  async getAllBots(): Promise<Bot[]> {
    return await this.botService.getAllBots();
  }

  @Get('of-user/:steamId')
  @PermissionsAllowed(PermissionsEnum.BotGetAllByUserAny, PermissionsEnum.BotGetAllByUserOwn)
  async getUserBots(@Param('steamId') steamId: string): Promise<Bot[]> {
    return await this.botService.getUserBots(steamId);
  }

  @Get(':steamId')
  @PermissionsAllowed(PermissionsEnum.BotGetAny, PermissionsEnum.BotGetOwn)
  async getBot(@Param('steamId') steamId: string): Promise<Bot> {
    return await this.botService.getBot(steamId);
  }

  @Post()
  @PermissionsAllowed(PermissionsEnum.BotCreateAny, PermissionsEnum.BotCreateOwn)
  async createBot(@Body() body: CreateBotDto): Promise<Bot> {
    return await this.botService.createBot(body);
  }

  @Patch(':steamId')
  @PermissionsAllowed(PermissionsEnum.BotUpdateAny, PermissionsEnum.BotUpdateOwn)
  async updateBot(@Param('steamId') steamId: string, @Body() body: UpdateBotDto): Promise<Bot> {
    return await this.botService.updateBot(steamId, body);
  }

  @Delete(':steamId')
  @PermissionsAllowed(PermissionsEnum.BotDeleteAny, PermissionsEnum.BotDeleteOwn)
  async deleteBot(@Param('steamId') steamId: string): Promise<void> {
    await this.botService.deleteBot(steamId);
  }
}
