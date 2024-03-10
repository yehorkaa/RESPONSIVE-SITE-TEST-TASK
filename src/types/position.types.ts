

export interface IPositionResponse {
    success: boolean;
    positions: IPosition[] | null;
}

export interface IPosition {
    id: number
    name: string
}
