import { getFile, getFileCollection, getList } from '../index';

describe('simple test', () => {
  const filename = 'hmbc-nitrogen.zip';
  it('check one name', async () => {
    const list = await getList();

    expect(list).toContain(filename);
  });
  it('check getFile', async () => {
    const file = await getFile(filename);
    expect(file.name).toBe(filename);
  });
  it('check getFileCollection', async () => {
    const fileCollection = await getFileCollection();
    expect(fileCollection.files.map((f) => f.name)).toContain(filename);
  });
});
