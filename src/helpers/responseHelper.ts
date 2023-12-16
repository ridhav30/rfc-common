type responsePayload = {
    apiStatus: number,
    responseStatus: number,
    message: string,
    data: any
}
export const responseGenerator = (res: any, { apiStatus, responseStatus, message, data }: responsePayload) => {
    return res.
        status(apiStatus).
        send({
            status: responseStatus,
            message,
            data
        })
}