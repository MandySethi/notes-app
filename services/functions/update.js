import handler from '../util/handler'
import dynamoDb from '../util/dynamoDb'

export const main = handler(async (event) => {
    const data = JSON.parse(event.body)
    const params = {
        TableName: process.env.TABLE_NAME,
        // 'Key' defines the partition key and sort key of the item to be updated
        Key: {
            userId: '123',
            noteId: event.pathParameters.id
        },
        UpdateExpression:'SET content = :content, attachment = :attachment',
        ExpressionAttributeValues: {
            ':content': data.content || null,
            ':attachment': data.attachment || null
        },
        ReturnValues: "ALL_NEW",
    }

    await dynamoDb.update(params)

    return {status: true}
})