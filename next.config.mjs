/** @type {import('next').NextConfig} */

// Kiểm tra xem đang chạy dev hay đang build
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  // Nếu đang build (production) thì dùng basePath, còn chạy dev thì để trống
  basePath: isProd ? "/GP_POR.github.io" : "", 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;