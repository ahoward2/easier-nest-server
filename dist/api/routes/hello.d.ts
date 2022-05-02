declare function handler(req: any, res: any): Promise<void>;
export declare const routeConfig: {
    path: string;
    handler: typeof handler;
};
export {};
