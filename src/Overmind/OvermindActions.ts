import { Constants } from '../Others/Constants'
import { IBundle, IBundleData } from '../Others/Models'
import { Context } from './OvermindHelper'

export const showBundleAdderDialog = ({ state }: Context, value: boolean) => {
    state.isShowingBundleAddDialog = value
}

export const setTempBundle = ({ state }: Context, value: IBundle | null) => {
    if (value) {
        state.tempBundle = value
    }
    else {
        state.tempBundle = Constants.dummyTempBundle
    }
}

