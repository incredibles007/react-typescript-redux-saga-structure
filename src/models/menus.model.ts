export interface IOverheadMenuItem {
    id: string;
    title?: string;
    icon?: string;
    href?: string;
    children?: Array<IOverheadMenuItem>;
}
