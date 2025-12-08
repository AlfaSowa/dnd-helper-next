/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type CreateCharacterDto = object;

export interface Character {
  id: string;
  name: string;
}

export type UpdateCharacterDto = object;

export type CreateRoomDto = object;

export interface Room {
  id: string;
  name: string;
}

export type UpdateRoomDto = object;

export interface CreateHeroDto {
  characterId: string;
  roomId: string;
}

export interface Hero {
  id: string;
  name: string;
  roomId: string;
  characterId: string;
}

export type UpdateHeroDto = object;

export interface CreateAbilityDto {
  name: string;
}

export interface Ability {
  id: string;
  /** @example "атлетика, анализ, история" */
  name: string;
  characteristic: Characteristic;
}

export interface Characteristic {
  id: string;
  /** @example "сила, ловкость" */
  name: string;
  abilities: Ability[];
}

export interface UpdateAbilityDto {
  name?: string;
  id: string;
}

export interface CreateCharacteristicDto {
  name: string;
  abilitiesIds: string[];
}

export interface UpdateCharacteristicDto {
  name?: string;
  abilitiesIds?: string[];
}

export interface CreateClassDto {
  name: string;
}

export interface Class {
  id: string;
  /** @example "Бард, Чародей" */
  name: string;
}

export interface UpdateClassDto {
  name?: string;
  id: string;
}
