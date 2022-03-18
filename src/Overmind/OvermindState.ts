import { IBundle } from "../Others/Models"

export interface State {
    isShowingBundleAddDialog: boolean,
    bundles: Array<IBundle>
}

export const state: State = {
    isShowingBundleAddDialog: true,
    bundles: []
}
