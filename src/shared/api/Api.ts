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

export interface CreateMonsterDto {
  name: string;
  /** @example "нежить, дракон" */
  typeId: string;
}

export interface Monster {
  uuid: string;
  /** @example "зомби, жопс" */
  name: string;
  type: MonsterType;
}

export interface MonsterType {
  uuid: string;
  /** @example "нежить, дракон" */
  name: string;
  monsters: Monster[];
}

export interface UpdateMonsterDto {
  name?: string;
  /** @example "нежить, дракон" */
  typeId?: string;
}

export interface CreateMonsterTypeDto {
  name: string;
}

export interface UpdateMonsterTypeDto {
  name?: string;
}
