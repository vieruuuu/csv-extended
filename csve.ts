function generateHeader<T>(json: T[]): string[] {
  const header: string[] = [];

  for (const element of json) {
    for (const key of Object.keys(element)) {
      if (!header.includes(key)) {
        header.push(key);
      }
    }
  }

  return header;
}

export function stringify<T>(_json: T | T[]): string {
  let json = Array.isArray(_json) ? _json : [_json];
  let csv = "";

  const header = generateHeader(json);

  csv += header.join(",") + "\n";

  for (const element of json) {
    let data = [];

    for (const headerEl of header) {
      // @ts-ignore trb sa repar asta candva ca tipa ts
      if (element[headerEl] === undefined) {
        data.push("");
      } else {
        // @ts-ignore trb sa repar asta candva ca tipa ts
        let da = element[headerEl];

        if (typeof da === "string") {
          da.replaceAll('"', '"""');
          da.replaceAll("\n", "\\n");
          da.replaceAll("\r", "\\r");

          da = '"' + da + '"';
        }

        if (Array.isArray(da)) {
          da = "[array]";
        }

        data.push(da);
      }
    }

    csv += data.join(",") + "\n";
  }

  return csv;
}
