// app/cerpen/page.tsx

import Link from "next/link";

export default function CerpenPage() {
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
          Rentetan Kesialan Beni
        </h1>

        <div className="flex flex-wrap gap-2 text-zinc-600 border-b pb-4 mb-8">
          <span className="font-semibold">Cerpen</span>
          <span>•</span>
          <span>13 Juni 2026</span>
        </div>

        <p className="text-lg text-zinc-700 mb-6">
          Nasib kurang beruntung bisa terjadi lebih dari sekali, kadang bisa
          tiga kali secara beruntun. Jika kisah ini masih bisa diceritakan,
          itu artinya tokoh utama cerita ini masih bisa menikmati segelas kopi.
          Semua kisah ini bermula ketika Beni menjadi guru honorer.
        </p>

        <p className="mb-5">
          Guru adalah pekerjaan terhormat. Namun bayarannya tidak selalu
          mencerminkan penghormatan tersebut. Selama setahun, Beni berangkat
          pukul tujuh pagi dan pulang sekitar pukul satu siang dengan gaji
          enam ratus ribu rupiah per bulan.
        </p>

        <p className="mb-5">
          Uang itu cukup untuk makan dan sesekali membeli kopi. Namun bagi
          seorang pemuda berusia dua puluh empat tahun, jumlah tersebut
          membuat hidup terasa sempit. Setelah kebutuhan dasar terpenuhi,
          hampir tidak ada yang tersisa.
        </p>

        <p className="mb-5">
          Saat mengajar, Beni merasa dihargai. Murid-murid memanggilnya
          Pak Guru dan rekan kerja memperlakukannya dengan hormat. Namun
          ketika pulang dan melihat isi dompetnya, semua perasaan itu
          perlahan menghilang.
        </p>

        <p className="mb-5">
          Suatu ketika ia membuat SIM motor dan menghabiskan gaji satu
          bulan penuh. Di waktu lain, setelah menerima gaji, seorang teman
          meminjam uang lima ratus ribu rupiah dan berjanji mengembalikannya
          keesokan hari. Janji itu tidak pernah ditepati.
        </p>

        <p className="mb-5">
          Selama dua bulan Beni hampir tidak memegang uang. Ia mulai merasa
          hidup sedang mempermainkannya. Namun kesialan ternyata belum selesai.
        </p>

        <p className="mb-5">
          Beni kemudian pindah ke sekolah lain yang menjanjikan gaji satu
          juta tujuh ratus ribu rupiah per bulan. Harapan kembali muncul.
          Sayangnya, bulan pertama gaji tidak cair. Bulan kedua juga tidak.
          Begitu pula bulan ketiga.
        </p>

        <p className="mb-5">
          Sekolah itu ternyata sedang bermasalah. Di tengah ketidakpastian
          tersebut, telepon genggam Beni dicuri. Ia tidak punya uang untuk
          membeli yang baru sehingga ibunya membelikannya sebuah ponsel bekas.
        </p>

        <p className="mb-5">
          Ponsel itu hanya bertahan beberapa waktu. Ketika jatuh dan layarnya
          pecah, tidak ada suku cadang yang cocok untuk memperbaikinya.
          Ponsel itu pun berubah menjadi barang mati yang tersimpan di sudut
          kamar.
        </p>

        <p className="mb-5">
          Setelah melalui berbagai kesulitan, Beni akhirnya berhasil membeli
          sepeda motor bekas. Ia berharap hidupnya sedikit lebih mudah.
          Namun sehari setelah membeli motor itu, kuncinya hilang.
        </p>

        <p className="mb-5">
          Ia harus memanggil tukang kunci dan membayar biaya yang bahkan lebih
          besar dari THR yang diterimanya. Belum selesai sampai di situ,
          ternyata motor tersebut masih memiliki masalah kredit dari pemilik
          sebelumnya.
        </p>

        <p className="mb-5">
          Saat Beni pergi ke Jakarta, motor itu ditarik oleh pihak penagih.
          Uang jutaan rupiah yang sudah ia keluarkan seolah lenyap begitu saja.
          Orang yang menjual motor tersebut pun menghilang dan tidak mau
          bertanggung jawab.
        </p>

        <p className="mb-5">
          Dalam waktu yang tidak terlalu lama, Beni kehilangan uang, gaji,
          ponsel, dan motor. Rentetan kejadian itu membuatnya berkali-kali
          mempertanyakan nasibnya sendiri.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-5">
          Tetap Melangkah
        </h2>

        <p className="mb-5">
          Beni tidak pernah tahu seperti apa masa depannya. Kadang sulit
          baginya untuk tetap optimis ketika kenyataan terus memberikan
          pukulan bertubi-tubi.
        </p>

        <p className="mb-5">
          Namun di tengah semua kesialan itu, ia masih memiliki satu hal yang
          belum hilang: harapan. Ia memilih untuk bersabar, terus berusaha,
          dan berdoa agar masa depan yang lebih baik suatu hari benar-benar
          datang menghampirinya.
        </p>
      </article>
    </div>
  );
}