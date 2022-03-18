import { Constants } from "../Others/Constants"
import { IBundle } from "../Others/Models"

export interface State {
    isShowingBundleAddDialog: boolean,
    bundles: Array<IBundle>
    tempBundle: IBundle
}

export const state: State = {
    isShowingBundleAddDialog: true,
    bundles: [],
    tempBundle: Constants.dummyTempBundle
}
