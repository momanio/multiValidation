import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

interface CardProps {
  children: React.ReactNode;
}

const CostumCard: React.FC<CardProps> = ({ children }) => {
  return (
    /*  <div className="w-1/2 p-6  bg-white/30 backdrop-blur-lg shadow-lg border border-white/10 text-black">
      {children}
    </div> */
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CostumCard;
