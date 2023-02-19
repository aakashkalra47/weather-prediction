interface WeatherSliceType {
    data: {
        city: {
            name: string
        },
        list: weatherListItem[]
    }
}
interface weatherListItem {
    clouds: any
    dt: number;
    dt_txt: string;
    main: {
        temp: number,
        pressure: number;
        humidity: number;
        dt_txt: string;
    };
    pop: any
    sys: any;
    visibility: number;
    weather: any[]
    wind: any
}
interface weatherApiResponseType {
    city: any;
    cnt: number;
    list: weatherListItem[];
    cod: string;
    message: string
}