export function formatName(name: string) {
  if (name.indexOf("-") >= 0) {
    let names = name.split("-");

    names = names.map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    });

    return names.toString().replace(",", " ");
  } else {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
