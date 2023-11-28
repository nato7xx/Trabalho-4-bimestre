import Image from "next/image";
import styles from "./Avatar.module.css";

export default function Avatar({ hasBorder = true, src }) {
  return (
    <Image
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
      width={20}
      height={20}
    />
  );
}
