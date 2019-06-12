/* tslint:disable */
import {
  SoundSource
} from '../index';

declare var Object: any;
export interface HeartDataInterface {
  "FirstName": string;
  "LastName": string;
  "Age": number;
  "weight": number;
  "URL": string;
  "city": string;
  "state": string;
  "postal": string;
  "address": string;
  "label": string;
  "height": string;
  "GestAgeWeek": number;
  "GestAgeDay": number;
  "Medicine"?: string;
  "AgeOfMother": number;
  "MotherRace": string;
  "FatherRace": string;
  "FamilyRelation": string;
  "ChildDis": string;
  "MotherDisHistory": string;
  "FatherDisHistory": string;
  "OtherUnomaly": string;
  "DigestUnomaly": string;
  "MotherCigaret": boolean;
  "FatherCigaret": boolean;
  "MotherAlchol": boolean;
  "MotherJob": string;
  "Chemical": string;
  "HeartPressure": boolean;
  "HeartPressureTime": number;
  "HeartPressureType": string;
  "MotherDiabete": boolean;
  "MotherDiabeteControled": string;
  "DiabetAverage": string;
  "BirthDate": Date;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  soundSources?: SoundSource[];
}

export class HeartData implements HeartDataInterface {
  "FirstName": string;
  "LastName": string;
  "Age": number;
  "weight": number;
  "URL": string;
  "city": string;
  "state": string;
  "postal": string;
  "address": string;
  "label": string;
  "height": string;
  "GestAgeWeek": number;
  "GestAgeDay": number;
  "Medicine": string;
  "AgeOfMother": number;
  "MotherRace": string;
  "FatherRace": string;
  "FamilyRelation": string;
  "ChildDis": string;
  "MotherDisHistory": string;
  "FatherDisHistory": string;
  "OtherUnomaly": string;
  "DigestUnomaly": string;
  "MotherCigaret": boolean;
  "FatherCigaret": boolean;
  "MotherAlchol": boolean;
  "MotherJob": string;
  "Chemical": string;
  "HeartPressure": boolean;
  "HeartPressureTime": number;
  "HeartPressureType": string;
  "MotherDiabete": boolean;
  "MotherDiabeteControled": string;
  "DiabetAverage": string;
  "BirthDate": Date;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  soundSources: SoundSource[];
  constructor(data?: HeartDataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `HeartData`.
   */
  public static getModelName() {
    return "HeartData";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of HeartData for dynamic purposes.
  **/
  public static factory(data: HeartDataInterface): HeartData{
    return new HeartData(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'HeartData',
      plural: 'HeartData',
      path: 'HeartData',
      idName: 'id',
      properties: {
        "FirstName": {
          name: 'FirstName',
          type: 'string'
        },
        "LastName": {
          name: 'LastName',
          type: 'string'
        },
        "Age": {
          name: 'Age',
          type: 'number'
        },
        "weight": {
          name: 'weight',
          type: 'number'
        },
        "URL": {
          name: 'URL',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "state": {
          name: 'state',
          type: 'string'
        },
        "postal": {
          name: 'postal',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "label": {
          name: 'label',
          type: 'string'
        },
        "height": {
          name: 'height',
          type: 'string'
        },
        "GestAgeWeek": {
          name: 'GestAgeWeek',
          type: 'number'
        },
        "GestAgeDay": {
          name: 'GestAgeDay',
          type: 'number'
        },
        "Medicine": {
          name: 'Medicine',
          type: 'string'
        },
        "AgeOfMother": {
          name: 'AgeOfMother',
          type: 'number'
        },
        "MotherRace": {
          name: 'MotherRace',
          type: 'string'
        },
        "FatherRace": {
          name: 'FatherRace',
          type: 'string'
        },
        "FamilyRelation": {
          name: 'FamilyRelation',
          type: 'string'
        },
        "ChildDis": {
          name: 'ChildDis',
          type: 'string'
        },
        "MotherDisHistory": {
          name: 'MotherDisHistory',
          type: 'string'
        },
        "FatherDisHistory": {
          name: 'FatherDisHistory',
          type: 'string'
        },
        "OtherUnomaly": {
          name: 'OtherUnomaly',
          type: 'string'
        },
        "DigestUnomaly": {
          name: 'DigestUnomaly',
          type: 'string'
        },
        "MotherCigaret": {
          name: 'MotherCigaret',
          type: 'boolean'
        },
        "FatherCigaret": {
          name: 'FatherCigaret',
          type: 'boolean'
        },
        "MotherAlchol": {
          name: 'MotherAlchol',
          type: 'boolean'
        },
        "MotherJob": {
          name: 'MotherJob',
          type: 'string'
        },
        "Chemical": {
          name: 'Chemical',
          type: 'string'
        },
        "HeartPressure": {
          name: 'HeartPressure',
          type: 'boolean'
        },
        "HeartPressureTime": {
          name: 'HeartPressureTime',
          type: 'number'
        },
        "HeartPressureType": {
          name: 'HeartPressureType',
          type: 'string'
        },
        "MotherDiabete": {
          name: 'MotherDiabete',
          type: 'boolean'
        },
        "MotherDiabeteControled": {
          name: 'MotherDiabeteControled',
          type: 'string'
        },
        "DiabetAverage": {
          name: 'DiabetAverage',
          type: 'string'
        },
        "BirthDate": {
          name: 'BirthDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        soundSources: {
          name: 'soundSources',
          type: 'SoundSource[]',
          model: 'SoundSource',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'heartDataId'
        },
      }
    }
  }
}
