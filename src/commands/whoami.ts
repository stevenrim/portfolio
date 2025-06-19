const whoamiObj = {
  "message" : [
    [
      "All projects and demonstrations in this portfolio are for educational",
      "and ethical cybersecurity research only. Every technique and tool was",
      "used legally within approved environments, adhering to ethical hacking", 
      "principles, legal regulations, and responsible disclosure practices.", 
      "Unauthorized use of these methods on systems without explicit permission",
      "is illegal and strictly discouraged. Always follow legal guidelines and",
      "obtain proper authorization before conducting security assessments.",
      "- "
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
