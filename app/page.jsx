import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (<div class="container">
        <header>
            <h1>Tangerang: Kota Industri yang Kini Bertransformasi Menjadi Surga Bisnis Modern</h1>
            <p>Peluang, Strategi, dan Wawasan Lengkap untuk Berbisnis di Tangerang</p>
        </header>

        <div class="image-container">
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1500" alt="Pemandangan Kota Tangerang dengan gedung-gedung modern dan kawasan industri" width="800" />
            <p class="caption">Skyline modern Kota Tangerang yang menunjukkan paduan kawasan industri dan perkantoran baru, mencerminkan dinamika bisnis yang tumbuh pesat.</p>
        </div>

        <section>
            <p>Sebagai salah satu kota dengan pertumbuhan ekonomi tercepat di Indonesia, Tangerang telah lama melampaui identitasnya sebagai <em>hinterland</em> Jakarta. Kota ini telah bertransformasi menjadi pusat bisnis yang mandiri, dinamis, dan penuh peluang. Terletak strategis di Provinsi Banten dan berbatasan langsung dengan Ibu Kota, Tangerang menawarkan ekosistem bisnis yang unik: paduan kekuatan industri manufaktur tradisional dengan geliat bisnis modern di bidang teknologi, properti, dan jasa. Jika Anda mencari tempat untuk merintis, mengembangkan, atau bahkan memindahkan usaha, memahami lanskap bisnis di Tangerang adalah langkah pertama yang crucial.</p>
            
            <p>Artikel ini akan membedah secara lengkap potensi, peluang, tantangan, dan strategi untuk masuk ke dalam dunia bisnis di Tangerang. Kita akan jelajahi mulai dari sektor-sektor unggulan, prosedur perizinan, hingga tips memilih lokasi yang tepat.</p>
        </section>

        <section>
            <h2>Mengapa Memilih Tangerang Sebagai Basis Bisnis Anda?</h2>
            <p>Alasan utama para investor, dari UKM hingga korporasi multinasional, menanamkan modalnya di Tangerang tidak lepas dari beberapa faktor fundamental yang sulit ditemukan di tempat lain.</p>
            
            <h3>Lokasi Strategis dan Aksesibilitas Tinggi</h3>
            <p>Tangerang terhubung sempurna dengan Jakarta melalui berbagai jalur tol (Tol Jakarta-Merak, Tol Tangerang-Merak, Tol JORR) dan jalan nasional. Bandara Internasional Soekarno-Hatta yang merupakan gerbang utama Indonesia, secara administratif berada di wilayah Tangerang. Menurut data dari <span class="keyword">Badan Pusat Statistik (BPS) Kota Tangerang</span>, arus logistik dan manusia melalui bandara ini memberikan dampak multiplier yang signifikan bagi sektor perdagangan dan jasa di kota ini.</p>
            
            <h3>Infrastruktur yang Terus Berkembang</h3>
            <p>Pemerintah terus berinvestasi dalam infrastruktur. Keberadaan kawasan-kawasan industri terpadu seperti GIIC (Greenland International Industrial Center) dan MITC (Modern Industrial and Technology Center) dilengkapi dengan infrastruktur kelas dunia. Tidak hanya itu, pembangunan pusat perbelanjaan, rumah sakit, dan kawasan permukiman elite menciptakan ekosistem yang lengkap bagi pebisnis dan karyawan.</p>
            
            <h3>Ketersediaan Tenaga Kerja yang Kompeten</h3>
            <p>Dekatnya Tangerang dengan Jakarta dan adanya banyak universitas dan politeknik di sekitarnya (seperti Universitas Multimedia Nusantara, Swiss German University, dll.) menjamin ketersediaan tenaga kerja terampil, baik untuk level operator maupun manajerial.</p>
            
            <h3>Iklim Investasi yang Kondusif</h3>
            <p>Pemerintah Kota Tangerang dan Kabupaten Tangerang dikenal pro-investasi. Layanan perizinan seperti Online Single Submission (OSS) terus dimudahkan untuk mempercepat dimulainya sebuah usaha. Menurut <span class="keyword">Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Tangerang</span>, waktu perizinan usaha untuk beberapa sektor telah dipangkas hingga 50% dalam beberapa tahun terakhir.</p>
        </section>

        <section>
            <h2>Sektor-Sektor Bisnis Unggulan di Tangerang</h2>
            <p>Lanskap <a href='https://sites.google.com/view/tangerangbisnis/'>perekonomian Tangerang</a> sangat beragam. Berikut adalah sektor-sektor yang menjadi tulang punggung dan memiliki prospek cerah untuk masa depan.</p>
            
            <h3>Kawasan Industri dan Manufaktur</h3>
            <p>Ini adalah DNA ekonomi Tangerang. Puluhan kawasan industri berjejer dari Tangerang Selatan hingga ke Kabupaten Tangerang. Sektor ini menampung ratusan perusahaan multinasional dan nasional.</p>
            
            <div class="highlight">
                <p><strong>Subsektor Andalan:</strong> Otomotif (seperti Honda, Yamaha), elektronik, tekstil, makanan dan minuman, serta barang kimia.</p>
                <p><strong>Peluang:</strong> Bukan hanya untuk investor besar. UKM memiliki peluang besar sebagai vendor atau penyedia jasa pendukung (supporting industry) seperti percetakan packaging, komponen spare part, hingga jasa logistik.</p>
            </div>
            
            <h3>Bisnis Properti dan Real Estate</h3>
            <p>Transformasi Tangerang dari kota industri menjadi kota metropolitan lengkap memicu ledakan di sektor properti. Kebutuhan akan perumahan, apartemen, ruang kantor, dan ruko sangat tinggi.</p>
            
            <div class="highlight">
                <p><strong>Area Hotspot:</strong> BSD City, Alam Sutera, Gading Serpong, Lippo Village, dan Kota Tangerang Selatan.</p>
                <p><strong>Peluang:</strong> Pengembangan properti komersial (seperti co-working space, retail strip, dan apartemen hemat energi), serta jasa terkait properti seperti agen penjualan, konsultan interior, dan property management.</p>
            </div>
            
            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1600591362801-4dde5d38e6d6?auto=format&fit=crop&q=80&w=1500" alt="Kawasan bisnis dan properti modern di Tangerang" width="800" />
                <p class="caption">Kawasan bisnis dan properti modern di Tangerang menawarkan peluang investasi yang menguntungkan.</p>
            </div>
            
            <h3>Pusat Perbelanjaan dan Retail</h3>
            <p>Tangerang adalah surga bagi pebisnis retail. Daya beli masyarakat yang tinggi diimbangi dengan banyaknya pusat perbelanjaan modern.</p>
            
            <div class="highlight">
                <p><strong>Fakta:</strong> Menurut <span class="keyword">Asosiasi Pengelola Pusat Belanja Indonesia (APPBI)</span>, Tangerang memiliki lebih dari 20 mall besar dengan tingkat okupansi rata-rata di atas 85% pasca pandemi.</p>
                <p><strong>Peluang:</strong> Membuka gerai franchise makanan & minuman (F&B), retail fashion, toko produk spesialis (hobi, olahraga, elektronik), atau menyediakan jasa di dalam mall seperti daycare center atau tempat hiburan.</p>
            </div>
            
            <h3>Kuliner dan Makanan</h3>
            <p>Kuliner adalah jiwa dari setiap kota. Masyarakat Tangerang yang heterogen dari berbagai suku dan budaya memiliki selera kuliner yang sangat beragam dan dinamis.</p>
            
            <div class="highlight">
                <p><strong>Tren:</strong> Makanan kekinian (fusion food), cafe instagrammable, dan makanan sehat (healthy food) sedang sangat digemari.</p>
                <p><strong>Peluang:</strong> Membuka resto dengan konsep unik, layanan catering corporate untuk pabrik-pabrik, dan memanfaatkan platform delivery online seperti GoFood dan GrabFood.</p>
            </div>
            
            <h3>Teknologi dan Startup Digital</h3>
            <p>Ekosistem digital di Tangerang, terutama di kawasan Gading Serpong dan Alam Sutera, sedang tumbuh subur. Banyak startup lahir dari kawasan ini.</p>
            
            <div class="highlight">
                <p><strong>Fokus:</strong> E-commerce, fintech, edutech, dan software development.</p>
                <p><strong>Peluang:</strong> Membuka software house, menjadi mitra pengembang aplikasi, atau memulai startup yang menyelesaikan masalah spesifik di wilayah Tangerang, seperti logistik antar pabrik atau platform jasa home service.</p>
            </div>
        </section>

        <section>
            <h2>Rangkuman Data Potensi Bisnis Tangerang</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>Aspek</th>
                        <th>Data & Fakta</th>
                        <th>Sumber</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Pertumbuhan Ekonomi</strong></td>
                        <td>rata-rata 6.2% per tahun (2021-2023)</td>
                        <td>BPS Kota Tangerang</td>
                    </tr>
                    <tr>
                        <td><strong>Jumlah Kawasan Industri</strong></td>
                        <td> 30 kawasan industri terpadu</td>
                        <td>Dinas Perindustrian</td>
                    </tr>
                    <tr>
                        <td><strong>Daya Beli Masyarakat</strong></td>
                        <td>Termasuk 5 besar kota dengan daya beli tertinggi di Indonesia</td>
                        <td>Badan Pusat Statistik (BPS)</td>
                    </tr>
                    <tr>
                        <td><strong>Target Investasi</strong></td>
                        <td>Rp 15 Triliun (2024)</td>
                        <td>DPMPTSP Kota Tangerang</td>
                    </tr>
                    <tr>
                        <td><strong>Sektor Penyumbang PDRB Terbesar</strong></td>
                        <td>Industri Pengolahan, Perdagangan, Jasa</td>
                        <td>BPS Provinsi Banten</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Memulai Bisnis di Tangerang: Langkah-Langkah Praktis</h2>
            
            <ol>
                <li><strong>Riset Pasar dan Lokasi:</strong> Tentukan target pasar Anda dan lakukan survey lokasi secara langsung. Traffic, demografi sekitar, dan keberadaan kompetitor adalah hal krusial.</li>
                <li><strong>Pilih Badan Usaha:</strong> Tentukan apakah Anda akan mendirikan PT, CV, atau Usaha Perorangan. Sesuaikan dengan skala dan risiko bisnis.</li>
                <li><strong>Urus Perizinan melalui OSS:</strong> Kunjungi portal oss.go.id. Menurut <span class="keyword">BKPM (Badan Koordinasi Penanaman Modal)</span>, semua izin usaha baik skala kecil maupun besar harus melalui sistem Online Single Submission ini.</li>
                <li><strong>Siapkan Modal dan Operasional:</strong> Hitung modal investasi dan modal kerja dengan cermat. Cari pembiayaan jika diperlukan dari bank atau investor.</li>
                <li><strong>Buat Strategi Pemasaran:</strong> Manfaatkan pemasaran digital (Instagram, TikTok, Google Business) untuk menjangkau pasar yang lebih luas di Tangerang.</li>
            </ol>
        </section>

        <section>
            <h2>Tantangan Berbisnis di Tangerang dan Solusinya</h2>
            
            <div class="highlight">
                <p><strong>Tantangan:</strong> Kompetisi yang Ketat.</p>
                <p><strong>Solusi:</strong> Bangun Unique Selling Proposition (USP) yang kuat dan fokus pada layanan pelanggan yang unggul.</p>
            </div>
            
            <div class="highlight">
                <p><strong>Tantangan:</strong> Kemacetan Lalu Lintas.</p>
                <p><strong>Solusi:</strong> Pilih lokasi yang mudah diakses dan pertimbangkan manajemen logistik yang efisien, termasuk menggunakan jasa kurir lokal.</p>
            </div>
            
            <div class="highlight">
                <p><strong>Tantangan:</strong> Biaya Operasional yang Tinggi.</p>
                <p><strong>Solusi:</strong> Lakukan efisiensi dengan memanfaatkan teknologi dan buat perencanaan keuangan yang disiplin.</p>
            </div>
        </section>

        <div class="image-container">
            <img src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=1500" alt="Meeting bisnis di ruang kerja modern di Tangerang" width="800" /> 
            <p class="caption">Meeting bisnis di ruang kerja modern di Tangerang, mencerminkan perkembangan ekosistem bisnis yang profesional.</p>
        </div>

        <section>
            <h2>FAQ (Pertanyaan yang Sering Ditanyakan)</h2>
            
            <div class="faq-container">
                <div class="faq-item">
                    <p class="faq-question">Q1: Apa saja kawasan industri terbesar di Tangerang?</p>
                    <p>A: Beberapa yang terbesar dan terkenal adalah GIIC (Cikupa), EJIP (Cikarang Selatan), BSD Industrial Park, dan Lippo Cikarang.</p>
                </div>
                
                <div class="faq-item">
                    <p class="faq-question">Q2: Bagaimana prospek bisnis franchise makanan di Tangerang?</p>
                    <p>A: Sangat prospektif mengingat daya beli dan gaya hidup masyarakatnya. Lakukan riset mendalam tentang konsep franchise dan pilih lokasi dengan traffic tinggi seperti dekat perkantoran atau kampus.</p>
                </div>
                
                <div class="faq-item">
                    <p class="faq-question">Q3: Apakah ada insentif perpajakan untuk investor baru di Tangerang?</p>
                    <p>A: Ya, pemerintah biasanya menawarkan insentif seperti tax allowance atau tax holiday untuk investasi di sektor-sektor tertentu dan dengan nilai tertentu. Informasi detailnya bisa didapatkan dari DPMPTSP setempat.</p>
                </div>
                
                <div class="faq-item">
                    <p class="faq-question">Q4: Bisnis online apa yang cocok digeluti dari Tangerang?</p>
                    <p>A: Dropshipping atau reseller produk industrial tools, fashion, dan curated local products (seperti kerajinan atau makanan khas) memiliki potensi besar karena dukungan supply chain yang kuat.</p>
                </div>
                
                <div class="faq-item">
                    <p class="faq-question">Q5: Bagaimana cara mendapatkan informasi tentang perizinan?</p>
                    <p>A: Anda bisa mengunjungi langsung kantor DPMPTSP Kota/Kabupaten Tangerang atau mengakses website dan channel sosial media mereka untuk panduan yang jelas.</p>
                </div>
                
                <div class="faq-item">
                    <p class="faq-question">Q6: Area mana yang paling potensial untuk bisnis properti?</p>
                    <p>A: Kawasan yang masih berkembang seperti di sekitar BSD City, Alam Sutera, dan jalur menuju Bandara Soekarno-Hatta masih menawarkan potensi kenaikan harga yang signifikan.</p>
                </div>
            </div>
        </section>

        

        <section>
            <h2>Sumber Referensi</h2>
            
            <div class="source-list">
                <ol>
                    <li>Badan Pusat Statistik (BPS) Kota Tangerang. (2023). <em>Kota Tangerang Dalam Angka 2023</em>.</li>
                    <li>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Tangerang. (2024). <em>Laporan Kinerja Tahun 2023</em>.</li>
                    <li>BKPM. (2024). <em>Pedoman Penggunaan Sistem OSS</em>.</li>
                    <li>Asosiasi Pengelola Pusat Belanja Indonesia (APPBI). (2023). <em>Market Report Retail Indonesia 2023</em>.</li>
                    <li>Kamar Dagang dan Industri (KADIN) Indonesia. (2024). <em>Prospek Investasi Wilayah Banten</em>.</li>
                </ol>
            </div>
        </section>

        <section>
            <h2>Lokasi Kantor DPMPTSP Kota Tangerang</h2>
            
            <div class="map-container">
                <div class="map-placeholder">
                    <h3>Peta Lokasi Kantor DPMPTSP Kota Tangerang</h3>
                    <p>Jl. Kisamaun No.1, Sukaasih, Kec. Tangerang, Kota Tangerang, Banten 15111</p>
                    <p><em>(Peta interaktif dapat dilihat di website resmi DPMPTSP Kota Tangerang)</em></p>
                </div>
            </div>
        </section>

        <div class="conclusion">
            <p>Tangerang bukan lagi sekadar "kota penyangga". Ia telah menjadi kekuatan ekonomi utama yang mandiri dan terus berinovasi. Dari gemuruh mesin di pabrik-pabrik hingga ketikan keyboard di startup digital, setiap sudutnya berdenyut dengan energi bisnis yang membara. Peluangnya terbuka lebar bagi siapapun yang memiliki visi, keberanian, dan strategi yang tepat. <strong>Tangerang bukan hanya tempat bisnis beroperasi, tapi di sinilah bisnis itu bertumbuh dan berkembang pesat.</strong></p>
        </div>
    </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
