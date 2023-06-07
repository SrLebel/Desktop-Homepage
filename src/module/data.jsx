const School = [
    {name: "Uni System", anchor: "https://prep20202.usc.edu.co/"},
    {name: "Outlook", anchor: "https://outlook.com/"},
    {name: "MS Teams", anchor: "https://teams.microsoft.com/go#"},
    {name: "Schedule", anchor: "NaN"},
];

const Util = [
    {name: "GitHub", anchor:"https://github.com/"},
    {name: "ArchLinux Docs", anchor:"https://archlinux.org/"},
    {name: "W3Schools", anchor: "https://www.w3schools.com/"},
    {name: "HackerRank", anchor: "https://www.hackerrank.com/"}
];

const Media = [
    {name: "Youtube", anchor: "https://www.youtube.com/"},
    {name: "myNoise", anchor: "https://mynoise.net/"},
    {name: "SoundCloud", anchor: "https://soundcloud.com/"},
    {name: "Twitch", anchor: "https://www.twitch.tv/"},
];

const Other = [
    {name: "Reddit", anchor: "https://www.reddit.com/"},
    {name: "Twitter", anchor: "https://twitter.com/"},
    {name: "MonkeyType", anchor: "https://monkeytype.com/"},
    {name: "MyAnimeList", anchor: "https://myanimelist.net/"},
];

export default function Data (){
  return(
    <div className='container'>
      <h2> School </h2>
      <div className='card grid sc'>
        {School.map((info) => (
          <li key={info.name}>
          <a
            href={info.anchor}
          >{info.name}</a>
          </li>
        ))}
      </div>
      <h2> Utils </h2>
      <div className='card grid ut'>
        {Util.map((info) => (
          <li key={info.name}>
          <a
            href={info.anchor}
          >{info.name}</a>
          </li>
        ))}
      </div>
      <h2> Media </h2>
      <div className='card grid me'>
        {Media.map((info) => (
          <li key={info.name}>
          <a
            href={info.anchor}
          >{info.name}</a>
          </li>
        ))}
      </div>
      <h2> Other </h2>
      <div className='card grid ot'>
        {Other.map((info) => (
          <li key={info.name}>
          <a
            href={info.anchor}
          >{info.name}</a>
          </li>
        ))}
      </div>
    </div>
  );
}