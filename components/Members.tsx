import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Members: React.FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`/assets/team/margelo_faces_${id}.png`}
        alt={name}
        width={1366}
        height={1555}
        objectFit="contain"
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>{socialId}</Link>
      </div>
    </div>
  );
};

export default Members;
