/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*async headers() {
    return [
      {
        source: "/gameBuild",
        headers: [
          {
            key: "Accept-Encoding",
            value: "gzip",
          },
        ],
      },
    ];
  },*/
};

module.exports = nextConfig;
