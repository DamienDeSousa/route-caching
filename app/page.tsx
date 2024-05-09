import { GetCached } from "@/components/explanations/get-cached";
import { Accordion } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="px-10">
      <h1>Next.js + TypeScript API</h1>
      <Accordion type="single" collapsible>
        <GetCached />
      </Accordion>
      <p>
        call the following route: <code>/api/get-dynamic</code>
      </p>
      <p>
        call the following route: <code>/api/get-cached-with-zero-second</code>
      </p>
      <p>
        call the following route: <code>/api/get-with-param/something</code>
      </p>
      <p>
        call the following route:{" "}
        <code>/api/get-with-query-param?toto=something</code>
      </p>
      <p>
        call the following route: <code>/api/get-session</code>
      </p>
    </div>
  );
}
