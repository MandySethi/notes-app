import * as uuid from "uuid";
import dynamoDb from "../util/dynamoDb";
import handler from "../util/handler";

export const main = handler(async (event) => {
  // Request body is passed in as a JSON encoded string in 'even.body'
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      //The attributes of the item to be created
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
      noteId: uuid.v1(), // A unique uuid for the note
      content: data.content, // Parsed from the request body
      attatchment: data.attachment, // Parsed from the request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
