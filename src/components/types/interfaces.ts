import Route from '../route/route';
import { Types } from './Types';

export interface ILoader {
  baseLink: string;

  getResp(callback: () => void, options: Types.IOptions): void;

  makeUrl(options: Types.IOptions): string;

  load<T>(callback: Types.TCallBack<T>, options: Types.IOptions): void;
}

export interface IRoute {
  name: string;

  htmlName: string;

  default: boolean;

  isActiveRoute(hashedPath: string): boolean;
}

export interface IRouter {
  routes: IRoute[];

  rootElem: HTMLDivElement;

  init: IInit;

  initRoutes(): void;

  startRouter(): void;

  initPaths(): void;

  hasChanged(r: IRoute[], callback: () => void): void;

  goToRoute(htmlName: string, callback: () => void): Promise<void>;
}

export interface IApp {
  router: IRouter;

  start(): void;
}

export interface IInit {
  controller: IAppController;

  view: IAppView;

  filtersObj: Types.IFilters;

  cache: Types.IProduct[];

  filteredArr: Types.IProduct[];

  searchArr: Types.IProduct[];

  filterQuery: URLSearchParams;

  getData(routeArr: Route[], callback: () => void): void;

  loadCardRoutes(routeArr: Route[], data: Types.IProduct[]): void;

  initMainPage(): void;

  initCatalog(): void;

  initSearchInput(): void;

  makeInitialSearch(searchString: string): void;

  initialSearch(value: string): void;

  search(value: string): void;

  initCart(): void;

  initProductDetails(): void;

  initFilters(): void;

  initFilterButtons(): void;

  removeSearch(): void;

  initFiltersFromQuery(): void;

  initRangeFiltersFromQuery(type: string): void;

  getRangeFiltersFromQuery(
    type: string,
    sliderInputMin: HTMLInputElement,
    sliderInputMax: HTMLInputElement,
    inputBoxMin: HTMLInputElement,
    inputBoxMax: HTMLInputElement
  ): void;

  getRangeFiltersByType(type: string, minMax: string[]): void;

  getCheckboxFiltersFromQuery(type: string, inputList: NodeListOf<HTMLInputElement>): void;

  nullifyCheckboxFilters(type: string): void;

  addFilterRangeListener(filterType: string, inputVals: { min: number; max: number }): void;

  filtersCheckListener(): void;

  filtersRangeListener(): void;

  changeCheckboxes(input: NodeListOf<HTMLElement>, index: number, arr: string[], type: string): void;

  filterProducts(data: Types.IProduct[], filtersObj: Types.IFilters): void;

  getQuery(key: string): string | false | null;

  removeFromQuery(key: string): void;

  writeToQuery(key: string, value: string): void;

  addToQuery(input: HTMLInputElement, type: string): void;

  deleteFromQuery(input: HTMLInputElement, type: string): void;
}

export interface IAppView {
  productDetails: IProductDetails;

  catalog: ICatalog;

  cart: ICart;

  cartItems: Types.TCart;

  showProductDetails(data: Types.IProduct): void;

  createToggle(): void;

  getToggleView(toggleQuery: URLSearchParams, toggleBtn: HTMLDivElement, catalogContainer: HTMLDivElement): void;

  createDropdown(): void;

  createCheckFilters(data: Types.IProduct[], type: string): void;

  createPriceFilters(data: Types.IProduct[], filtersObj: Types.IFilters): void;

  createStockFilters(data: Types.IProduct[], filtersObj: Types.IFilters): void;

  createDiscountFilters(data: Types.IProduct[], filtersObj: Types.IFilters): void;

  initPages(filteredArr: Types.IProduct[], pagesCount: number): void;

  initPagesandFilter(filteredArr: Types.IProduct[], filtersObj?: Types.IFilters): void;

  createPages(filteredArr: Types.IProduct[], pagesCount: number): void;

  goToPage(filteredArr: Types.IProduct[], pagesArr: HTMLDivElement[], idx: number): void;

  findPageIdx(pagesArr: HTMLDivElement[]): number;

  // Catalog methods
  createCatalog(filteredArr: Types.IProduct[], catalogDiv: HTMLDivElement, page: number): void;

  createSortedCatalog(filteredArr: Types.IProduct[]): void;

  initSorting(filteredArr: Types.IProduct[]): void;

  initSortingVisual(sortParams: URLSearchParams): void;

  addToQuery(type: string, sortParams: URLSearchParams): void;

  sortArrayInitial(filteredArr: Types.IProduct[], sortParams: URLSearchParams): void;

  createCart(): void;
}

export interface ICart {
  openModalBool: boolean;

  cartItems: Types.TCart;

  totalQty: number;

  totalPrice: number;

  checkoutPrice: number;

  totalDiscount: number;

  appliedPromos: string[];

  promoPc: number;

  promoMoneyAmount: number;

  entriesOnPage: number;

  pageQuery: URLSearchParams;

  initCartPage(): void;

  initOpenModal(bool: boolean): void;

  initCartLinks(): void;

  initPaginationDropdownLinks(): void;

  initCheckoutLink(): void;

  initModalLinks(): void;

  initPromoInput(): void;

  makeInteractible(
    btnMinus: HTMLButtonElement,
    input: HTMLInputElement,
    btnPlus: HTMLButtonElement,
    itemDelete: HTMLDivElement,
    itemTotal: HTMLDivElement,
    item: Types.ICartSlot
  ): void;

  createFiller(): void;

  createPagesAndCart(pagesCount: number, pageNumber: number): void;

  fillCart(page: number): void;

  updateHeader(): void;

  updateCheckout(): void;

  updateNumParams(): void;

  updateDropdown(entriesOnPage: number): void;

  updateCart(page: number): void;

  updatePages(activePage: number): void;

  getFromQuery(key: string): string | false | null;

  deleteFromQuery(key: string): void;

  writeToQuery(key: string, value: string): void;

  createPages(pagesCount: number, pageActive: number): void;

  drawPages(pagesCount: number, pageActive: number): void;

  goToPage(pagesArr: HTMLDivElement[], idx: number): void;

  findPageIdx(pagesArr: HTMLDivElement[]): number;

  findPage(): number | undefined;

  searchPromo(promo: string, type: string[]): void;

  addPromo(value: string, appliedPromo: HTMLParagraphElement): void;

  drawPromo(promoName: string, promoAmount: number, appliedPromo: HTMLParagraphElement): void;

  openModal(): void;

  validateForm(): boolean;

  showMessage(mesType: boolean): void;

  productInCart(product: Types.IProduct): boolean;

  initCartAdd(productCardDivCart: Element, product: Types.IProduct): void;

  addToCart(product: Types.IProduct): void;

  addItem(item: Types.ICartSlot, itemPos: number, position: boolean): void;

  deleteItem(item: Types.ICartSlot): void;

  deleteProduct(product: Types.IProduct): void;
}

export interface IProductDetails {
  cart: ICart;

  drawProduct(data: Types.IProduct): void;

  drawCrumbs(data: Types.IProduct): void;

  drawProductDescr(data: Types.IProduct): void;

  drawProductImgs(data: Types.IProduct): void;

  selectImage(dataImages: string[], imgThumbs: HTMLElement[], mainImg: HTMLDivElement): void;

  createMagnifyerDiv(): void;

  magnifyImage(e: MouseEvent): void;

  removeMagnify(): void;

  initButtons(data: Types.IProduct): void;
}

export interface ICatalog {
  drawCategory(category: string, div: HTMLDivElement, name: string): void;

  drawCard(card: Types.IProduct, div: HTMLDivElement): void;

  drawSliderFilter(filterCat: { min: number; max: number }, filterType: string): void;

  drawSliderInput(filterCat: { min: number; max: number }, filterType: string): void;

  calcSliderInput(
    sliderInputMin: HTMLInputElement,
    sliderInputMax: HTMLInputElement,
    inputBoxMin: HTMLInputElement,
    inputBoxMax: HTMLInputElement,
    sliderTrack: HTMLDivElement,
    input: boolean
  ): void;

  fillSliderTrack(minInput: HTMLInputElement, maxInput: HTMLInputElement): void;
}

export interface IAppController {
  getProducts<T>(callback: Types.TCallBack<T>, options?: Types.IOptions): void;

  getProductDetails<T>(callback: Types.TCallBack<T>, options: Types.IOptions): void;

  getCategories<T>(callback: Types.TCallBack<T>): void;

  getSearchResults<T>(searchString: string, callback: Types.TCallBack<T>): void;
}
