"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CountryPage() {
  const { val } = useParams<{ val: string }>();
  const [country, setCountry] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCountry() {
      try {
        const response = await fetch(
          `/api/countries?val=${encodeURIComponent(val)}`
        );

        if (!response.ok) {
          throw new Error(`Country request failed (${response.status}).`);
        }

        const result: unknown = await response.json();
        setCountry(result);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Country request failed."
        );
      }
    }

    loadCountry();
  }, [val]);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">

      <h1 className="text-3xl font-semibold capitalize tracking-tight text-white">
        {decodeURIComponent(val)}
      </h1>
      <p className="mt-2 text-sm text-white/40">
        raw response from <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">/api/countries?val={val}</code>
      </p>

      {error ? (
        <p role="alert" className="mt-8 rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300/90">
          {error}
        </p>
      ) : country === null ? (
        <div className="mt-8 flex items-center gap-3 text-sm text-white/40">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-white" />
          Loading country...
        </div>
      ) : (
        <pre className="mt-8 max-h-[65vh] overflow-auto rounded-xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-5 text-white/70">
          {JSON.stringify(country, null, 2)}
        </pre>
      )}

    </div>
  );
}
