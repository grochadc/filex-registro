import React from "react";

const messages = {
  "E3-4": { whatsapp: "https://chat.whatsapp.com/BcZ13FIvhPJ8bjSe6klKDX" },
  "E4-5": { whatsapp: "https://chat.whatsapp.com/LeHQJul5NoI9t0hVoaLiJv" },
  "E3-6": { whatsapp: "https://chat.whatsapp.com/DKbIRwlYUUAHWp915TOihD" },
  "E4-8": { whatsapp: "https://chat.whatsapp.com/Hfd1ZRi8HGqIPo8QD4SQBg" },
  "E3-9": { whatsapp: "https://chat.whatsapp.com/JOMKcOuO6lTC2iqY1tAoLJ" },
  "E3-10": { whatsapp: "https://chat.whatsapp.com/DdR3pjojvnf0crp8vbdAIW" },
  "E3-1": {
    classroom: "https://classroom.google.com/c/MTI3NjE5MTM0ODMy?cjc=c76sow3",
    whatsapp: "https://chat.whatsapp.com/IDoDKv1DyL8J6Mk1UUtYko"
  },
  "E3-2": {
    classroom: "https://classroom.google.com/c/NTQ3ODAwODExMzNa?cjc=3ykgfth",
    whatsapp: "https://chat.whatsapp.com/GqyL5VbxU6jC8AuyctuRyj"
  },
  "E3-3": {
    classroom: "https://classroom.google.com/c/MjQ3OTU0MTM1ODZa?cjc=lmq65yq",
    whatsapp: "https://chat.whatsapp.com/LvVVtZrvpebIcD7zrCxhMm"
  },
  "E3-5": {
    classroom: "https://classroom.google.com/c/NTQ3NzU2MzgxMjZa?cjc=vtdaz2o",
    whatsapp: "https://chat.whatsapp.com/B8DOO8ImmogCUYWn98s1KG"
  },
  "E3-7": {
    classroom: "https://classroom.google.com/c/NTQ3NzU2MzgxMzFa?cjc=cwbowpz",
    whatsapp: "https://chat.whatsapp.com/CBLb4w4AecIAhZBXCXMBRc"
  },
  "E3-8": {
    classroom: "https://classroom.google.com/c/NTQ3NzU2MzgxMzha?cjc=d3ps6h7",
    whatsapp: "https://chat.whatsapp.com/EM8KSY12ylm1dtIW8gJrpT"
  }
};

export default function Success(props) {
  const currentMessage = messages[props.info.schedule];
  return (
    <div>
      <h1>Felicidades {props.info.name}!</h1>
      <p>Ya estas inscrito en {props.info.schedule}</p>
      <p>
        {currentMessage.whatsapp && (
          <span>
            Grupo de whatsapp:{" "}
            <a href={currentMessage.whatsapp}>{currentMessage.whatsapp}</a>
          </span>
        )}
      </p>
      <p>
        {currentMessage.classroom && (
          <span>
            Invitacion a Google Classroom:{" "}
            <a href={currentMessage.classroom}>{currentMessage.classroom}</a>
          </span>
        )}
      </p>
    </div>
  );
}
