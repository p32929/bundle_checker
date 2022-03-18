import { Constants } from "../Others/Constants"
import { IBundle } from "../Others/Models"

export interface State {
    isShowingBundleAddDialog: boolean,
    bundles: Array<IBundle>
}

export const state: State = {
    isShowingBundleAddDialog: false,
    bundles: []
}
