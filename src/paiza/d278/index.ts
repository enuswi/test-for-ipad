/**
 * 徒歩時間 X 分の計算ロジック
 */
export class WalkingTimeCalculator {
  /**
   * 80mあたり1分として、端数は切り捨てる
   * @param distance 距離（メートル）
   */
  public static calculateByDistance = (distance: number): number => {
    return Math.floor(distance / 80)
  }
}