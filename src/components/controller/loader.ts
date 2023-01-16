import { Types } from '../types/Types';
import { ILoader } from '../types/interfaces';

class Loader implements ILoader {
  public baseLink: string;

  constructor(baseLink: string) {
    this.baseLink = baseLink;
  }

  getResp<T>(
    callback = () => {
      console.error('No callback for GET response');
    },
    options: Types.IOptions
  ): void {
    this.load<T>(callback, options);
  }

  makeUrl(options: Types.IOptions): string {
    if (Object.keys(options).length !== 0) {
      switch (options.endpoint) {
        case Types.Endpoint.CATEGORIES:
          return `${this.baseLink}/categories`;
        case Types.Endpoint.CATEGORY:
          return `${this.baseLink}/category/${options.caterory}`;
        case Types.Endpoint.SEARCH:
          return `${this.baseLink}/search?q=${options.search}`;
        default:
          return `${this.baseLink}/${options.id}`;
      }
    } else {
      return `${this.baseLink}?limit=100&loading=lazy`;
    }
  }

  load<T>(callback: Types.TCallBack<T>, options: Types.IOptions): void {
    fetch(this.makeUrl(options))
      .then((res) => res.json())
      .then((data: T) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
