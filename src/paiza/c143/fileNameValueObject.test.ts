import { FileNameValueObject } from './index';

describe('ファイル名に関する値オブジェクト', () => {
  test.each`
    input | result
    ${'test.txt'} | ${'test.txt'}
    ${'test--.txt'} | ${'test-.txt'}
  `('$input => $result', ({ input, result }) => {
    const fileNameValueObject = FileNameValueObject.create(input);
    expect(fileNameValueObject.get()).toBe(result);
  });
});