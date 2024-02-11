/**
 * 板たおしゲーム
 * 奥から順に板を倒していき、板ごとに割り当てられる点数を加算していき最大の点数を求める
 * 1 < H, W <= 1000
 * 各板の点数は0 <= point <= 10
 * 
 * H: 縦の長さ
 * W: 横の長さ
 * として、H行W列の盤面が与えられる
 */
export class A051 {
  private height: number;
  private width: number;
  private board: number[];

  private constructor(args: {height: number, width: number}) {
    this.height = args.height;
    this.width = args.width;
    this.board = [];
  }

  public static create = (args: {height: number, width: number}) => new A051(args);

  public addLine = (line: number[]) => {
    if (this.board.length === 0) {
      this.board = line;
      return;
    }

    const board = [];
    for (let i = 0; i < this.width; i++) {
      const list = [this.board[i-1], this.board[i], this.board[i+1]].filter(v => v !== undefined);

      if (list.length === 0) return;
      board[i] = Math.max(...list) + line[i];
    }
    this.board = board;
  }

  public getMaxPoint = () => Math.max(...this.board);
}
