/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateClassDto {
  name: string;
  subclassesIds: object;
}

export interface Class {
  uuid: string;
  /** @example "паладин, войн" */
  name: string;
  subclasses: Subclass[];
}

export interface Subclass {
  uuid: string;
  /** @example "подкласс паладина 1, подкласс паладина 2" */
  name: string;
  markdown: string;
  description: string;
  class: Class;
}

export interface UpdateClassDto {
  name?: string;
  subclassesIds?: object;
}

export interface CreateSubclassDto {
  name: string;
  markdown: string;
  description: string;
}

export interface UpdateSubclassDto {
  name?: string;
  markdown?: string;
  description?: string;
}

export interface CreateRegionDto {
  name: string;
  markdown: string;
  description: string;
}

export interface Region {
  uuid: string;
  /** @example "Королевство Шарно" */
  name: string;
  markdown: string;
  description: string;
}

export interface UpdateRegionDto {
  name?: string;
  markdown?: string;
  description?: string;
}

export interface CreateSpeciesDto {
  name: string;
  markdown: string;
  description: string;
}

export interface Species {
  uuid: string;
  /** @example "Ланеши" */
  name: string;
  markdown: string;
  description: string;
}

export interface UpdateSpeciesDto {
  name?: string;
  markdown?: string;
  description?: string;
}

export interface CreateMonsterAbilityDto {
  abilityId: string;
  value: number;
}

export interface CreateMonsterSkillDto {
  skillId: string;
  value: number;
}

export interface CreateMonsterDto {
  name: string;
  typeId: string;
  sizeId: string;
  armorClass: number;
  /** @example "20d6+20" */
  hitPoints: string;
  /** Характеристики монстра */
  abilities: CreateMonsterAbilityDto[];
  /** Навыки монстра */
  skills: CreateMonsterSkillDto[];
  challenge: number;
}

export interface MonsterSize {
  uuid: string;
  /** @example "маленький, гиганский" */
  name: string;
  monsters: Monster[];
}

export interface Monster {
  uuid: string;
  /** @example "зомби, жопс" */
  name: string;
  type: MonsterType;
  size: MonsterSize;
}

export interface MonsterType {
  uuid: string;
  /** @example "нежить, дракон" */
  name: string;
  monsters: Monster[];
}

export interface UpdateMonsterDto {
  name?: string;
  typeId?: string;
  sizeId?: string;
  armorClass?: number;
  /** @example "20d6+20" */
  hitPoints?: string;
  /** Характеристики монстра */
  abilities?: CreateMonsterAbilityDto[];
  /** Навыки монстра */
  skills?: CreateMonsterSkillDto[];
  challenge?: number;
}

export interface CreateMonsterTypeDto {
  name: string;
}

export interface UpdateMonsterTypeDto {
  name?: string;
}

export interface CreateMonsterSizeDto {
  name: string;
}

export interface UpdateMonsterSizeDto {
  name?: string;
}

export interface CreateAbilityDto {
  name: string;
  code: string;
  description: string | null;
}

export interface Ability {
  uuid: string;
  /** @example "сила, ловкость" */
  name: string;
}

export interface UpdateAbilityDto {
  name?: string;
  code?: string;
  description?: string | null;
}

export interface CreateSkillDto {
  name: string;
  code: string;
  description: string | null;
}

export interface Skill {
  uuid: string;
  /** @example "атлетика, медицина" */
  name: string;
}

export interface UpdateSkillDto {
  name?: string;
  code?: string;
  description?: string | null;
}

export interface CreateDamageDto {
  name: string;
}

export interface Damage {
  uuid: string;
  /** @example "огонь, молния" */
  name: string;
}

export interface UpdateDamageDto {
  name?: string;
}

export interface CreateConditionDto {
  name: string;
}

export interface Condition {
  uuid: string;
  /** @example "огонь, молния" */
  name: string;
}

export interface UpdateConditionDto {
  name?: string;
}
