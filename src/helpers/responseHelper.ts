type responsePayload = {
    apiStatus: number,
    responseStatus: number,
    message: string,
    data: any
}
export const responseObject = (res: any, { apiStatus, responseStatus, message, data }: responsePayload) => {
    return res.
        status(apiStatus).
        send({
            status: responseStatus,
            message,
            data
        })
}