export default ({ env }) => {
  console.log(
    {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION"),
      params: {
        ACL: env("AWS_ACL", "public-read"), // 'private' if you want to make the uploaded files private
        Bucket: env("AWS_BUCKET"),
      },
    },
    "NEW?"
  );

  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET"),
            },
            region: env("AWS_REGION"),
            params: {
              //   ACL: env("AWS_ACL", "public-read"),
              //   signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        actionOptions: {
          upload: {
            ACL: null,
          },
          uploadStream: {
            ACL: null,
          },
        },
      },
    },
  };
};
