import { IBundle } from "./Models";

export class Constants {
    static dummyBundles: Array<IBundle> = [
        {
            bundle_name: "Teletalk 101 tk bundle",
            start_date: "26/02/2022",
            bundle_validity_days: 30,
            data: [
                {
                    unit: "MB",
                    amount: 1024 * 1.2
                },
                {
                    unit: "Minutes",
                    amount: 150,
                },
                {
                    unit: "SMS",
                    amount: 120,
                },
                {
                    unit: "Tk",
                    amount: 101,
                },
            ]
        }
    ]
}