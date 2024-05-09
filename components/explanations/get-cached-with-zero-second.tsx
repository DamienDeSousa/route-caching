"use client";

import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export const GetCachedWithZeroSecond = () => {
  const [response, setResponse] = useState<object>();

  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>/api/get-cached-with-zero-second</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <p>
          This one is a bit tricky.
          <br />
          Indeed, it&apos;s a cached route... acting like a dynamic route!
          <br />
          The revalidate option is set to 0. This means that the cache duration
          is 0 second. Every time you call this route, the cache has expired so
          it re-execute the route.
          <br />
          By default, the revalidate option is set to false. Which means that
          the resource should be cache indefinitely.
        </p>
        <div className="flex gap-10 items-center">
          <Button
            className="w-fit"
            onClick={async () => {
              const response = await fetch("/api/get-cached-with-zero-second");
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
