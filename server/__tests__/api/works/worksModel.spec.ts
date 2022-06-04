import { format } from 'date-fns';
import knex from '../../../data/dbConfig';
import {
  getWork,
  getWorks,
  addWork,
  updateWork,
  deleteWork,
  restoreWork,
} from '../../../api/works/worksModel';

describe('Works Data Model Functions', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('Retrieve Data', () => {
    describe('getWork', () => {
      test('getWork: success', async () => {
        const id = 1;
        const result = await getWork(id);
        expect(result).toEqual({
          id: 1,
          title: 'Monastic Wisdom',
          publishedDate: 'October 1999',
          saintId: 2,
          createdAt: expect.any(Date),
          modifiedAt: expect.any(Date),
          isDeleted: false,
        });
      });

      test('getWork failure: ID Does Not Exist', async () => {
        const id = 10;
        await expect(() => getWork(id)).rejects.toThrow('Work does not exist');
      });
    });

    describe('getWorks', () => {
      test('getWorks: success', async () => {
        const result = await getWorks();
        expect(result.length).toEqual(1);
        expect(result[0].title).toEqual('Monastic Wisdom');
        // This ensures all saints have passed through DBtoGQL transform.
        expect(result[0].publishedDate).toEqual('October 1999');
      });
    });
  });

  describe('Add Data', () => {
    test('addWork: success', async () => {
      const timestamp = format(new Date(), 'MMMM dd, yyyy');
      // least amount of data needed to create a new saint.
      const work = {
        title: 'Unpublished Letter',
        publishedDate: 'Never',
        saintId: 2,
      };
      const result = await addWork(work);
      expect(result.id).toEqual(2);
      expect(format(Number(result.createdAt), 'MMMM dd, yyyy')).toEqual(
        timestamp
      );
      expect(result.createdAt).toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
    });

    test('addWork: success without published date', async () => {
      const timestamp = format(new Date(), 'MMMM dd, yyyy');
      // least amount of data needed to create a new saint.
      const work = {
        title: 'Another Unpublished Letter',
        saintId: 2,
      };
      const result = await addWork(work);
      expect(result.id).toEqual(3);
      expect(format(Number(result.createdAt), 'MMMM dd, yyyy')).toEqual(
        timestamp
      );
      expect(result.createdAt).toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
    });

    describe('addWork failures', () => {
      test('addWork failure: Missing Title', async () => {
        const work = {
          publishedDate: '',
          saintId: 2,
        };
        await expect(() => addWork(work)).rejects.toThrow(
          'Error adding item: error: insert into "works" ("created_at", "is_deleted", "modified_at", "published_date", "saint_id", "title") values (DEFAULT, DEFAULT, DEFAULT, $1, $2, DEFAULT) returning "id" - null value in column "title" violates not-null constraint'
        );
      });

      test('addWork failure: Missing Saint ID', async () => {
        const work = {
          title: '',
          publishedDate: '',
        };
        await expect(() => addWork(work)).rejects.toThrow(
          'Error adding item: error: insert into "works" ("created_at", "is_deleted", "modified_at", "published_date", "saint_id", "title") values (DEFAULT, DEFAULT, DEFAULT, $1, DEFAULT, $2) returning "id" - null value in column "saint_id" violates not-null constraint'
        );
      });
    });
  });

  describe('Update Works', () => {
    test('updateWork: success', async () => {
      const updatedWork = {
        id: 2,
        title: 'Newly Published Letter of Saint Joseph',
        publishedDate: '6/4/22',
      };
      const result = await updateWork(updatedWork);
      expect(result.id).toEqual(2);
      expect(result.title).toEqual('Newly Published Letter of Saint Joseph');
      expect(result.publishedDate).toEqual('6/4/22');
      expect(result.createdAt).not.toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
    });

    describe('updateWork failures', () => {
      test('updateWork failure: Missing ID', async () => {
        const updatedWork = {
          title: 'Newly Published Letter of Saint Joseph',
          publishedDate: '6/4/22',
        };
        await expect(() => updateWork(updatedWork)).rejects.toThrow(
          'Error updating item: Error: Undefined binding(s) detected when compiling UPDATE. Undefined column(s): [id] query: update "works" set "title" = ?, "published_date" = ?, "modified_at" = CURRENT_TIMESTAMP where "id" = ?'
        );
      });
    });
  });

  describe('deleteWork', () => {
    test('deleteWork: success', async () => {
      const id = 2;
      const result = await deleteWork(id);
      expect(result.id).toEqual(2);
      expect(result.createdAt).not.toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(true);
    });

    describe('deleteWork: failures', () => {
      test('deleteWork failure: ID does not exist', async () => {
        const id = 10;
        await expect(() => deleteWork(id)).rejects.toThrow(
          'Work does not exist'
        );
      });

      test('deleteWork failure: Item is already deleted', async () => {
        const id = 2;
        await expect(() => deleteWork(id)).rejects.toThrow(
          'Work already deleted'
        );
      });
    });
  });

  describe('restoreWork', () => {
    test('restoreWork: success', async () => {
      const id = 2;
      const result = await restoreWork(id);
      expect(result.id).toEqual(2);
      expect(result.createdAt).not.toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
    });

    describe('restoreWork: failures', () => {
      test('restoreWork failure: ID does not exist', async () => {
        const id = 10;
        await expect(() => restoreWork(id)).rejects.toThrow(
          'Work does not exist'
        );
      });

      test('restoreWork failure: Item is already deleted', async () => {
        const id = 2;
        await expect(() => restoreWork(id)).rejects.toThrow(
          'Work already deleted'
        );
      });
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
