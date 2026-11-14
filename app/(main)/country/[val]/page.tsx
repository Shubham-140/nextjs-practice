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

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (country === null) {
    return <p>Loading country...</p>;
  }

  return <pre>{JSON.stringify(country, null, 2)}</pre>;
}
