"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

type Country = {
  names: { common: string; official: string };
  codes?: { alpha_2?: string; alpha_3?: string };
  capitals?: { name: string }[];
  flag?: { emoji?: string; url_png?: string; description?: string };
  region?: string;
  subregion?: string;
  area?: { kilometers?: number };
  population?: number;
  borders?: string[];
  calling_codes?: string[];
  cars?: { driving_side?: string };
  currencies?: { code: string; name: string; symbol?: string }[];
  descriptions?: { short?: string; long?: string };
  government_type?: string;
  landlocked?: boolean;
  languages?: { name: string }[];
  timezones?: string[];
};

function formatNumber(value?: number) {
  return value === undefined ? undefined : value.toLocaleString("en-US");
}

function getDetails(country: Country) {
  return [
    { label: "Capital", value: country.capitals?.map((c) => c.name).join(", ") },
    { label: "Population", value: formatNumber(country.population) },
    {
      label: "Area",
      value: country.area?.kilometers !== undefined ? `${formatNumber(country.area.kilometers)} km²` : undefined,
    },
    { label: "Region", value: country.region },
    { label: "Subregion", value: country.subregion },
    { label: "Government", value: country.government_type },
    {
      label: "Currency",
      value: country.currencies
        ?.map((c) => `${c.name} (${c.symbol ? `${c.symbol} ` : ""}${c.code})`)
        .join(", "),
    },
    { label: "Languages", value: country.languages?.map((l) => l.name).join(", ") },
    { label: "Timezones", value: country.timezones?.join(", ") },
    { label: "Calling code", value: country.calling_codes?.map((c) => `+${c}`).join(", ") },
    { label: "Drives on", value: country.cars?.driving_side },
    {
      label: "Landlocked",
      value: country.landlocked === undefined ? undefined : country.landlocked ? "Yes" : "No",
    },
  ].filter((detail) => detail.value);
}

export default function CountryPage() {
  const { val } = useParams<{ val: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCountry() {
      try {
        const response = await fetch(`/api/countries?val=${encodeURIComponent(val)}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.error ?? `Country request failed (${response.status}).`);
        }

        setCountry(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Country request failed.");
      }
    }

    loadCountry();
  }, [val]);

  if (error) {
    return (
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold capitalize tracking-tight text-white">
          {decodeURIComponent(val)}
        </h1>
        <p role="alert" className="mt-8 rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300/90">
          {error}
        </p>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <div className="flex items-center gap-3 text-sm text-white/40">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-white" />
          Loading country...
        </div>
      </div>
    );
  }

  const details = getDetails(country);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">

      <div className="flex flex-col gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
        {country.flag?.url_png && (
          <Image
            src={country.flag.url_png}
            alt={country.flag.description ?? `Flag of ${country.names.common}`}
            width={160}
            height={107}
            className="h-auto w-40 shrink-0 rounded-md border border-white/10"
          />
        )}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white">{country.names.common}</h1>
            {country.codes?.alpha_2 && (
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60">
                {country.codes.alpha_2}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-white/40">{country.names.official}</p>
          {country.descriptions?.short && (
            <p className="mt-3 text-sm leading-relaxed text-white/70">{country.descriptions.short}</p>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {details.map((detail) => (
          <div key={detail.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-white/40">{detail.label}</p>
            <p className="mt-1.5 text-sm capitalize text-white">{detail.value}</p>
          </div>
        ))}
      </div>

      {country.borders && country.borders.length > 0 && (
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs text-white/40">Borders</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {country.borders.map((border) => (
              <span key={border} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                {border}
              </span>
            ))}
          </div>
        </div>
      )}

      {country.descriptions?.long && (
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs text-white/40">About</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{country.descriptions.long}</p>
        </div>
      )}

    </div>
  );
}
