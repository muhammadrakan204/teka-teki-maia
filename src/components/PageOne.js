import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const PageOne = ({ result, setResult }) => {
  const navigate = useNavigate();

  const perhitungan = (anjas) => {
    setResult((prev) => prev + anjas);
  };
  alert(
    "link ini khusus diberikan hanya untuk maia, jika anda bukan maia silahkan tutup link ini"
  );
  alert(
    "saya telah menyediakan beberapa pertanyaan untuk membuktikan apakah anda maia atau bukan, silahkan diisi dengan benar!"
  );
  alert(
    "ada beberapa rules yang harus anda pahami, yaitu \n- PERTANYAAN BERUPA PILIHAN GANDA, JIKA ANDA SALAH MEMENCET JAWABAN ANDA, SILAHKAN REFRESH UNTUK MENGULANGI \n- JAWABAN ANDA HARUS BENAR SEMUA UNTUK MEMBUKTIKAN APAKAH ANDA MAIA ATAU BUKAN"
  );
  alert("Selamat mengerjakan");

  return (
    <div className="App">
      <div className="container">
        <p className="question">
          Jika aku maia, aku akan memilih bubur yang...{" "}
        </p>
        <div className="question-container">
          <div className="question-content">
            <input id="buburA" type="radio" name="bubur" />
            <label for="buburA">Diaduk</label>
          </div>
          <div className="question-content">
            <input
              id="buburB"
              type="radio"
              name="bubur"
              onClick={() => perhitungan(1)}
            />
            <label for="buburB">Tidak diaduk</label>
          </div>
          <div className="question-content">
            <input id="buburC" type="radio" name="bubur" />
            <label for="buburC">Setengah diaduk</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">
          Jika aku maia, saat aku dimotor aku pasti...{" "}
        </p>
        <div className="question-container">
          <div className="question-content">
            <input
              id="jalanA"
              type="radio"
              name="jalan"
              onClick={() => perhitungan(1)}
            />
            <label for="jalanA">Ngoceh mulu</label>
          </div>
          <div className="question-content">
            <input id="jalanB" type="radio" name="jalan" />
            <label for="jalanB">Diam saja</label>
          </div>
          <div className="question-content">
            <input id="jalanC" type="radio" name="jalan" />
            <label for="jalanC">Shalawatan</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">
          Jika aku maia, aku tidak akan membeli pocky dengan rasa...{" "}
        </p>
        <div className="question-container">
          <div className="question-content">
            <input
              id="pockyA"
              type="radio"
              name="pocky"
              onClick={() => perhitungan(1)}
            />
            <label for="pockyA">Kelapa</label>
          </div>
          <div className="question-content">
            <input id="pockyB" type="radio" name="pocky" />
            <label for="pockyB">Cokelat</label>
          </div>
          <div className="question-content">
            <input id="pockyC" type="radio" name="pocky" />
            <label for="pockyC">Strawberry</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">
          Jika aku maia, saat aku sedang curhat, aku lebih suka di...{" "}
        </p>
        <div className="question-container">
          <div className="question-content">
            <input id="curhatA" type="radio" name="curhat" />
            <label for="curhatA">Nasihati dengan lembut</label>
          </div>
          <div className="question-content">
            <input id="curhatB" type="radio" name="curhat" />
            <label for="curhatB">
              Beri saran untuk mendapatkan jalan keluarnya
            </label>
          </div>
          <div className="question-content">
            <input
              id="curhatC"
              type="radio"
              name="curhat"
              onClick={() => perhitungan(1)}
            />
            <label for="curhatC">Dengarkan dan ditenangkan</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">Jika aku maia, aku tidak menyukai buah...</p>
        <div className="question-container">
          <div className="question-content">
            <input
              id="buahA"
              type="radio"
              name="buah"
              onClick={() => perhitungan(1)}
            />
            <label for="buahA">Durian</label>
          </div>
          <div className="question-content">
            <input id="buahB" type="radio" name="buah" />
            <label for="buahB">Semangka</label>
          </div>
          <div className="question-content">
            <input id="buahC" type="radio" name="buah" />
            <label for="buahC">Strawberry</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">
          Jika aku maia, aku akan memilih menu mie ayam yang...
        </p>
        <div className="question-container">
          <div className="question-content">
            <input id="mieA" type="radio" name="mie" />
            <label for="mieA">tidak pakai toge, pakai sayur</label>
          </div>
          <div className="question-content">
            <input id="mieB" type="radio" name="mie" />
            <label for="mieB">pakai toge, tidak pakai sayur</label>
          </div>
          <div className="question-content">
            <input
              id="mieC"
              type="radio"
              name="mie"
              onClick={() => perhitungan(1)}
            />
            <label for="mieC">tidak pakai toge, tidak pakai sayur</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">
          Jika aku maia, aku memiliki hewan peliharaan bernama...
        </p>
        <div className="question-container">
          <div className="question-content">
            <input id="petA" type="radio" name="pet" />
            <label for="petA">Ken</label>
          </div>
          <div className="question-content">
            <input
              id="petB"
              type="radio"
              name="pet"
              onClick={() => perhitungan(1)}
            />
            <label for="petB">Acel</label>
          </div>
          <div className="question-content">
            <input id="petC" type="radio" name="pet" />
            <label for="petC">Rojak</label>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="question">
          Jika aku maia, aku lebih suka menonton film...
        </p>
        <div className="question-container">
          <div className="question-content">
            <input id="fimlA" type="radio" name="film" />
            <label for="fimlA">DC</label>
          </div>
          <div className="question-content">
            <input
              id="filmB"
              type="radio"
              name="film"
              onClick={() => perhitungan(1)}
            />
            <label for="filmB">Marvel</label>
          </div>
          <div className="question-content">
            <input id="filmC" type="radio" name="film" />
            <label for="filmC">Cintaku terpatil juragan lele </label>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/happysweetseventeen")}
        className="btn-submit"
      >
        Submit
      </button>
    </div>
  );
};

export default PageOne;
