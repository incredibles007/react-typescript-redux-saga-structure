export interface ILoginError {
    data?: {
        text: string;
        type: number;
    };
    status?: number;
    statusText?: string;
}

export type TError = ILoginError;
