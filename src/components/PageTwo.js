import { useNavigate } from "react-router-dom";

const PageTwo = ({ result, setResult }) => {
  const navigate = useNavigate();

  const resetResult = () => {
    setResult(0);
    navigate("/");
  };

  const Lulus = () => {
    return (
      <div className="container-lulus">
        <p className="title-lulus">Hai Maia!</p>
        <p className="teka-teki">
          @putri sleeping beauty, tanggal saat ini, zodiak wrisaba
        </p>

        <p className="note">*huruf kecil semua dan tidak menggunakan spasi</p>

        <button onClick={() => resetResult()} className="btn-lulus">
          Kembali
        </button>
      </div>
    );
  };

  const Gagal = () => {
    return (
      <>
        <h1>Anda gagal, anda bukan maia!</h1>
        <h3>Ulangi</h3>
        <button onClick={() => resetResult()}>Kembali</button>
      </>
    );
  };

  return <>{result === 8 ? <Lulus /> : <Gagal />}</>;
};

export default PageTwo;
