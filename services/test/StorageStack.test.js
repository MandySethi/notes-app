import { Template } from "aws-cdk-lib/assertions";
import { StorageStack } from "../../stacks/StorageStack";
import { App, getStack } from "@serverless-stack/resources";
import { test } from "vitest";

test("StorageStack", () => {
  const app = new App();
  //WHEN
  app.stack(StorageStack);
  //THEN
  const template = Template.fromStack(getStack(StorageStack));
  template.hasResourceProperties("AWS::DynamoDB::Table", {
    BillingMode: "PAY_PER_REQUEST",
  });
});
