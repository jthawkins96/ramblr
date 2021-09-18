export default interface ActionModel<TPayload> {
    type: string;
    payload: TPayload;
}
