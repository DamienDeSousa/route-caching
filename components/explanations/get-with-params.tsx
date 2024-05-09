"use client";

import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export const GetWithParams = () => {
  const [response, setResponse] = useState<object>();

  return (
    <AccordionItem value="item-4">
      <AccordionTrigger>/api/get-with-param</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <p>
          This route is dynamic.
          <br />
          Indeed, a route with a paramter is a dynamic route.
          <br />
          Just as reminder, a parameter is something like /api/hello/[name].
        </p>
        <div className="flex gap-10 items-center">
          <Button
            className="w-fit"
            onClick={async () => {
              const response = await fetch("/api/get-with-param/something");
              const data = await response.json();
              setResponse(data);
            }}
          >
            try it !
          </Button>
          {response && <pre>{JSON.stringify(response)}</pre>}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
