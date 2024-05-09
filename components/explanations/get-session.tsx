"use client";

import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export const GetSession = () => {
  const [response, setResponse] = useState<object>();

  return (
    <AccordionItem value="item-6">
      <AccordionTrigger>/api/get-session (NextAuth)</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <p>
          In this example, I use NextAuth to manage session. I use a very simple
          auth config. I just want to show you how to get the session.
          <br />
          Here is shown the default behavior of NextAuth. I haven&apos;t
          investigate if it&apos;s possible to change the default behavior.
          <br />
          This route is dynamic because NextAuth will look at the cookies to get
          the session.
        </p>
        <div className="flex gap-10 items-center">
          <Button
            className="w-fit"
            onClick={async () => {
              const response = await fetch("/api/get-session");
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
