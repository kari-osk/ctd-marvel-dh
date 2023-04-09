
const imageHero = "https://cdn.alza.hu/Foto/LegendFoto/EN/Files/brandingpage/Marvel/img/header.jpg"
const imageHero1 = "https://th.bing.com/th/id/R.376267c14f84c8d5481d25f909b39a19?rik=7EqDB1LNY4Gj2A&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fmarvel-heroes-5k-ni.jpg&ehk=ucPhaq4TQbhWqM6AztMYeF%2bAMxZYnWq1uyRlwMnCRnY%3d&risl=1&pid=ImgRaw&r=0"

export default function Hero() {

  return (
    <div>
        <img
        src={imageHero}
        alt="Marvel"
        width={"100%"}

      />
    </div>
  );
}