export async function GET(request: Request) {
    const name = new URL(request.url).searchParams.get("val")?.trim();
    const apiKey = process.env.COUNTRY_API;

    if (!name) {
        return Response.json({ error: "Country name is required." }, { status: 400 });
    }

    if (!apiKey) {
        return Response.json({ error: "Missing environment variable: COUNTRY_API" }, { status: 500 });
    }

    try {
        const response = await fetch(
            `https://api.restcountries.com/countries/v5/names.common/${encodeURIComponent(name)}`,
            { headers: { Authorization: `Bearer ${apiKey}` } }
        );

        if (!response.ok) {
            return Response.json({ error: "Country lookup failed." }, { status: response.status });
        }

        const result = await response.json();
        const country = result.data?.objects?.[0];

        if (!country) {
            return Response.json({ error: "Country not found." }, { status: 404 });
        }

        return Response.json(country);
    } catch (error) {
        console.error("Country lookup failed:", error);
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}
