import { FileNameValueObject } from './index';

describe('fileNameValueObject', () => {
  test('インスタンス生成', () => {
    const fileNameValueObject = FileNameValueObject.create('test.txt');
    expect(fileNameValueObject.get()).toBe('test.txt');
  })
});