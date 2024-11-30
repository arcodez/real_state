import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { CardFooterButton } from "./CardFooterButton";

type PropertyCardProps = {
  title?: string;
  altImage?: string;
  image?: string;
  description?: string;
  address?: string;
};

const PropertyCard = ({
  title = "Beautiful Family Home",
  altImage = "House exterior",
  image = "https://images.adsttc.com/media/images/5735/0b41/e58e/ce99/da00/004f/newsletter/IMG_0208_copy.jpg?1463094074g",
  description = "3 beds • 2 baths • 1,500 sqft",
  address = "123 Main St, Anytown, USA",
}: PropertyCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          alt={altImage}
          className="w-full h-48 object-cover rounded-md"
          height="200"
          src={image}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <p className="mt-2">{description}</p>
      </CardContent>

      <CardFooter>
        <CardFooterButton />
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
