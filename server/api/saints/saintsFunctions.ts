type Saint = { [key: string]: undefined | number | string | boolean };

interface DBSaint extends Saint {
  id?: number;
  name?: string;
  life?: string;
  born?: string;
  died?: string;
  feast_month?: string;
  feast_date?: string;
  is_bc?: boolean;
  is_martyr?: boolean;
  is_confessor?: boolean;
  is_patriarch?: boolean;
  is_bishop?: boolean;
  is_priest?: boolean;
  is_deacon?: boolean;
  is_monk?: boolean;
  is_married?: boolean;
  is_male?: boolean;
  created_at?: string;
  modified_at?: string;
  is_deleted?: boolean;
}

interface GQLSaint extends Saint {
  id?: number;
  name?: string;
  life?: string;
  born?: string;
  died?: string;
  feastMonth?: string;
  feastDate?: string;
  isBc?: boolean;
  isMartyr?: boolean;
  isConfessor?: boolean;
  isPatriarch?: boolean;
  isBishop?: boolean;
  isPriest?: boolean;
  isDeacon?: boolean;
  isMonk?: boolean;
  isMarried?: boolean;
  isMale?: boolean;
  createdAt?: string;
  modifiedAt?: string;
  isDeleted?: boolean;
}

// To be used when querying for DB data.
export function DbToGQLTransformSaintData(saint: DBSaint): GQLSaint {
  if (saint.id) {
    const updatedSaint = {
      id: saint.id,
      name: saint.name,
      life: saint.life,
      born: saint.born,
      died: saint.died,
      feastMonth: saint.feast_month,
      feastDate: saint.feast_date,
      isBc: saint.is_bc,
      isMartyr: saint.is_martyr,
      isConfessor: saint.is_confessor,
      isPatriarch: saint.is_patriarch,
      isBishop: saint.is_bishop,
      isPriest: saint.is_priest,
      isDeacon: saint.is_deacon,
      isMonk: saint.is_monk,
      isMarried: saint.is_married,
      isMale: saint.is_male,
      createdAt: saint.created_at,
      modifiedAt: saint.modified_at,
      isDeleted: saint.is_deleted,
    };
    return updatedSaint;
  }

  const updatedSaint = {
    name: saint.name,
    life: saint.life,
    born: saint.born,
    died: saint.died,
    feastMonth: saint.feast_month,
    feastDate: saint.feast_date,
    isBc: saint.is_bc,
    isMartyr: saint.is_martyr,
    isConfessor: saint.is_confessor,
    isPatriarch: saint.is_patriarch,
    isBishop: saint.is_bishop,
    isPriest: saint.is_priest,
    isDeacon: saint.is_deacon,
    isMonk: saint.is_monk,
    isMarried: saint.is_married,
    isMale: saint.is_male,
    createdAt: saint.created_at,
    modifiedAt: saint.modified_at,
    isDeleted: saint.is_deleted,
  };
  return updatedSaint;
}

// To be used when mutation is making a change to DB data.
export function GQLToDbTransformSaintData(saint: GQLSaint): DBSaint {
  if (saint.id) {
    const updatedSaint = {
      id: saint.id,
      name: saint.name,
      life: saint.life,
      born: saint.born,
      died: saint.died,
      feast_month: saint.feastMonth,
      feast_date: saint.feastDate,
      is_bc: saint.isBc,
      is_martyr: saint.isMartyr,
      is_confessor: saint.isConfessor,
      is_patriarch: saint.isPatriarch,
      is_bishop: saint.isBishop,
      is_priest: saint.isPriest,
      is_deacon: saint.isDeacon,
      is_monk: saint.isMonk,
      is_married: saint.isMarried,
      is_male: saint.isMale,
      created_at: saint.createdAt,
      modified_at: saint.modifiedAt,
      is_deleted: saint.isDeleted,
    };
    return updatedSaint;
  }
  const updatedSaint = {
    name: saint.name,
    life: saint.life,
    born: saint.born,
    died: saint.died,
    feast_month: saint.feastMonth,
    feast_date: saint.feastDate,
    is_bc: saint.isBc,
    is_martyr: saint.isMartyr,
    is_confessor: saint.isConfessor,
    is_patriarch: saint.isPatriarch,
    is_bishop: saint.isBishop,
    is_priest: saint.isPriest,
    is_deacon: saint.isDeacon,
    is_monk: saint.isMonk,
    is_married: saint.isMarried,
    is_male: saint.isMale,
    created_at: saint.createdAt,
    modified_at: saint.modifiedAt,
    is_deleted: saint.isDeleted,
  };
  return updatedSaint;
}
