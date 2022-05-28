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
        expect(result).toEqual({
          id: 1,
          name: 'Nicholas of Myra',
          life: 'life',
          born: '270',
          died: '343',
          feastMonth: 12,
          feastDate: 6,
          isBc: false,
          isMartyr: false,
          isConfessor: false,
          isPatriarch: false,
          isBishop: true,
          isPriest: false,
          isDeacon: false,
          isMonk: false,
          isMarried: false,
          isMale: true,
          createdAt: expect.any(Date),
          modifiedAt: expect.any(Date),
          isDeleted: false,
        });
      });

      test('getSaint failure: ID Does Not Exist', async () => {
        const id = 10;
        await expect(() => getSaint(id)).rejects.toThrow(
          'Saint does not exist'
        );
      });
    });

    describe('getSaints', () => {
      test('getSaints: success', async () => {
        const result = await getSaints();
        expect(result.length).toEqual(1);
        expect(result[0].name).toEqual('Nicholas of Myra');
        // This ensures all saints have passed through DBtoGQL transform.
        expect(result[0].isBishop).toEqual(true);
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
        feastMonth: '7',
        feastDate: '12',
      };
      const result = await addSaint(saint);
      expect(result.id).toEqual(2);
      expect(result.name).toEqual('Paisios');
      expect(result.life).toEqual('life');
      expect(result.born).toEqual('1924');
      expect(result.died).toEqual('1994');
      expect(result.feastMonth).toEqual(7);
      expect(result.feastDate).toEqual(12);
      // will always be false.
      expect(result.isBc).toEqual(false);
      expect(result.isMartyr).toEqual(false);
      expect(result.isConfessor).toEqual(false);
      expect(result.isPatriarch).toEqual(false);
      expect(result.isBishop).toEqual(false);
      expect(result.isPriest).toEqual(false);
      expect(result.isDeacon).toEqual(false);
      expect(result.isMonk).toEqual(false);
      expect(result.isMale).toEqual(false);
      expect(format(Number(result.createdAt), 'MMMM dd, yyyy')).toEqual(
        timestamp
      );
      expect(result.createdAt).toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
    });
    describe('addSaint failures', () => {
      // The following test is no longer necessary.
      // Since the addition of the GQLtoDB transformation function,
      // it is no longer possible to pass in values to a non-existent column.
      // test('addSaint failure: Incorrect Object', async () => {
      //   const saint = {
      //     name: 'Paisios',
      //     life: 'life',
      //     born: '1924',
      //     died: '1994',
      //     feastMonth: '7',
      //     feastDate: '12',
      //     praysFor: 'me',
      //   };
      //   await expect(() => addSaint(saint)).rejects.toThrow(
      //     'Error adding item: error: insert into "saints" ("born", "died", "feast_date", "feast_month", "life", "name", "praysFor") values ($1, $2, $3, $4, $5, $6, $7) returning "id" - column "prays_for" of relation "saints" does not exist'
      //   );
      // });

      test('addSaint failure: Missing Name', async () => {
        const saint = {
          life: 'life',
          born: '1924',
          died: '1994',
          feastMonth: '7',
          feastDate: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "created_at", "died", "feast_date", "feast_month", "is_bc", "is_bishop", "is_confessor", "is_deacon", "is_deleted", "is_male", "is_married", "is_martyr", "is_monk", "is_patriarch", "is_priest", "life", "modified_at", "name") values ($1, DEFAULT, $2, $3, $4, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, $5, DEFAULT, DEFAULT) returning "id" - null value in column "name" violates not-null constraint'
        );
      });
      test('addSaint failure: Missing Life', async () => {
        const saint = {
          name: 'Paisios',
          born: '1924',
          died: '1994',
          feastMonth: '7',
          feastDate: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "created_at", "died", "feast_date", "feast_month", "is_bc", "is_bishop", "is_confessor", "is_deacon", "is_deleted", "is_male", "is_married", "is_martyr", "is_monk", "is_patriarch", "is_priest", "life", "modified_at", "name") values ($1, DEFAULT, $2, $3, $4, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, $5) returning "id" - null value in column "life" violates not-null constraint'
        );
      });
      test('addSaint failure: Missing Born Date', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          died: '1994',
          feastMonth: '7',
          feastDate: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "created_at", "died", "feast_date", "feast_month", "is_bc", "is_bishop", "is_confessor", "is_deacon", "is_deleted", "is_male", "is_married", "is_martyr", "is_monk", "is_patriarch", "is_priest", "life", "modified_at", "name") values (DEFAULT, DEFAULT, $1, $2, $3, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, $4, DEFAULT, $5) returning "id" - null value in column "born" violates not-null constraint'
        );
      });
      test('addSaint failure: Missing Died Date', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          feastMonth: '7',
          feastDate: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "created_at", "died", "feast_date", "feast_month", "is_bc", "is_bishop", "is_confessor", "is_deacon", "is_deleted", "is_male", "is_married", "is_martyr", "is_monk", "is_patriarch", "is_priest", "life", "modified_at", "name") values ($1, DEFAULT, DEFAULT, $2, $3, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, $4, DEFAULT, $5) returning "id" - null value in column "died" violates not-null constraint'
        );
      });
      test('addSaint failure: Missing Feast Month', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          died: '1994',
          feastDate: '12',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "created_at", "died", "feast_date", "feast_month", "is_bc", "is_bishop", "is_confessor", "is_deacon", "is_deleted", "is_male", "is_married", "is_martyr", "is_monk", "is_patriarch", "is_priest", "life", "modified_at", "name") values ($1, DEFAULT, $2, $3, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, $4, DEFAULT, $5) returning "id" - null value in column "feast_month" violates not-null constraint'
        );
      });
      test('addSaint failure: Missing Feast Date', async () => {
        const saint = {
          name: 'Paisios',
          life: 'life',
          born: '1924',
          died: '1994',
          feastMonth: '7',
        };
        await expect(() => addSaint(saint)).rejects.toThrow(
          'Error adding item: error: insert into "saints" ("born", "created_at", "died", "feast_date", "feast_month", "is_bc", "is_bishop", "is_confessor", "is_deacon", "is_deleted", "is_male", "is_married", "is_martyr", "is_monk", "is_patriarch", "is_priest", "life", "modified_at", "name") values ($1, DEFAULT, $2, DEFAULT, $3, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, $4, DEFAULT, $5) returning "id" - null value in column "feast_date" violates not-null constraint'
        );
      });
    });
  });

  describe('Update Saints', () => {
    test('updateSaint: success', async () => {
      const updatedSaint = {
        id: 2,
        isMonk: true,
        isMale: true,
      };
      const result = await updateSaint(updatedSaint);
      expect(result.id).toEqual(2);
      expect(result.name).toEqual('Paisios');
      expect(result.life).toEqual('life');
      expect(result.born).toEqual('1924');
      expect(result.died).toEqual('1994');
      expect(result.feastMonth).toEqual(7);
      expect(result.feastDate).toEqual(12);
      expect(result.isBc).toEqual(false);
      expect(result.isMartyr).toEqual(false);
      expect(result.isConfessor).toEqual(false);
      expect(result.isPatriarch).toEqual(false);
      expect(result.isBishop).toEqual(false);
      expect(result.isPriest).toEqual(false);
      expect(result.isDeacon).toEqual(false);
      expect(result.isMonk).toEqual(true);
      expect(result.isMale).toEqual(true);
      expect(result.createdAt).not.toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
    });

    describe('updateSaint failures', () => {
      // The following test is no longer necessary.
      // Since the addition of the GQLtoDB transformation function,
      // it is no longer possible to pass in values to a non-existent column.

      // test('updateSaint failure: Incorrect Object', async () => {
      //   const saint = {
      //     id: 2,
      //     praysFor: 'me',
      //   };
      //   await expect(() => updateSaint(saint)).rejects.toThrow(
      //     'Error updating item: error: update "saints" set "id" = $1, "prays_for" = $2, "modified_at" = CURRENT_TIMESTAMP where "id" = $3 - column "prays_for" of relation "saints" does not exist'
      //   );
      // });

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
      expect(result.createdAt).not.toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(true);
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
      expect(result.createdAt).not.toEqual(result.modifiedAt);
      expect(result.isDeleted).toEqual(false);
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
