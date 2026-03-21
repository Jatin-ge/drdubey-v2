import { generatePageMetadata } from "@/lib/seo.config";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import { YoutubePlayer } from "@/components/ui/video";
import { db } from "@/lib/db";
import GTM from "@/utils/GTM";

export const revalidate = 3600;

export const metadata = generatePageMetadata({
  title: "Patient Testimonials & Videos | Dr. Dheeraj Dubay",
  description:
    "Watch patient testimonials and surgery videos by Dr. Dheeraj Dubay, Forbes World Record holder for joint replacement surgeries.",
  slug: "youtube",
});

const Youtube = async () => {
  let youtube: any[] = [];
  try {
    youtube = await db.youTube.findMany({});
  } catch {
    youtube = [];
  }

  return (
    <>
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />
        <title>Patient Testimonials | Dr. Dheeraj Dubay</title>
        <meta
          name="description"
          content="Watch patient testimonials from Dr. Dheeraj Dubay's joint replacement surgeries."
        />
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            Patient Testimonials
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear from our patients about their joint replacement journey with
            Dr. Dheeraj Dubay
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {youtube.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            Testimonials coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {youtube.map((item) => (
              <YoutubePlayer key={item.id} url={item.link} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Youtube;
