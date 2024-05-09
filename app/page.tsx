export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript API</h1>
      <p>
        call the following route: <code>/api/get-cached</code>
      </p>
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
    </div>
  );
}
