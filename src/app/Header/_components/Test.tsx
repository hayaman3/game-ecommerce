"use client";
import { Badge, Button } from "@material-tailwind/react";
import { useState } from "react";

export function BadgeWithBorder() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  return (
    <Badge content={numberOfItems} withBorder>
      <Button className="rounded-full">Icon</Button>
    </Badge>
  );
}
