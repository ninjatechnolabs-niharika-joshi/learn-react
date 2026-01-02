const foodappLogo = new URL("../../../foodApp.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url


const LogoComponent = () => {
  console.log("Image path:", foodappLogo); // Add this to debug

  return (
    <div className="logo">
      <img
        className="img-logo"
        src={foodappLogo}
        alt="Logo"
        onError={(e) => {
          console.error("Image failed to load:", e.target.src);
        }}
        onLoad={() => {
          console.log("Image loaded successfully");
        }}
      />
    </div>
  );
};


export default LogoComponent;