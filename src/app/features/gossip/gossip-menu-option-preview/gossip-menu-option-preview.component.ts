import { Component, Input } from '@angular/core';

import { GossipMenuOption } from '@keira-types/gossip-menu-option.type';
import { OPTION_IMG } from '@keira-constants/options/gossip-option-icon';

@Component({
  selector: 'keira-gossip-menu-option-preview',
  templateUrl: './gossip-menu-option-preview.component.html',
  styleUrls: ['./gossip-menu-option-preview.component.scss']
})
export class GossipMenuOptionPreviewComponent {
  @Input() options: GossipMenuOption[];
  @Input() show = true;

  public readonly OPTION_IMG = OPTION_IMG;
}
