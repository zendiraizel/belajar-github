function tambah(a, b) {
  return a + b;
}

const hasil = tambah(2, 3);

if (hasil !== 5) {
  throw new Error("Test gagal!");
}

console.log("✅ Semua test berhasil!");