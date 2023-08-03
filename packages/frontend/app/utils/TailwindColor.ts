type OptionsType = {
    colors?: string[];
    range?: number[];
    prefix?: string;
  };
  
  class TailwindColor {
    colors: string[];
    range: { min: number; max: number };
    prefix: string;
    tempColors: string[];
  
    constructor(options?: OptionsType) {
      const {
        colors = [
          'gray',
          'red',
          'yellow',
          'green',
          'blue',
          'indigo',
          'purple',
          'pink',
        ],
        range = [1, 9],
        prefix = 'bg',
      } = options || {};
  
      this.colors = colors;
      this.range = {
        min: range[0],
        max: range[1],
      };
      this.prefix = prefix;
  
      this.tempColors = [];
    }
  
    pick(): string {
      const number = TailwindColor.random(this.range.min, this.range.max) * 100;
      const indexColor = TailwindColor.random(0, this.colors.length - 1);
      return `${this.prefix}-${this.colors[indexColor]}-${number}`;
    }
  
    color(colors: string[] | string = ''): TailwindColor {
      const isArray = Array.isArray(colors);
      if (!isArray) this.tempColors.push(colors as string);
      else (colors as string[]).forEach((color) => this.tempColors.push(color));
      return this;
    }
  
    add(): void {
      this.tempColors.forEach((color) => this.colors.push(color));
    }
  
    remove(): void {
      this.tempColors.forEach((color) => {
        const index = this.colors.indexOf(color);
        if (index >= 0) this.colors.splice(index, 1);
      });
    }
  
    static random(min = 1, max = 9): number {
      return Math.floor(Math.random() * max) + min;
    }
  }
  
  export default TailwindColor;
  