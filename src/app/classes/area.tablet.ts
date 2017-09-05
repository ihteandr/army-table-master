export class AreaTablet{
  size:any;
  position:any;
  target:any;
  depth:number;
  code:string;
  center:any;
  dashed: boolean;
  innerAreas:AreaTablet[];
  columns:number = 3;
  showCode:boolean;
  root:boolean;
  constructor({
    size,
    position,
    root,
    showCode = false,
    target,
    dashed,
    depth,
    code
  }){
    this.size = size;
    this.position = position;
    this.target = target;
    this.depth = depth;
    this.code = code;
    this.dashed = dashed;
    this.root = root;
    this.showCode = showCode;
    this.center = {
      top: this.position.top + this.size.height/2,
      left: this.position.left + this.size.width/2,
    };
    if(this.depth > 1){
      let cellSize = {
        width: this.size.width/this.columns,
        height: this.size.height/this.columns
      };
      let areaOptions = {
        size: cellSize,
        target: this.target,
        depth: this.depth - 1,
        root: false,
        showCode: this.root,
        dashed: this.depth === 2
      };
      this.innerAreas = [
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left,
            top: this.position.top
          },
          code: '1'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left + cellSize.width,
            top: this.position.top
          },
          code: '2'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left + 2*cellSize.width,
            top: this.position.top
          },
          code: '3'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left + 2*cellSize.width,
            top: this.position.top + cellSize.height
          },
          code: '4'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left + 2*cellSize.width,
            top: this.position.top + 2*cellSize.height
          },
          code: '5'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left + cellSize.width,
            top: this.position.top + 2*cellSize.height
          },
          code: '6'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left,
            top: this.position.top + 2*cellSize.height
          },
          code: '7'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left,
            top: this.position.top + cellSize.height
          },
          code: '8'
        }, areaOptions)),
        new AreaTablet(Object.assign({
          position: {
            left: this.position.left + cellSize.width,
            top: this.position.top + cellSize.height
          },
          code: '9'
        }, areaOptions))
      ];
    }
  }
}
