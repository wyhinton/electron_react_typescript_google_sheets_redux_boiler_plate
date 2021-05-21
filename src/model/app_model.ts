import { action, createStore, thunk, Thunk, Action } from 'easy-peasy';
import GetSheetDone from 'get-sheet-done';

export interface TestData {
  val1: number;
  val2: number;
}
export interface AppDataModel {
  fetch_google_sheet: Thunk<AppDataModel>;
  set_sheet_data: Action<AppDataModel, TestData[]>;
  google_sheet_data: TestData[];
}
export interface GoolgeSheet<T> {
  data: Array<T>;
  title: string;
  updated: string;
}

const appData: AppDataModel = {
  fetch_google_sheet: thunk(async (actions, student, { getState }) => {
    get_sheet<TestData>('181P-SDszUOj_xn1HJ1DRrO8pG-LXyXNmINcznHeoK8k', 1).then(
      (values) => {
        actions.set_sheet_data(values.data);
        console.log(values);
      }
    );
  }),
  set_sheet_data: action((state, payload) => {
    state.google_sheet_data = payload;
  }),
  google_sheet_data: [],
};

function get_sheet<T>(key: string, sheet_num: number): Promise<GoolgeSheet<T>> {
  const promise = new Promise<GoolgeSheet<T>>(function (resolve, reject) {
    GetSheetDone.labeledCols(key, sheet_num)
      .then((sheet: any) => {
        resolve(sheet);
      })
      .catch((err: any) => {
        console.error(
          `Error fetching DOC_KEY ${key}, sheet number ${sheet_num}`
        );
      });
  });
  return promise;
}

export default appData;
