import { ChangeEvent } from "react";


export interface IInputs {
    inputs: IInput[],
    className?: string,
}

export interface IInput {
    type: string,
    placeholder: string,
    name: string,
}

export type handleInputChange = (e: ChangeEvent<HTMLInputElement>) => void