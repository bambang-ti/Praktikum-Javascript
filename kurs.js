// tahapan pertama, menyeleksi semua elemen yang dibutuhkan

        const input = document.querySelector(".input");
        const kursSelect = document.querySelector(".kurs");
        const hitungBtn = document.querySelector(".konversi");
        const hasil = document.querySelector(".hasil");

        const kursMataUang = {
            'dollarUs' : 9915,
            'euro' : 15888,
            'dollarSing' : 13472,
            'ringgit' : 874,
            'yenJepang' :120,
            'riyal' : 3592,
        }
        
        hitungBtn.addEventListener("click", function () {
            // mengambil nilai dari input dan select
            // ketika di klik
            // ambil pilihan user
            if (kursSelect.value == "dollarUs"){
                hasil.innerHTML = 'Hasil : Rp.' + input.value * kursMataUang.dollarUs;
            }
            else if (kursSelect.value == "euro"){
                hasil.innerHTML = 'Hasil : Rp.' + input.value * kursMataUang.euro;
            }
            else if (kursSelect.value == "dollarSing"){
                hasil.innerHTML = 'Hasil : Rp.' + input.value * kursMataUang.dollarSing;
            }
            else if (kursSelect.value == "ringgit"){
                hasil.innerHTML = 'Hasil : Rp.' + input.value * kursMataUang.ringgit;
            }
            else if (kursSelect.value == "yenJepang"){
                hasil.innerHTML = 'Hasil : Rp.' + input.value * kursMataUang.yenJepang;
            }
            else if (kursSelect.value == "riyal"){
                hasil.innerHTML = 'Hasil : Rp.' + input.value * kursMataUang.riyal;
            }
        })