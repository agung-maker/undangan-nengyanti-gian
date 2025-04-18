
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const audio = new Audio("/cinta-terakhirku.mp3");
    audio.loop = true;
    audio.play();
    return () => audio.pause();
  }, []);

  return (
    <main style={{ fontFamily: 'serif', backgroundColor: '#f5f0ea', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#6B4226' }}>Neng Yanti & Gian Ramadhan</h1>
      <p style={{ textAlign: 'center' }}>Dengan hormat, kami mengundang Anda untuk hadir dalam hari bahagia kami</p>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h2>Tanggal & Waktu</h2>
        <p>Sabtu, 1 Juni 2025, pukul 08.00 - Selesai</p>
        <h2>Lokasi</h2>
        <p>Desa Cibulan, Kecamatan Lemahsugih</p>
        <a href="https://www.google.com/maps?q=Desa+Cibulan+Kecamatan+Lemahsugih" target="_blank">Lihat di Google Maps</a>
        <h2>Konfirmasi Kehadiran</h2>
        <form>
          <input type="text" placeholder="Nama Anda" required style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }} />
          <button type="submit" style={{ backgroundColor: '#8B5E3C', color: 'white', padding: '0.5rem 1rem' }}>Konfirmasi</button>
        </form>
      </div>
    </main>
  );
}
