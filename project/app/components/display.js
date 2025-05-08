import Component from '@glimmer/component';

export default class Display extends Component {
  get value() {
    const { box, row, col,flag } = this.args; 
    console.log('flag',flag);
    return box[row][col];

  }
}
