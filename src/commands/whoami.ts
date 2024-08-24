const whoamiObj = {
  "message" : [
    [
      "Thank you for taking the time to visit my portfolio as I chronicle my journey into InfoSec. Here, you'll find my hands-on labs from online platforms like HTB and THM, and ethical projects inspired by amazing security YouTubers. This journey isn't just about me, it's also about inspiring you. Whether you're an enthusiast, a budding cyberwarrior, or a future employer, know that every keystroke, every byte, and every analysis tells a story. Mine is just beginning and I hope what I share here adds a spark to your own adventure. -"
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>Yours truly, Steven aka 9purp0s3</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
