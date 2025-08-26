import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RosterService, RosterUserStats } from './roster.service';

@ApiTags('roster')
@Controller('roster')
export class RosterController {
  constructor(private readonly rosterService: RosterService) {}

  @ApiOperation({ summary: 'Get roster statistics for all users' })
  @ApiResponse({ status: 200, description: 'Return roster statistics.' })
  @Get()
  async getRosterStats(): Promise<{ roster: RosterUserStats[] }> {
    const roster = await this.rosterService.getRosterStats();
    return { roster };
  }
}