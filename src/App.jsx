import LogoCard from "./components/LogoCard";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-4">Lightsketch</h1>
      <LogoCard
        description="1Password helps you keep your digital life secure by storing passwords, credit card details, and documents in an encrypted vault. Generate strong passwords, access your data from any device, and enjoy peace of mind with 1Password\\'s robust security features."
        title="Secure your digital life"
        logo="https://logotypes.dev/static/logos/1password-glyph-color.svg"
        name="1password"
      />
    </div>
  );
};

export default App;
