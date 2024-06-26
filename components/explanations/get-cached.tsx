"use client";

import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export const GetCached = () => {
  const [response, setResponse] = useState<object>();

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>/api/get-cached</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <p>
          This route will be cached indefinitely.
          <br />
          Indeed, when no option is set, the default behaviour is
          &quot;auto&quot;. this means that it will cache as much as possible
          without preventing any components from opting into dynamic behavior.
        </p>
        <div className="flex gap-10 items-center">
          <Button
            className="w-fit"
            onClick={async () => {
              const response = await fetch("/api/get-cached");
              const data = await response.json();
              setResponse({ ...data, status: response.status });
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
