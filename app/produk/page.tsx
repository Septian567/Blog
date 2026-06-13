// app/produk/page.tsx

import Link from "next/link";

export default function ProdukPage() {
  return (
    <div className="bg-zinc-100 min-h-screen py-10">
      <article className="max-w-4xl mx-auto bg-white px-6 md:px-10 py-10 rounded-xl shadow-sm">
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Kembali ke Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-3">
          Produk
        </h1>

        <div className="flex flex-wrap gap-2 text-zinc-600 border-b pb-4 mb-8">
          <span className="font-semibold">
            Penulis: Mr Frederickson
          </span>
          <span>•</span>
          <span>13 Juni 2026</span>
        </div>

        <p className="text-lg text-zinc-700 mb-6">
          Bayangkan jika saat menambal ban, tukang bengkel berkata bahwa membuka
          ban, menambal, dan memasangnya kembali adalah layanan yang berbeda dan
          harus dibayar terpisah. Tentu itu terdengar merepotkan. Kita datang
          bukan untuk membeli setiap tahap pekerjaan, melainkan hasil akhirnya:
          ban yang kembali bisa digunakan.
        </p>

        <p className="mb-5">
          Begitulah cara kerja sebuah produk. Produk yang dijual kepada
          pelanggan adalah hasil akhir yang sudah menggabungkan berbagai
          komponen dan keahlian yang diperlukan. Pelanggan tidak perlu memahami
          seluruh proses di baliknya. Mereka hanya peduli apakah masalah mereka
          terselesaikan atau tidak.
        </p>

        <p className="mb-5">
          Dalam jasa tambal ban, misalnya, seorang tukang bengkel harus mampu
          menemukan kebocoran, membuka ban, menambalnya, memasang kembali ban,
          dan memastikan ban aman digunakan. Pelanggan tidak membeli satu per
          satu keahlian tersebut. Mereka membeli hasil akhirnya: ban yang tidak
          bocor.
        </p>

        <p className="mb-5">
          Hal yang sama berlaku pada hampir semua produk dan jasa.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-5">
          Produk Adalah Gabungan Banyak Keahlian
        </h2>

        <p className="mb-5">
          Ketika seseorang menjual jasa pembuatan website, pelanggan tidak
          datang untuk membeli HTML, CSS, JavaScript, database, atau hosting
          secara terpisah. Yang mereka inginkan adalah sebuah website yang
          berfungsi.
        </p>

        <p className="mb-5">
          Agar dapat menjual jasa pembuatan website, seseorang biasanya harus
          menguasai berbagai keahlian sekaligus, seperti:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Memahami kebutuhan klien.</li>
          <li>Mendesain tampilan website.</li>
          <li>Membuat halaman web.</li>
          <li>Mengelola database.</li>
          <li>Menghubungkan frontend dan backend.</li>
          <li>Mengunggah website ke server.</li>
          <li>Memperbaiki bug dan kesalahan.</li>
        </ul>

        <p className="mb-5">
          Jika salah satu bagian penting tidak dikuasai, produk akhirnya bisa
          gagal. Website mungkin terlihat bagus tetapi tidak berfungsi, atau
          berfungsi tetapi tidak bisa diakses pengguna.
        </p>

        <p className="mb-5">
          Contoh lain adalah jasa asah golok. Pelanggan tidak datang untuk
          membeli proses menggesek besi ke batu asah. Mereka datang untuk
          mendapatkan golok yang tajam.
        </p>

        <p className="mb-5">
          Begitu juga dengan kursus mencukur. Orang tidak membayar untuk melihat
          instruktur memegang gunting atau mesin cukur. Mereka membayar agar
          mampu mencukur rambut dengan baik.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-5">
          Masalah Dalam Pembelajaran
        </h2>

        <p className="mb-5">
          Menariknya, dunia pendidikan sering bekerja secara berbeda. Jika
          sebuah jasa biasanya menjual produk jadi, maka pembelajaran sering
          kali hanya memberikan bahan mentah.
        </p>

        <p className="mb-5">
          Di sekolah, siswa belajar matematika, fisika, bahasa, dan berbagai
          mata pelajaran lainnya. Namun setelah bertahun-tahun belajar, hanya
          sebagian kecil yang benar-benar mampu menggunakan pengetahuan tersebut
          untuk membuat sesuatu.
        </p>

        <p className="mb-5">
          Hal ini bukan karena materinya tidak penting. Masalahnya adalah materi
          sering dipelajari secara terpisah, sementara dunia nyata membutuhkan
          gabungan dari banyak kemampuan sekaligus.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-5">
          Belajar Komponen Bukan Berarti Bisa Membuat Produk
        </h2>

        <p className="mb-5">
          Dalam dunia pemrograman, seseorang mungkin mempelajari HTML, React,
          dan CRUD API. Namun setelah menyelesaikan semua materi tersebut, belum
          tentu ia mampu membuat website yang berguna bagi pengguna.
        </p>

        <p className="mb-5">
          Produk akhir membutuhkan lebih dari sekadar kumpulan materi. Ia
          membutuhkan tujuan yang jelas, perencanaan, pengambilan keputusan,
          pengujian, perbaikan, dan pemahaman kebutuhan pengguna.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            Mempelajari teori bisnis belum tentu membuat seseorang mampu
            membangun usaha.
          </li>
          <li>
            Mempelajari tata bahasa belum tentu membuat seseorang mampu menulis
            buku.
          </li>
          <li>
            Mempelajari teknik mencukur belum tentu membuat seseorang mampu
            membuka barbershop.
          </li>
        </ul>

        <p className="mb-5">
          Mempelajari komponen tidak otomatis menghasilkan kemampuan membuat
          produk.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-5">
          Belajar Dari Produk, Bukan Hanya Dari Materi
        </h2>

        <p className="mb-5">
          Cara belajar yang lebih mendekati dunia nyata adalah memulai dari
          produk yang ingin dibuat.
        </p>

        <p className="mb-5">
          Misalnya, seseorang ingin membuat website toko online. Maka ia akan
          belajar desain, database, pembayaran, dan pemrograman sebagai alat
          untuk mencapai tujuan tersebut.
        </p>

        <p className="mb-5">
          Dengan pendekatan ini, materi tidak lagi terlihat sebagai kumpulan
          topik yang terpisah. Materi menjadi bagian dari sebuah produk yang
          lebih besar.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-5">
          Kesimpulan
        </h2>

        <p className="mb-5">
          Produk adalah sekumpulan keahlian yang digabungkan untuk menghasilkan
          manfaat bagi orang lain. Pelanggan membeli hasil akhirnya, bukan setiap
          komponen penyusunnya.
        </p>

        <p className="mb-5">
          Karena itu, belajar akan lebih efektif jika dimulai dari tujuan dan
          produk yang ingin dibuat. Setelah tujuan jelas, barulah berbagai
          materi dan keterampilan dipelajari sebagai alat untuk mewujudkannya.
        </p>
      </article>
    </div>
  );
}