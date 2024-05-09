import { GetCached } from "@/components/explanations/get-cached";
import { GetCachedWithZeroSecond } from "@/components/explanations/get-cached-with-zero-second";
import { GetDynamic } from "@/components/explanations/get-dynamic";
import { GetSession } from "@/components/explanations/get-session";
import { GetWithParams } from "@/components/explanations/get-with-params";
import { GetWithQueryParams } from "@/components/explanations/get-with-query-params";
import { Accordion } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-10 pt-20">
      <h1>Next.js x Caching api route x TypeScript</h1>
      <Accordion className="place-self-stretch" type="single" collapsible>
        <GetCached />
        <GetDynamic />
        <GetCachedWithZeroSecond />
        <GetWithParams />
        <GetWithQueryParams />
        <GetSession />
      </Accordion>
    </div>
  );
}
