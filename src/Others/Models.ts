export interface IBundleData {
    unit: string
    amount: number
}

export interface IBundle {
    bundle_name: string
    start_date: string
    bundle_validity_days: number
    data: Array<IBundleData>
}