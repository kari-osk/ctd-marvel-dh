import { ICharacter } from "utils/types/comics.types";



const imageHero = "https://wallpapercave.com/wp/wp4509365.jpg"
const imageHero1 = "https://th.bing.com/th/id/R.376267c14f84c8d5481d25f909b39a19?rik=7EqDB1LNY4Gj2A&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fmarvel-heroes-5k-ni.jpg&ehk=ucPhaq4TQbhWqM6AztMYeF%2bAMxZYnWq1uyRlwMnCRnY%3d&risl=1&pid=ImgRaw&r=0"

type PropsDetails = {
    data: ICharacter;
};

export default function Hero() {
  // { data }: PropsDetails
  // const character = data

  return (
    <div>
        <img
        src={imageHero1}
        alt="Heróis da Marvel"
        width={"100%"}
      />
    </div>
  );
}