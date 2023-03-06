import { TRACK_BY_ID_FUNCTION } from './track-by-utils';

describe('TRACK_BY_ID_FUNCTION', () => {
  it('should return the id of an item', () => {
    const testItem = { id: 1, name: 'Test Item' };
    const index = 0;

    const result = TRACK_BY_ID_FUNCTION(index, testItem);

    expect(result).toBe(testItem.id);
  });
});
