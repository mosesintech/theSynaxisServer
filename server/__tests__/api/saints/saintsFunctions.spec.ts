import {
  DbToGQLTransformSaintData,
  GQLToDbTransformSaintData,
} from '../../../api/saints/saintsFunctions';

describe('Saint Business Logic Helper Functions', () => {
  describe('DbToGQLTransformSaintData', () => {
    test('DbToGQLTransformSaintData No ID: Success', async () => {
      const saint = {
        name: 'Paisios',
        life: 'life',
        born: '1924',
        died: '1994',
        feast_month: '7',
        feast_date: '12',
        is_bc: false,
        is_martyr: false,
        is_confessor: false,
        is_patriarch: false,
        is_bishop: false,
        is_priest: false,
        is_deacon: false,
        is_monk: true,
        is_married: false,
        is_male: true,
        created_at: `${new Date()}`,
        modified_at: `${new Date()}`,
        is_deleted: false,
      };
      const result = DbToGQLTransformSaintData(saint);
      expect(result).not.toEqual(saint);
      expect(result.name).toEqual(saint.name);
      expect(result.life).toEqual(saint.life);
      expect(result.born).toEqual(saint.born);
      expect(result.died).toEqual(saint.died);
      expect(result.feastMonth).toEqual(saint.feast_month);
      expect(result.feastDate).toEqual(saint.feast_date);
      expect(result.isBc).toEqual(saint.is_bc);
      expect(result.isMartyr).toEqual(saint.is_martyr);
      expect(result.isConfessor).toEqual(saint.is_confessor);
      expect(result.isPatriarch).toEqual(saint.is_patriarch);
      expect(result.isBishop).toEqual(saint.is_bishop);
      expect(result.isPriest).toEqual(saint.is_priest);
      expect(result.isDeacon).toEqual(saint.is_deacon);
      expect(result.isMonk).toEqual(saint.is_monk);
      expect(result.isMarried).toEqual(saint.is_married);
      expect(result.isMale).toEqual(saint.is_male);
      expect(result.createdAt).toEqual(saint.created_at);
      expect(result.modifiedAt).toEqual(saint.modified_at);
      expect(result.isDeleted).toEqual(saint.is_deleted);
    });

    test('DbToGQLTransformSaintData With ID: Success', async () => {
      const saint = {
        id: 2,
        name: 'Paisios',
        life: 'life',
        born: '1924',
        died: '1994',
        feast_month: '7',
        feast_date: '12',
        is_bc: false,
        is_martyr: false,
        is_confessor: false,
        is_patriarch: false,
        is_bishop: false,
        is_priest: false,
        is_deacon: false,
        is_monk: true,
        is_married: false,
        is_male: true,
        created_at: `${new Date()}`,
        modified_at: `${new Date()}`,
        is_deleted: false,
      };
      const result = DbToGQLTransformSaintData(saint);
      expect(result).not.toEqual(saint);
      expect(result.id).toEqual(saint.id);
      expect(result.name).toEqual(saint.name);
      expect(result.life).toEqual(saint.life);
      expect(result.born).toEqual(saint.born);
      expect(result.died).toEqual(saint.died);
      expect(result.feastMonth).toEqual(saint.feast_month);
      expect(result.feastDate).toEqual(saint.feast_date);
      expect(result.isBc).toEqual(saint.is_bc);
      expect(result.isMartyr).toEqual(saint.is_martyr);
      expect(result.isConfessor).toEqual(saint.is_confessor);
      expect(result.isPatriarch).toEqual(saint.is_patriarch);
      expect(result.isBishop).toEqual(saint.is_bishop);
      expect(result.isPriest).toEqual(saint.is_priest);
      expect(result.isDeacon).toEqual(saint.is_deacon);
      expect(result.isMonk).toEqual(saint.is_monk);
      expect(result.isMarried).toEqual(saint.is_married);
      expect(result.isMale).toEqual(saint.is_male);
      expect(result.createdAt).toEqual(saint.created_at);
      expect(result.modifiedAt).toEqual(saint.modified_at);
      expect(result.isDeleted).toEqual(saint.is_deleted);
    });
  });

  describe('GQLToDbTransformSaintData', () => {
    test('GQLToDbTransformSaintData No ID: Success', async () => {
      const saint = {
        name: 'Paisios',
        life: 'life',
        born: '1924',
        died: '1994',
        feast_month: '7',
        feast_date: '12',
        is_bc: false,
        is_martyr: false,
        is_confessor: false,
        is_patriarch: false,
        is_bishop: false,
        is_priest: false,
        is_deacon: false,
        is_monk: true,
        is_married: true,
        is_male: true,
        created_at: `${new Date()}`,
        modified_at: `${new Date()}`,
        is_deleted: false,
      };
      const result = DbToGQLTransformSaintData(saint);
      expect(result).not.toEqual(saint);
      expect(result.name).toEqual(saint.name);
      expect(result.life).toEqual(saint.life);
      expect(result.born).toEqual(saint.born);
      expect(result.died).toEqual(saint.died);
      expect(result.feastMonth).toEqual(saint.feast_month);
      expect(result.feastDate).toEqual(saint.feast_date);
      expect(result.isBc).toEqual(saint.is_bc);
      expect(result.isMartyr).toEqual(saint.is_martyr);
      expect(result.isConfessor).toEqual(saint.is_confessor);
      expect(result.isPatriarch).toEqual(saint.is_patriarch);
      expect(result.isBishop).toEqual(saint.is_bishop);
      expect(result.isPriest).toEqual(saint.is_priest);
      expect(result.isDeacon).toEqual(saint.is_deacon);
      expect(result.isMonk).toEqual(saint.is_monk);
      expect(result.isMarried).toEqual(saint.is_married);
      expect(result.isMale).toEqual(saint.is_male);
      expect(result.createdAt).toEqual(saint.created_at);
      expect(result.modifiedAt).toEqual(saint.modified_at);
      expect(result.isDeleted).toEqual(saint.is_deleted);
    });

    test('GQLToDbTransformSaintData With ID: Success', async () => {
      const saint = {
        id: 2,
        name: 'Paisios',
        life: 'life',
        born: '1924',
        died: '1994',
        feastMonth: '7',
        feastDate: '12',
        isBc: false,
        isMartyr: false,
        isConfessor: false,
        isPatriarch: false,
        isBishop: false,
        isPriest: false,
        isDeacon: false,
        isMonk: true,
        isMarried: false,
        isMale: true,
        createdAt: `${new Date()}`,
        modifiedAt: `${new Date()}`,
        isDeleted: false,
      };
      const result = GQLToDbTransformSaintData(saint);
      expect(result).not.toEqual(saint);
      expect(result.id).toEqual(saint.id);
      expect(result.name).toEqual(saint.name);
      expect(result.life).toEqual(saint.life);
      expect(result.born).toEqual(saint.born);
      expect(result.died).toEqual(saint.died);
      expect(result.feast_month).toEqual(saint.feastMonth);
      expect(result.feast_date).toEqual(saint.feastDate);
      expect(result.is_bc).toEqual(saint.isBc);
      expect(result.is_martyr).toEqual(saint.isMartyr);
      expect(result.is_confessor).toEqual(saint.isConfessor);
      expect(result.is_patriarch).toEqual(saint.isPatriarch);
      expect(result.is_bishop).toEqual(saint.isBishop);
      expect(result.is_priest).toEqual(saint.isPriest);
      expect(result.is_deacon).toEqual(saint.isDeacon);
      expect(result.is_monk).toEqual(saint.isMonk);
      expect(result.is_married).toEqual(saint.isMarried);
      expect(result.is_male).toEqual(saint.isMale);
      expect(result.created_at).toEqual(saint.createdAt);
      expect(result.modified_at).toEqual(saint.modifiedAt);
      expect(result.is_deleted).toEqual(saint.isDeleted);
    });
  });
});
