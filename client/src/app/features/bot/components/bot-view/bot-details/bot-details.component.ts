import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Bot } from '@bot/models/bot';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotDetailsComponent {
  @Input() bot: Bot;
  @Input() loading: boolean = false;
  @Output() botEdit = new EventEmitter<string>();
  @Output() botDelete = new EventEmitter<string>();

  get steamProfileUrl(): string {
    return `http://steamcommunity.com/profiles/${this.bot.steamId}`;
  }
}
