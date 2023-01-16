import AppLoader from './appLoader';
import { Types } from '../types/Types';

export default class AppController extends AppLoader {
  getProducts<T>(callback: Types.TCallBack<T>, options: Types.IOptions = {}): void {
    super.getResp<T>(callback, options);
  }

  getProductDetails<T>(callback: Types.TCallBack<T>, options: Types.IOptions = {}): void {
    super.getResp<T>(callback, options);
  }

  getCategories<T>(callback: Types.TCallBack<T>): void {
    super.getResp<T>(callback, {
      endpoint: Types.Endpoint.CATEGORIES,
    });
  }

  getSearchResults<T>(searchString: string, callback: Types.TCallBack<T>): void {
    super.getResp<T>(callback, {
      endpoint: Types.Endpoint.SEARCH,
      search: searchString,
    });
  }
}
