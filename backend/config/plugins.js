module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("hdxqvjx8d"),
      api_key: env("226391955645232"),
      api_secret: env("mM68VrokMFI-EzeTwGWh-x9HUnI"),
    },
  },
});
