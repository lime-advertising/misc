import Header from "@/components/layout/Header";
import Portfolio from "@/components/sections/Portfolio";
import PageBanner from "@/components/sections/PageBanner";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PageBanner title="Portfolio" />
      <Portfolio badgeVariant="silver" />
    </>
  );
}
