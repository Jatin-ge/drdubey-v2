import { generatePageMetadata } from "@/lib/seo.config";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export const revalidate = 3600;

export const metadata = generatePageMetadata({
  title: "Achievements & Awards | Dr. Dheeraj Dubay",
  description: "Explore all achievements, awards, conferences and records of Dr. Dheeraj Dubay, Forbes World Record holder and Best Joint Replacement Surgeon in Jaipur.",
  slug: "achievements",
});

const CATEGORIES = ["All", "Award", "Conference", "Record", "Media"];

interface Achievement {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
  featuredOrder?: number | null;
}

async function getAchievements(): Promise<Achievement[]> {
  try {
    const { db } = await import("@/lib/db");
    const achievements = await db.achievement.findMany({
      orderBy: [
        { isFeatured: "desc" },
        { featuredOrder: "asc" },
        { createdAt: "desc" },
      ],
    });
    return achievements as Achievement[];
  } catch {
    return [];
  }
}

export default async function AchievementsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const achievements = await getAchievements();
  const activeCategory = searchParams.category || "All";

  const filtered =
    activeCategory === "All"
      ? achievements
      : achievements.filter((a) => a.category === activeCategory);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            Achievements & Awards
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Recognitions, records and milestones in Dr. Dheeraj Dubay&apos;s journey of excellence in joint replacement surgery.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={cat === "All" ? "/achievements" : `/achievements?category=${cat}`}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No achievements found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((achievement) => (
              <Link
                key={achievement.id}
                href={`/achievements/${achievement.slug}`}
                className="group block bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {achievement.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-blue-700 shadow">
                    {achievement.category}
                  </span>
                  {achievement.isFeatured && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-1">
                    {new Date(achievement.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                    {achievement.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {achievement.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
