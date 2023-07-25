const AWS = require("aws-sdk");

// INITIATING S3

let s3 = new AWS.S3({
  region: "us-east-1",
  accessKeyId: "AKIAX7A6N4FUZ4FFYFKA",
  secretAccessKey: "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",
});

// CREATING A BUCKET

s3.createBucket(
  {
    Bucket: "my-bucket-from-node",
  },
  (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  }
);

// CREATING AN OBJECT

s3.putObject(
  {
    Bucket: "my-bucket-from-node",
    Key: "demofile.text",
    Body: Buffer(
      "Demo text inside the demofile.txt upload to S3 from aws-sdk (node.js)"
    ),
  },
  (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  }
);

// DELETING AN OBJECT

s3.deleteObject(
  {
    Bucket: "my-bucket-from-node",
    Key: "demofile.text",
  },
  (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  }
);

// DELETING AN BUCKET

s3.deleteBucket(
  {
    Bucket: "my-bucket-from-node",
  },
  (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  }
);
