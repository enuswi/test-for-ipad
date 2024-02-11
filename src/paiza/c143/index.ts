/**
 * file名を受け取り、ルールに則した命名に修正する
 * 
 * 命名規則
 * ・半角英数字、「-」（半角ハイフン）のみ利用可能
 * ・「-」は、連続してはいけない
 */

export class FileNameValueObject {
    private value: string;
    private constructor(fileName: string) {
      // バリデート処理（今回は多分なくてもOK）
      this.validate(fileName)

      this.value = this.convert(fileName)
    }
  
    private validate = (fileName: string): void => {
      // TODO: 半角英数ないしは「-」以外の文字列が含まれている場合にエラーをthrowする
    }
  
    private convert = (fileName: string): string => {
      return fileName.replace(/-+/g, '-')
    }
  
    public static create = (fileName: string): FileNameValueObject => {
      return new FileNameValueObject(fileName)
    }
  
    public get = (): string => this.value
  }
