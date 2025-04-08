document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const uid = document.getElementById("uid").value;
  const nama = document.getElementById("nama").value;
  const keterangan = document.getElementById("keterangan").value;

  const statusEl = document.getElementById("status");

  fetch("https://absen-proxy.vercel.app/api/proxy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: uid,
      nama: nama,
      keterangan: keterangan,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      statusEl.innerHTML = `<span style="color: green;">${data}</span>`;
      document.getElementById("absenForm").reset();
    })
    .catch(() => {
      statusEl.innerHTML = "<span style='color: red;'>Gagal mengirim absen.</span>";
    });

  setTimeout(() => {
    statusEl.innerHTML = "";
  }, 5000);
});
