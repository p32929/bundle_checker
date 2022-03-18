export interface IBundleData {
    name: string
    amount: 0
}

export interface IBundle {
    bundle_name: string
    start_date: string
    bundle_validity: number
    data: Array<IBundleData>
}