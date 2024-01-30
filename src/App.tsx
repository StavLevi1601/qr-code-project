import image from "./assets/image-qr-code.png";
const App = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-custom-blue">
      <div
        id="card"
        className="bg-white rounded-2xl shadow-lg text-center space-y-6 p-3 max-w-72"
      >
        <img
          src={image}
          alt="QR Code"
          height={576}
          width={576}
          className="rounded-xl"
        />
        <div className="space-y-2">
          <h1 className="text-lg font-extrabold">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-sm text-gray-700">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
