"use client";

import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export const GetDynamic = () => {
  const [response, setResponse] = useState<object>();

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>/api/get-dynamic</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <p>
          This route will be executed every time it&apos;s called.
          <br />
          Indeed, when dynamic option is set to &quot;force-dynamic&quot;, then
          it will be execute every time you call it.
        </p>
        <div className="flex gap-10 items-center">
          <Button
            className="w-fit"
            onClick={async () => {
              const response = await fetch("/api/get-dynamic");
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
