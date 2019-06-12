/* tslint:disable */

declare var Object: any;
export interface SoundSourceInterface {
  "id"?: number;
  "heartDataId"?: any;
}

export class SoundSource implements SoundSourceInterface {
  "id": number;
  "heartDataId": any;
  constructor(data?: SoundSourceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SoundSource`.
   */
  public static getModelName() {
    return "SoundSource";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SoundSource for dynamic purposes.
  **/
  public static factory(data: SoundSourceInterface): SoundSource{
    return new SoundSource(data);
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
      name: 'SoundSource',
      plural: 'SoundSources',
      path: 'SoundSources',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "heartDataId": {
          name: 'heartDataId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
