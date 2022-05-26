import { format } from 'date-fns';
import knex from '../../../data/dbConfig';
import {
  getSaint,
  getSaints,
  addSaint,
  updateSaint,
  deleteSaint,
  restoreSaint,
} from '../../../api/saints/saintsModel';

describe('Saints Data Model Functions', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('Retrieve Data', () => {
    describe('getSaint', () => {
      test('getSaint: success', async () => {
        const id = 1;
        const result = await getSaint(id);
        expect(result.name).toEqual('Nicholas of Myra');
      });

      test('getSaint failure: ID Does Not Exist', async () => {
        const id = 10;
        await expect(() => getSaint(id)).rejects.toThrow('Item does not exist');
      });
    });

    describe('getSaints', () => {
      test('getSaints: success', async () => {
        const result = await getSaints();
        expect(result.length).toEqual(1);
      });
    });
  });

  describe('Add Data', () => {
    test('addSaint: success', async () => {
      const timestamp = format(new Date(), 'MMMM dd, yyyy');
      // least amount of data needed to create a new saint.
      const saint = {
        name: 'Paisios',
        life: 'life',
        born: '1924',
        died: '1994',
        feast_month: '7',
        feast_date: '12',
      };
      const result = await addSaint(saint);
      expect(result.id).toEqual(2);
      expect(result.name).toEqual('Paisios');
      expect(result.life).toEqual('life');
      expect(result.born).toEqual('1924');
      expect(result.died).toEqual('1994');
      expect(result.feast_month).toEqual(7);
      expect(result.feast_date).toEqual(12);
      // will always be false.
      expect(result.is_bc).toEqual(false);
      expect(result.is_martyr).toEqual(false);
      expect(result.is_patriarch).toEqual(false);
      expect(result.is_bishop).toEqual(false);
      expect(result.is_priest).toEqual(false);
      expect(result.is_deacon).toEqual(false);
      expect(result.is_monk).toEqual(false);
      expect(result.is_male).toEqual(false);
      expect(format(Number(result.created_at), 'MMMM dd, yyyy')).toEqual(
        timestamp
      );
      expect(result.created_at).toEqual(result.modified_at);
      expect(result.is_deleted).toEqual(false);
    });

    describe('addSaint failures', () => {
      test('addSaint failure: Incorrect Object', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          died: '1994',
          feast_month: '7',
          feast_date: '12',
          prays_for: 'me',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "died", "feast_date", "feast_month", "life", "name", "prays_for") values ($1, $2, $3, $4, $5, $6, $7) returning "id" - column "prays_for" of relation "saints" does not exist'
        );
      });

      test('addSaint failure: Missing Name', async () => {
        const saint = {
          life: 'life',
          born: '1924',
          died: '1994',
          feast_month: '7',
          feast_date: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "died", "feast_date", "feast_month", "life") values ($1, $2, $3, $4, $5) returning "id" - null value in column "name" violates not-null constraint'
        );
      });

      test('addSaint failure: Missing Life', async () => {
        const saint = {
          name: 'Paisios',
          born: '1924',
          died: '1994',
          feast_month: '7',
          feast_date: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "died", "feast_date", "feast_month", "name") values ($1, $2, $3, $4, $5) returning "id" - null value in column "life" violates not-null constraint'
        );
      });

      test('addSaint failure: Missing Born Date', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          died: '1994',
          feast_month: '7',
          feast_date: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("died", "feast_date", "feast_month", "life", "name") values ($1, $2, $3, $4, $5) returning "id" - null value in column "born" violates not-null constraint'
        );
      });

      test('addSaint failure: Missing Died Date', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          feast_month: '7',
          feast_date: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "feast_date", "feast_month", "life", "name") values ($1, $2, $3, $4, $5) returning "id" - null value in column "died" violates not-null constraint'
        );
      });

      test('addSaint failure: Missing Feast Month', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          died: '1994',
          feast_date: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "died", "feast_date", "life", "name") values ($1, $2, $3, $4, $5) returning "id" - null value in column "feast_month" violates not-null constraint'
        );
      });

      test('addSaint failure: Missing Feast Date', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          died: '1994',
          feast_month: '7',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "died", "feast_month", "life", "name") values ($1, $2, $3, $4, $5) returning "id" - null value in column "feast_date" violates not-null constraint'
        );
      });
    });
  });

  describe('Update Saints', () => {
    test('updateSaint: success', async () => {
      const updatedSaint = {
        id: 2,
        is_monk: true,
        is_male: true,
      };
      const result = await updateSaint(updatedSaint);
      expect(result.id).toEqual(2);
      expect(result.name).toEqual('Paisios');
      expect(result.life).toEqual('life');
      expect(result.born).toEqual('1924');
      expect(result.died).toEqual('1994');
      expect(result.feast_month).toEqual(7);
      expect(result.feast_date).toEqual(12);
      expect(result.is_bc).toEqual(false);
      expect(result.is_martyr).toEqual(false);
      expect(result.is_patriarch).toEqual(false);
      expect(result.is_bishop).toEqual(false);
      expect(result.is_priest).toEqual(false);
      expect(result.is_deacon).toEqual(false);
      expect(result.is_monk).toEqual(true);
      expect(result.is_male).toEqual(true);
      expect(result.created_at).not.toEqual(result.modified_at);
      expect(result.is_deleted).toEqual(false);
    });

    describe('updateSaint failures', () => {
      test('updateSaint failure: Incorrect Object', async () => {
        const saint = {
          id: 2,
          prays_for: 'me',
        };
        await expect(() => updateSaint(saint)).rejects.toThrow(
          'Error updating item: error: update "saints" set "id" = $1, "prays_for" = $2, "modified_at" = CURRENT_TIMESTAMP where "id" = $3 - column "prays_for" of relation "saints" does not exist'
        );
      });

      test('updateSaint failure: Missing ID', async () => {
        const saint = {
          name: 'Paisios of Mount Athos',
        };
        await expect(() => updateSaint(saint)).rejects.toThrow(
          'Error updating item: Error: Undefined binding(s) detected when compiling UPDATE. Undefined column(s): [id] query: update "saints" set "name" = ?, "modified_at" = CURRENT_TIMESTAMP where "id" = ?'
        );
      });
    });
  });

  describe('deleteSaint', () => {
    test('deleteSaint: success', async () => {
      const id = 2;
      const result = await deleteSaint(id);
      expect(result.id).toEqual(2);
      expect(result.created_at).not.toEqual(result.modified_at);
      expect(result.is_deleted).toEqual(true);
    });

    describe('deleteSaint: failures', () => {
      test('deleteSaint failure: ID does not exist', async () => {
        const id = 10;
        await expect(() => deleteSaint(id)).rejects.toThrow(
          'Saint does not exist'
        );
      });

      test('deleteSaint failure: Item is already deleted', async () => {
        const id = 2;
        await expect(() => deleteSaint(id)).rejects.toThrow(
          'Saint already deleted'
        );
      });
    });
  });

  describe('restoreSaint', () => {
    test('restoreSaint: success', async () => {
      const id = 2;
      const result = await restoreSaint(id);
      expect(result.id).toEqual(2);
      expect(result.created_at).not.toEqual(result.modified_at);
      expect(result.is_deleted).toEqual(false);
    });

    describe('restoreSaint: failures', () => {
      test('restoreSaint failure: ID does not exist', async () => {
        const id = 10;
        await expect(() => restoreSaint(id)).rejects.toThrow(
          'Saint does not exist'
        );
      });

      test('restoreSaint failure: Item is already deleted', async () => {
        const id = 2;
        await expect(() => restoreSaint(id)).rejects.toThrow(
          'Saint already deleted'
        );
      });
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
