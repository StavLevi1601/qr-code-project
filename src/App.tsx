const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-custom-blue">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <img src="image-qr-code.png" alt="QR Code" className="mb-5 mx-auto" />
        <h1 className="text-lg font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-gray-700 mt-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default App;
