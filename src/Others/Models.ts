export interface IBundleData {
    name: string
    amount: 0
}

export interface IBundle {
    name: string
    startDate: Date | null
    validity: number
    data: Array<IBundleData>
}