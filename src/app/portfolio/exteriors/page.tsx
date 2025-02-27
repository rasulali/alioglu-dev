"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Exteriors = () => {
  return (
    <main className="w-screen relative bg-grayA">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text="Eksteryer Layihələri"
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            src="/exteriors/1/images/hero.jpg"
            name="Pinnacle Layihəsi"
            link="/portfolio/exteriors/1"
          />
          <Card
            src="/exteriors/2/images/hero.jpg"
            name="Terra Layihəsi"
            link="/portfolio/exteriors/2"
          />
          <Card
            src="/exteriors/3/images/hero.jpg"
            name="Zenith Layihəsi"
            link="/portfolio/exteriors/3"
          />
          <Card
            src="/exteriors/4/images/hero.jpg"
            name="Nebula Layihəsi"
            link="/portfolio/exteriors/4"
          />
          <Card
            src="/exteriors/5/images/hero.jpg"
            name="Skyreach Layihəsi"
            link="/portfolio/exteriors/5"
          />
          <Card
            src="/exteriors/6/images/hero.jpg"
            name="Quartz Layihəsi"
            link="/portfolio/exteriors/6"
          />
          <Card
            src="/exteriors/7/images/hero.jpg"
            name="Summit Layihəsi"
            link="/portfolio/exteriors/7"
          />
          <Card
            src="/exteriors/8/images/hero.jpg"
            name="Harbor Layihəsi"
            link="/portfolio/exteriors/8"
          />
          <Card
            src="/exteriors/9/images/hero.jpg"
            name="Aspect Layihəsi"
            link="/portfolio/exteriors/9"
          />
          <Card
            src="/exteriors/10/images/hero.jpg"
            name="Mosaic Layihəsi"
            link="/portfolio/exteriors/10"
          />
          <Card
            src="/exteriors/11/images/hero.jpg"
            name="Vertex Layihəsi"
            link="/portfolio/exteriors/11"
          />
          <Card
            src="/exteriors/12/images/hero.jpg"
            name="Horizon Layihəsi"
            link="/portfolio/exteriors/12"
          />
          <Card
            src="/exteriors/13/images/hero.jpg"
            name="Cascade Layihəsi"
            link="/portfolio/exteriors/13"
          />
          <Card
            src="/exteriors/14/images/hero.jpg"
            name="Serenity Layihəsi"
            link="/portfolio/exteriors/14"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Exteriors;
