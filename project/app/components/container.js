import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Container extends Component {
  @tracked box = [
    [0, 0, 0],
    [1, 0, 3],
    [0, 2, 0]
  ];
  
  @tracked n = 3;
  @ tracked flag=0; // 1 Means X turn else O turn

  get range() {
    return Array.from({ length: this.n }, (_, i) => i);
  }
}
