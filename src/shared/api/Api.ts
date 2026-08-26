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
  subclassesIds: string[];
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
  subclassesIds?: string[];
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
