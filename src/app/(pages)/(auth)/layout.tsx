import { BannerLeft } from '../../../components/banner-left/index';


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
         <BannerLeft> 
            {children}
         </BannerLeft>
      </body>
    </html>
  );
}
