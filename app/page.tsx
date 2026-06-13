import Link from "next/link";

const articles = [
 {
  title: "Produk",
  description:
    "Mengapa pelanggan membeli hasil akhir, bukan setiap komponen penyusun produk.",
  slug: "produk",
  image:
      "https://asset.kompas.com/crops/RDmjDi4q-zykUrRlXCNipg-xNtg=/91x0:680x393/1200x800/data/photo/2019/09/17/5d8079b43952d.jpg",
},
  {
  title: "Rentetan Kesialan Beni",
  description:
    "Cerita tentang Beni yang menghadapi serangkaian kesialan namun tetap berusaha bertahan.",
  slug: "cerpen",
  image: "https://pict.sindonews.net/dyn/850/pena/news/2022/02/25/700/697095/10-karakter-anime-yang-selalu-mengalami-nasib-sial-lmb.jpg"
}
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold">Blog, ditulis sambil duduk</h1>
          <p className="text-zinc-600 mt-1">
            Kumpulan Cerita dan Opini Tidak Populer
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {article.title}
                </h2>

                <p className="text-zinc-600">
                  {article.description}
                </p>

                <div className="mt-4 text-blue-600 font-medium">
                  Baca Selengkapnya →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}