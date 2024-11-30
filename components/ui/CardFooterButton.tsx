import Link from "next/link";
import { Button } from "./button";

export function CardFooterButton({
  buttonLink = "/property-detail",
  buttonText = "View Details",
}) {
  return (
    <>
      <Link className="w-full " href={buttonLink}>
        <Button className="w-full ">{buttonText}</Button>
      </Link>
    </>
  );
}
