

export type TokenType = string | undefined;

export interface ILoginResponse {
    success: boolean;
    token: TokenType;
}