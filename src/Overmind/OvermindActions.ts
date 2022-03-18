import { Constants } from '../Others/Constants'
import { IBundle } from '../Others/Models'
import { Context } from './OvermindHelper'

export const showBundleAdderDialog = ({ state }: Context, value: boolean) => {
    state.isShowingBundleAddDialog = value
}

export const addBundle = ({ state }: Context, value: IBundle) => {
    state.bundles.push(value)
}