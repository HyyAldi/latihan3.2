fetch("data.php")
    .then(res => res.json())
    .then(data => {
        const hasil = document.querySelector(".hasil")

        hasil.innerHTML = ""

        data.forEach((item ,index) => {
            const tr = document.createElement("tr")

            tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nisn}</td>
            <td>${item.nama}</td>
            <td>${item.jenisKelamin}</td>
            <td>
                <button class="hapus" data-id="${item.id}">Hapus</button>
            </td>`

            hasil.appendChild(tr)
        })
        document.querySelectorAll(".hapus").forEach(btn => {
            btn.addEventListener("click", function () {

                const id = this.getAttribute("data-id")
        
                if (confirm("Yakin DECKKK??")) {
                    fetch("deleteData.php", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id: id })
                    })
                        .then(res => res.json())
                        .then(res => {
                            alert(res.pesan)
                            location.reload()
                        })
                        .catch(error => console.log(error))
                }
            })
        })
    })
    .catch(error => console.log(error))

document.querySelector("#formSiswa").addEventListener("submit", function(){

    let nisn = document.querySelector("#nisn").value
    let nama = document.querySelector("#nama").value
    let jenisKelamin = document.querySelector("#jenisKelamin").value

    fetch("addData.php", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            nisn:nisn,
            nama:nama,
            jenisKelamin:jenisKelamin
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.pesan)
    })
    .catch(error => console.log(error))
})